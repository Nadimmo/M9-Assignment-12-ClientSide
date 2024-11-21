import React, { useState } from "react";
import useSurverys from "../../components/Hooks/useSurverys";
import { Link } from "react-router-dom";

const SurveryPage = () => {
  const { surverys } = useSurverys();
  const [sortBy, setSortBy] = useState("default");

  // Function to sort surveys
  const getSortedSurveys = () => {
    if (sortBy === "votes") {
      return [...surverys].sort((a, b) => {
        const totalVotesA = a.questions.reduce(
          (acc, question) =>
            acc +
            Object.values(question.options).reduce((sum, value) => sum + value, 0),
          0
        );
        const totalVotesB = b.questions.reduce(
          (acc, question) =>
            acc +
            Object.values(question.options).reduce((sum, value) => sum + value, 0),
          0
        );
        return totalVotesB - totalVotesA; // Sort descending by votes
      });
    }

    if (sortBy === "category") {
      return [...surverys].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    }

    return surverys; // Default sorting
  };

  const sortedSurverys = getSortedSurveys();

  return (
    <div className="container mx-auto ">
      {/* Sorting Buttons */}
      <div className="flex justify-around mb-6">
        <button
          className="btn bg-blue-500 text-white hover:text-black mr-4"
          onClick={() => setSortBy("votes")}
        >
          Sort by Voting
        </button>
        <button
          className="btn bg-green-500 text-white  hover:text-black"
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      {/* Surveys List */}
      <div className="lg:grid grid-cols-3 gap-6 items-center rounded-xl lg:p-6 mb-6 mx-auto">
        {sortedSurverys.map((survey) => {
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
                <p className="text-sm">Category: {survey.category}</p>
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
    </div>
  );
};

export default SurveryPage;
