import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateSurvey = () => {
  const { id } = useParams();
  const surveys = useLoaderData();
  const axiosPublic = useAxiosPublic()
  // console.log(surveys);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const selectedOption = form.options.value; // "Yes" or "No"
  
    // Get the current vote counts
    const currentOptions = surveys?.questions?.[0]?.options || { yes: 0, no: 0 };
  
    // Update the vote count based on the selected option
    const updatedOptions = {
      yes: selectedOption === "Yes" ? currentOptions.yes + 1 : currentOptions.yes,
      no: selectedOption === "No" ? currentOptions.no + 1 : currentOptions.no,
    };
  
    // Prepare updated questions
    const questions = [
      {
        title: surveys.questions[0].title,
        description: surveys.questions[0].description,
        options: updatedOptions,
      },
    ];
  
    const updateDoc = {
      title,
      description,
      category,
      deadline,
      questions,
    };
  
    // console.log(updateDoc);
  
    //  send the PATCH request
    axiosPublic.patch(`/survey/${id}`, updateDoc)
      .then(res => {
        console.log("Survey updated successfully:", res.data);
        if(res.data.modifiedCount){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }

      })
      .catch(err => {
        alert("Error updating survey:", err.message);
      });
  };
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8 animate-fade-in">
        Update Survey
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 bg-white shadow-lg rounded-lg p-8 animate-slide-up"
      >
        {/* Survey Details */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">
              Survey Title
            </label>
            <input
              defaultValue={surveys.title}
              type="text"
              name="title"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300 transition duration-200"
              placeholder="Enter the survey title"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Survey Description
            </label>
            <textarea
              defaultValue={surveys.description}
              name="description"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300 transition duration-200"
              rows="4"
              placeholder="Enter a brief description of the survey"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Category
            </label>
            <select
              defaultValue={surveys.category}
              name="category"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300 transition duration-200"
              required
            >
              <option value="Customer Feedback">Customer Feedback</option>
              <option value="Employee Satisfaction">
                Employee Satisfaction
              </option>
              <option value="Market Research">Market Research</option>
              <option value="Academic Study">Academic Study</option>
              <option value="Event Feedback">Event Feedback</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Deadline
            </label>
            <input
              defaultValue={surveys.deadline}
              type="date"
              name="deadline"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300 transition duration-200"
              required
            />
          </div>

          {/* Options - Only show "Yes" and "No" */}
          <div>
            <label className="block font-semibold text-gray-700">Options</label>
            <select
              name="options"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300 transition duration-200"
              required
            >
              <option
                defaultValue={surveys?.questions?.[0]?.options.yes}
                value="Yes"
              >
                Yes
              </option>
              <option
                defaultValue={surveys?.questions?.[0]?.options.no}
                value="No"
              >
                No
              </option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Submit Survey
        </button>
      </form>
    </div>
  );
};

export default UpdateSurvey;
