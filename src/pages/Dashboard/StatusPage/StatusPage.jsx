import React from "react";
import useSurverys from "../../../components/Hooks/useSurverys";

const StatusPage = () => {
  const {surverys} = useSurverys();

//   console.log(surverys);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold text-white">Surveys Status</h1>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">#</th>
              <th className="px-4 py-3 text-left font-semibold">User Name</th>
              <th className="px-4 py-3 text-left font-semibold">Title</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {surverys && surverys.length > 0 ? (
              surverys.map((survey, index) => (
                <tr
                  key={survey.id}
                  className={`text-gray-700 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{survey.username || "N/A"}</td>
                  <td className="px-4 py-3">{survey.title || "No Title"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        survey.status === "active"
                          ? "bg-green-200 text-green-800"
                          : survey.status === "pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {survey.status || "Unknown"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center px-4 py-3 text-gray-500 italic"
                >
                  No surveys available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusPage;
