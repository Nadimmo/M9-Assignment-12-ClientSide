import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Featured = () => {
  const [featuredSurveys, setFeaturedSurveys] = useState([]);
  const axiosPublic = useAxiosPublic()

  useEffect(() => {
    axiosPublic.get("/featured")
      .then((res) => setFeaturedSurveys(res.data))
      .catch((error) =>
        console.error("Error fetching featured surveys:", error)
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
      <div
        key={survey._id}
        className="card bg-[#7BD3EA] lg:w-96 shadow-lg transition-transform hover:scale-105 lg:mt-0 mt-4"
      >
        <div className="card-body">
          <h2 className="card-title">{survey.title}</h2>
          <p>{survey.description}</p>
          <div className="card-actions mt-4 justify-end">
            <p className="text-xl">Total Vote: {totalVotes}</p>
            <Link className="btn bg-[#FC8F54]" to={`/surverys/${survey._id}`}>
              Survey Details
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center"> Featured Surveys🌟</h2>
      <div className="lg:grid grid-cols-3 gap-6">
        {featuredSurveys.map((survey) => (
          <SurveyCard key={survey._id} survey={survey} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
