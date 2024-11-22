import { useNavigate } from "react-router-dom";
import useSurverys from "../../../components/Hooks/useSurverys";

const Participate = () => {
  const navigate = useNavigate();
  const { surverys } = useSurverys();
  const currentDate = new Date(); // Get current date

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Participate in Surveys
      </h1>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Deadline</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {surverys.map((survey, index) => {
            const isDeadlinePassed = new Date(survey.deadline) < currentDate;

            return (
              <tr key={survey._id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4">{survey.title}</td>
                <td className="py-2 px-4">{survey.category}</td>
                <td className="py-2 px-4">{survey.deadline}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() =>
                      navigate(`/dashboard/user/surveys/${survey._id}`)
                    }
                    disabled={isDeadlinePassed}
                    className={`py-2 px-4 rounded-md text-white ${
                      isDeadlinePassed
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                  >
                    Participate
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Participate;
