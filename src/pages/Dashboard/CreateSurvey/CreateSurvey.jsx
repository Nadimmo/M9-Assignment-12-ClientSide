import React, { useState } from "react";
import axios from "axios";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CreateSurvey = () => {
  const axiosPublic = useAxiosPublic();
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({
    title: "",
    description: "",
  });
  const [survey, setSurvey] = useState({
    title: "",
    description: "",
    category: "",
    deadline: "",
  });

  // Predefined categories
  const categories = [
    "Customer Feedback",
    "Employee Satisfaction",
    "Market Research",
    "Academic Study",
    "Event Feedback",
  ];

  const handleSurveyChange = (e) => {
    const { name, value } = e.target;
    setSurvey({ ...survey, [name]: value });
  };

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const addQuestion = () => {
    if (question.title && question.description) {
      setQuestions([
        ...questions,
        {
          ...question,
          options: { yes: 0, no: 0 },
        },
      ]);
      setQuestion({ title: "", description: "" });
    } else {
      alert("Please fill in both the question title and description.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const surveyData = {
      ...survey,
      questions,
      status: "publish", // Default value added on the backend
    };

    try {
      const response = await axiosPublic.post("/surverys/create", surveyData);
      if (response.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(response.data, surveyData)
    } catch (error) {
      console.error("Error creating survey:", error);
      alert("There was an error creating the survey.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Create a New Survey</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 shadow-md rounded-lg"
      >
        {/* Survey Details */}
        <div>
          <label className="block font-semibold mb-1">Survey Title</label>
          <input
            type="text"
            name="title"
            value={survey.title}
            onChange={handleSurveyChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Survey Description</label>
          <textarea
            name="description"
            value={survey.description}
            onChange={handleSurveyChange}
            className="w-full p-2 border rounded-md"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            value={survey.category}
            onChange={handleSurveyChange}
            className="w-full p-2 border rounded-md"
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
          <label className="block font-semibold mb-1">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={survey.deadline}
            onChange={handleSurveyChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Question Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">Add Questions</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Question Title</label>
              <input
                type="text"
                name="title"
                value={question.title}
                onChange={handleQuestionChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Question Description
              </label>
              <textarea
                name="description"
                value={question.description}
                onChange={handleQuestionChange}
                className="w-full p-2 border rounded-md"
                rows="2"
                required
              />
            </div>
            <button
              type="button"
              onClick={addQuestion}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Add Question
            </button>
          </div>
          <ul className="mt-4 space-y-2">
            {questions.map((q, index) => (
              <li key={index} className="p-3 border rounded-md bg-gray-100">
                <strong>{q.title}</strong> - {q.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Submit Survey
        </button>
      </form>
    </div>
  );
};

export default CreateSurvey;
