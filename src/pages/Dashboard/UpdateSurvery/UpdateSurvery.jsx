import { useLoaderData, useParams } from "react-router-dom";

const UpdateSurvery = () => {
  const { id } = useParams();
  const surveys = useLoaderData();

  // Check if the data is loaded correctly and what the structure is
  console.log(surveys);

  // Check the options structure and validate
  const options = surveys?.questions?.[0]?.options;

  // Check if options is an array before mapping over it
  const isOptionsArray = Array.isArray(options);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const deadline = form.deadline.value;

    console.log(title, description, category, deadline);
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

          {/* Options - Only display if options is an array */}
          <div>
            <label className="block font-semibold text-gray-700">
              Options
            </label>
            {isOptionsArray ? (
              <select
                name="options"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300 transition duration-200"
                required
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-red-600">Invalid options data.</p>
            )}
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

export default UpdateSurvery;
