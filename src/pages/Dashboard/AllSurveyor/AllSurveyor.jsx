// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useSurverys from "../../../components/Hooks/useSurverys";

const AllSurveyor = () => {
//   const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();
const {surverys} = useSurverys()

  
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        My Surveys
      </h1>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Deadline</th>
            <th className="py-2 px-4">Responses</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {surverys.map((survey, index) => (
            <tr key={survey._id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4 text-center">{index + 1}</td>
              <td className="py-2 px-4">{survey.title}</td>
              <td className="py-2 px-4">{survey.category}</td>
              <td className="py-2 px-4">{survey.deadline}</td>
              <td className="py-2 px-4 text-center">
                {survey.responses ? survey.responses.length : 0}
              </td>
              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => navigate(`/dashboard/surveyor/surveys/${survey._id}`)}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSurveyor;
