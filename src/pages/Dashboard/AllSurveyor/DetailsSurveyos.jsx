import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";

const DetailsSurveyos = () => {
  const { id } = useParams(); // Survey ID
  const axiosPublic = useAxiosPublic();
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    // Fetch survey details and responses
    const fetchSurveyDetails = async () => {
      try {
        const response = await axiosPublic.get(`/surverys/${id}`);
        setSurvey(response.data);
      } catch (error) {
        console.error("Error fetching survey details:", error);
      }
    };

    fetchSurveyDetails();
  }, [id]);

  if (!survey) {
    return <div>Loading survey details...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Survey: {survey.title}
      </h1>
      <p className="text-gray-700 text-center mb-4">{survey.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Responses</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">User Name</th>
            <th className="py-2 px-4">Total Votes</th>
          </tr>
        </thead>
        <tbody>
          {survey.questions.map((question, index) => {
            const totalVotes =
              (question.options.yes || 0) + (question.options.no || 0);

            return (
              <tr key={index} className="border-t">
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4">{survey.email}</td>
                <td className="py-2 px-4">{survey.username}</td>
                <td className="py-2 px-4 text-center font-semibold">
                  {totalVotes}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsSurveyos;
