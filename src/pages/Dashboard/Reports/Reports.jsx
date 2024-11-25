import React from "react";
import useReports from "../../../components/Hooks/useReports";
import { Link } from "react-router-dom";

const Reports = () => {
  const { reports } = useReports();
  // console.log(reports);
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        My Report
      </h1>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Description</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report,index) => (
            <>
              <tr key={report._id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4">{report.title}</td>
                <td className="py-2 px-4">{report.description}</td>
                
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
