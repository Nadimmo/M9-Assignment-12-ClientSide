import React from "react";
import { FaEdit, FaShareAlt, FaChartBar } from "react-icons/fa";

const Works = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          How It Works 🛠
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Discover how SurveyPro simplifies survey creation and analysis in just a few steps. With our user-friendly interface, anyone can create and share impactful surveys in no time.
        </p>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="group relative p-6 bg-white rounded-xl shadow-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full flex items-center justify-center mb-4 text-3xl transition-colors duration-300">
              <FaEdit />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              Create
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
              Choose a template or start from scratch. Customize your survey to match your goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group relative p-6 bg-white rounded-xl shadow-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full flex items-center justify-center mb-4 text-3xl transition-colors duration-300">
              <FaShareAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              Share
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
              Share your survey via a link, email, or embed it directly on your website.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group relative p-6 bg-white rounded-xl shadow-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full flex items-center justify-center mb-4 text-3xl transition-colors duration-300">
              <FaChartBar />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              Analyze
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
              Collect responses and analyze real-time insights with our powerful analytics tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
