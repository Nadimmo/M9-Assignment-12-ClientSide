import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../components/Hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SurveyDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const survey = useLoaderData();
  const navigate = useNavigate();
  // console.log("yes vote count",survey.questions[0].options.yes)
  // console.log("no vote count",survey.questions[0].options.no)

  const [answers, setAnswers] = useState(survey.questions.map(() => ""));
  const [voteCounts, setVoteCounts] = useState(
    survey.questions.map((q) => q.options)
  );

  const [showModal, setShowModal] = useState(false);

  // Handle answer selection
  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  // Submit survey answers and update database
  const handleSubmitAnswers = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in to submit your responses.",
      });
      navigate("/login");
      return;
    }

    // Update local vote counts
    const updatedVotes = [...voteCounts];
    answers.forEach((answer, index) => {
      if (answer === "yes") updatedVotes[index].yes++;
      if (answer === "no") updatedVotes[index].no++;
    });

    // Prepare data for database
    const updatedSurvey = {
      ...survey,
      questions: survey.questions.map((question, index) => ({
        ...question,
        options: updatedVotes[index],
      })),
    };

    try {
      // Send updated survey data to database
      const response = await axiosPublic.put(
        `/surverys/${survey._id}`,
        updatedSurvey
      );

      if (response.status === 200) {
        setVoteCounts(updatedVotes);
        Swal.fire({
          icon: "success",
          title: "Responses Submitted",
          text: "Your responses have been recorded.",
        });
      }
    } catch (error) {
      console.error("Error updating survey:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your responses. Please try again later.",
      });
    }
  };

  // Handle report submission
  const handleSubmitReport = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const userEmail =  user?.email 

    const info = { title: title, description: description, email: userEmail };
    // console.log("Report Submitted:", report);
    setShowModal(false);
    axiosPublic
      .post("reports", info)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Report Submitted",
            text: "Your survey report has been submitted.",
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // // Handle form input for the modal
  // const handleReportChange = (e) => {
  //
  //   const { name, value } = e.target;
  //   setReport({ ...report, [name]: value },userEmail);
  // };

  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Survey Information Section */}
      <div className="bg-indigo-50 p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold text-indigo-600">{survey.title}</h1>
        <p className="text-gray-700 mt-2">{survey.description}</p>
        <div className="mt-4 text-sm text-gray-600">
          <p>
            <strong>Category:</strong> {survey.category}
          </p>
          <p>
            <strong>Deadline:</strong> {survey.deadline}
          </p>
        </div>
      </div>

      {/* Questions Section */}
      <div className="space-y-8">
        {survey.questions.map((question, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg border-t-4 border-indigo-500"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {index + 1}. {question.title}
            </h2>
            <p className="text-gray-600 mt-2">{question.description}</p>
            <div className="mt-4 space-x-4">
              <button
                onClick={() => handleAnswerChange(index, "yes")}
                className={`px-4 py-2 rounded-md ${
                  answers[index] === "yes"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-green-700`}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswerChange(index, "no")}
                className={`px-4 py-2 rounded-md ${
                  answers[index] === "no"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-red-700`}
              >
                No
              </button>
            </div>

            {/* Vote Counts */}
            <div className="mt-4 text-sm text-gray-600">
              Votes:
              <span className="text-green-600 font-semibold ml-2">
                Yes: {voteCounts[index].yes}
              </span>
              ,
              <span className="text-red-600 font-semibold ml-2">
                No: {voteCounts[index].no}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Answers Button */}
      <button
        onClick={handleSubmitAnswers}
        className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
      >
        Submit Responses
      </button>

      {/* Survey Report Button */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 w-full bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700"
      >
        Survey Report
      </button>

      {/* Modal for Survey Report */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Survey Report</h2>
            <form className="space-y-4" onSubmit={handleSubmitReport}>
              <div>
                <label className="block font-semibold mb-1">Survey Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter survey title"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Survey Description
                </label>
                <textarea
                  name="description"
                  className="w-full p-2 border rounded-md"
                  rows="4"
                  placeholder="Enter survey description"
                  required
                />
              </div>
              <button
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
              >
                Submit Report
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveyDetails;
