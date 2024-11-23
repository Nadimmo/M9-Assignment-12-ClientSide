import { useParams } from "react-router-dom";
import { useState } from "react";
import useSurverys from "../../../components/Hooks/useSurverys";

const ViewParticipation = () => {
  const { id } = useParams(); // Survey ID
  const { surverys } = useSurverys(); // Fetch all surveys
  const [responses, setResponses] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Find the survey by ID
  const surveyDetails = surverys.find((survey) => survey._id === id);

  if (!surveyDetails) {
    return <div>Loading survey details...</div>;
  }

  // Check if the deadline has passed
  const currentDate = new Date();
  const isDeadlinePassed = new Date(surveyDetails.deadline) < currentDate;

  // Handle response changes (making sure only one option is selected)
  const handleResponseChange = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  // Submit participation
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User responses:", responses);
    setIsSubmitted(true); // Mark as submitted
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Survey: {surveyDetails.title}
      </h1>
      <p className="text-gray-700 text-center mb-4">
        {surveyDetails.description}
      </p>

      {isDeadlinePassed ? (
        <div className="text-center text-red-600 font-bold">
          The deadline for this survey has passed. Participation is closed.
        </div>
      ) : isSubmitted ? (
        <div className="text-center text-green-600 font-bold">
          Thank you for participating!
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Answer the Questions</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {surveyDetails.questions.map((question, index) => (
              <div key={question._id} className="mb-4">
                <label className="block font-semibold mb-2">
                  Q{index + 1}: {question.title}
                </label>
                <div className="space-y-2">
                  {Array.isArray(question.options)
                    ? question.options.map((option, idx) => (
                        <label key={idx} className="block">
                          <input
                            type="radio"
                            name={question._id} // Same name for all options to ensure only one can be selected
                            value={option}
                            checked={responses[question._id] === option} // Ensure the selected option is checked
                            onChange={() =>
                              handleResponseChange(question._id, option)
                            }
                            required
                            className="mr-2"
                          />
                          {option}
                        </label>
                      ))
                    : ['Yes', 'No'].map((defaultOption, idx) => (
                        <label key={idx} className="block">
                          <input
                            type="radio"
                            name={question._id} // Same name for all options to ensure only one can be selected
                            value={defaultOption}
                            checked={responses[question._id] === defaultOption} // Ensure the selected option is checked
                            onChange={() =>
                              handleResponseChange(question._id, defaultOption)
                            }
                            required
                            className="mr-2"
                          />
                          {defaultOption}
                        </label>
                      ))}
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewParticipation;
