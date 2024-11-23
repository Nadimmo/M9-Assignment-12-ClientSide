import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">About Our Survey Application</h1>
        <p className="text-lg leading-relaxed">
          Welcome to our survey application, a powerful and user-friendly platform designed to help you create, manage, and analyze surveys with ease. Whether you’re gathering feedback, conducting research, or seeking opinions, our app provides all the tools you need to succeed.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Create Surveys</h2>
          <p className="text-gray-600">
            Design surveys effortlessly with customizable questions, categories, and deadlines to suit your specific needs.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Collect Responses</h2>
          <p className="text-gray-600">
            Share your surveys with ease and gather real-time responses from your audience for actionable insights.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Analyze Results</h2>
          <p className="text-gray-600">
            Gain a deeper understanding of your data with detailed reports, statistics, and visualizations.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">User Management</h2>
          <p className="text-gray-600">
            Securely manage user access, track participation, and ensure the integrity of your surveys.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Customizable Options</h2>
          <p className="text-gray-600">
            Tailor your surveys with various question types, voting options, and advanced configurations.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-indigo-500 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Mobile Friendly</h2>
          <p className="text-gray-600">
            Access and manage your surveys from any device with our responsive, mobile-friendly design.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mt-12 bg-indigo-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to simplify the process of gathering insights, fostering informed decision-making, and empowering individuals and organizations to create impactful surveys. We are committed to providing a reliable, efficient, and secure platform that meets the evolving needs of our users.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of satisfied users and start creating impactful surveys today!
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 shadow-md">
          Explore Surveys
        </button>
      </div>
    </div>
  );
};

export default About;
