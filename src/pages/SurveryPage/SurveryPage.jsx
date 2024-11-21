import React from "react";
import useSurverys from "../../components/Hooks/useSurverys";
import { Link } from "react-router-dom";

const SurveryPage = () => {
  const { surverys } = useSurverys();

  return (
    <div className="lg:grid grid-cols-3 gap-6 items-center rounded-xl lg:p-6 mb-6 mx-auto ">
      {surverys.map((survey) => {
        // Calculate total votes for this survey
        const totalVotes = survey.questions.reduce((acc, question) => {
          const options = question.options; // { yes: 5, no: 3 }
          const votes = Object.values(options).reduce(
            (sum, value) => sum + value,
            0
          );
          return acc + votes;
        }, 0);

        return (
          <div
            key={survey._id}
            className="card bg-[#7BD3EA]  lg:w-96 shadow-lg transition-transform hover:scale-105 lg:mt-0 mt-4"
          >
            <div className="card-body">
              <h2 className="card-title">{survey.title}</h2>
              <p>{survey.description}</p>
              <div className="card-actions mt-4 justify-end">
                <p className="text-xl">Total Vote: {totalVotes}</p>
                <Link
                  className="btn  bg-[#FC8F54]"
                  to={`/surverys/${survey._id}`}
                >
                  Survey Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SurveryPage;
