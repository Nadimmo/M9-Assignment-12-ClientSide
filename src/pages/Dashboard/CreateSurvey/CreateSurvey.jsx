import React, { useState } from "react";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CreateSurvey = () => {
  const axiosPublic = useAxiosPublic();
  const [survey, setSurvey] = useState({
    title: "",
    description: "",
    category: "",
    deadline: "",
    email: "",
    username: "",
    questions: [
      {
        title: "",
        description: "",
        options: { yes: 0, no: 0 },
      },
    ],
  });

  const categories = [
    "Customer Feedback",
    "Health & Wellness",
    "Market Research",
    "Academic Study",
    "Event Feedback",
  ];

  const handleSurveyChange = (e) => {
    const { name, value } = e.target;
    setSurvey({ ...survey, [name]: value });
  };

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const updatedQuestions = [...survey.questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [name]: value };
    setSurvey({ ...survey, questions: updatedQuestions });
  };

  const handleOptionChange = (e, index, option) => {
    const { value } = e.target;
    const updatedQuestions = [...survey.questions];
    updatedQuestions[index].options[option] = parseInt(value, 10) || 0;
    setSurvey({ ...survey, questions: updatedQuestions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const surveyData = {
      ...survey,
      status: "publish",
    };

    try {
      const response = await axiosPublic.post("/surverys/create", surveyData);
      if (response.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Survey successfully created!",
          showConfirmButton: false,
          timer: 1500,
        });
        setSurvey({
          title: "",
          description: "",
          category: "",
          deadline: "",
          email: "",
          username: "",
          questions: [
            { title: "", description: "", options: { yes: 0, no: 0 } },
          ],
        });
      }
    } catch (error) {
      console.error("Error creating survey:", error);
      alert("There was an error creating the survey.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Create a New Survey
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 bg-white shadow-lg rounded-lg p-8"
      >
        {/* User Details */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={survey.username}
              onChange={handleSurveyChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={survey.email}
              onChange={handleSurveyChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        {/* Survey Details */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">
              Survey Title
            </label>
            <input
              type="text"
              name="title"
              value={survey.title}
              onChange={handleSurveyChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter the survey title"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Survey Description
            </label>
            <textarea
              name="description"
              value={survey.description}
              onChange={handleSurveyChange}
              className="w-full p-3 border rounded-lg"
              rows="4"
              placeholder="Enter a brief description of the survey"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Category</label>
            <select
              name="category"
              value={survey.category}
              onChange={handleSurveyChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Select a Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={survey.deadline}
              onChange={handleSurveyChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
        </div>

        {/* Questions Section */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Questions
          </h2>
          {survey.questions.map((q, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm mb-4"
            >
              <div>
                <label className="block font-semibold text-gray-700">
                  Question Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={q.title}
                  onChange={(e) => handleQuestionChange(e, index)}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter the question title"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block font-semibold text-gray-700">
                  Question Description
                </label>
                <textarea
                  name="description"
                  value={q.description}
                  onChange={(e) => handleQuestionChange(e, index)}
                  className="w-full p-3 border rounded-lg"
                  rows="2"
                  placeholder="Enter the question description"
                  required
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700">Yes</label>
                  <input
                    type="number"
                    value={q.options.yes}
                    onChange={(e) => handleOptionChange(e, index, "yes")}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Votes for Yes"
                    min="0"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">No</label>
                  <input
                    type="number"
                    value={q.options.no}
                    onChange={(e) => handleOptionChange(e, index, "no")}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Votes for No"
                    min="0"
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700"
        >
          Submit Survey
        </button>
      </form>
    </div>
  );
};

export default CreateSurvey;
