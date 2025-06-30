import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Latest = () => {
  const [latestSurveys, setLatestSurveys] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/latest")
      .then((res) => setLatestSurveys(res.data))
      .catch((error) =>
        console.error("Error fetching latest surveys:", error)
      );
  }, []);

  const SurveyCard = ({ survey }) => {
    const totalVotes = survey.questions.reduce((acc, question) => {
      return (
        acc +
        Object.values(question.options).reduce((sum, value) => sum + value, 0)
      );
    }, 0);

    return (
      <div class="flex items-center justify-center p-4 ">
        <div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl overflow-hidden lg:h-[250px] ">
          <div class="p-4 text-white">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h2 class="text-xl font-bold mb-2">{survey.title}</h2>
                <p class="text-slate-300 text-sm mb-4">{survey.description}</p>
              </div>

            </div>

            <div class="flex items-center justify-between mt-6">
              <Link to={`/surverys/${survey._id}`} class="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                View Survey
              </Link>

              <div class="text-sm text-slate-300 relative pl-6">
                 Votes: <span class="font-bold text-blue-400">{totalVotes}</span>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center"> Latest Surveys 📅</h2>
      <div className="lg:grid grid-cols-3 gap-6">
        {latestSurveys.map((survey) => (
          <SurveyCard key={survey._id} survey={survey} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
