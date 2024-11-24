import React, { useState } from "react";
import useSurverys from "../../components/Hooks/useSurverys";
import { Link } from "react-router-dom";

const SurveryPage = () => {
  const { surverys } = useSurverys();
  const [sortBy, setSortBy] = useState("default");

  // Extract unique categories for the dropdown
  const categories = [
    ...new Set(surverys.map((survey) => survey.category)),
  ].sort();

  const getSortedSurveys = () => {
    if (sortBy === "votes") {
      return [...surverys].sort((a, b) => {
        const totalVotesA = (a.questions || []).reduce(
          (acc, question) =>
            acc +
            Object.values(question.options || {}).reduce(
              (sum, value) => sum + value,
              0
            ),
          0
        );
  
        const totalVotesB = (b.questions || []).reduce(
          (acc, question) =>
            acc +
            Object.values(question.options || {}).reduce(
              (sum, value) => sum + value,
              0
            ),
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
  
    if (categories.includes(sortBy)) {
      return surverys.filter((survey) => survey.category === sortBy);
    }
  
    return surverys; // Default sorting
  };

  const sortedSurverys = getSortedSurveys()
  console.log(sortedSurverys[0])

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-600">Surveys</h1>
        <div className="flex items-center gap-4">
          {/* Sort by Votes Button */}
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 shadow-md"
            onClick={() => setSortBy("votes")}
          >
            Sort by Votes
          </button>

          {/* Dropdown for Categories */}
          <select
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-green-600"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Surveys List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedSurverys.map((survey) => {
          // Calculate total votes for this survey
          const totalVotes = survey.questions.reduce((acc, question) => {
            const options = question.options;
            const votes = Object.values(options).reduce(
              (sum, value) => sum + value,
              0
            );
            return acc + votes;
          }, 0);

          return (
            <div
              key={survey._id}
              className="bg-gradient-to-r from-indigo-400 to-blue-400 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <h2 className="text-2xl font-semibold mb-2">{survey.title}</h2>
              <p className="mb-4">{survey.description}</p>
              <p className="text-sm mb-2">
                <span className="font-semibold">Category:</span> {survey.category}
              </p>
              <p className="text-sm mb-4">
                <span className="font-semibold">Deadline:</span> {survey.deadline}
              </p>
              <div className="flex justify-between">
              <p className="text-lg font-bold mb-4">
                Total Votes: <span className="text-yellow-300">{totalVotes}</span>
              </p>
              <Link
                to={`/surverys/${survey._id}`}
                className="bg-[#FC8F54] text-black px-4 py-2 rounded-md hover:bg-sky-500 transition-all"
              >
                View Details
              </Link>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SurveryPage;
