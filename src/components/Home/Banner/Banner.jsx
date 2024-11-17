import React from "react";
import banner from '../../../assets/banner.webp'
const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[80vh]" // Adjusted height for medium size
      style={{
        backgroundImage: `url(${banner})`, // Medium-sized image
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to SurveyPro 🚀
        </h1>
        <p className="text-lg md:text-xl mb-4 max-w-2xl">
          At SurveyPro, we empower businesses and individuals to gather insights
          effortlessly. Whether you're conducting market research, gathering
          employee feedback, or exploring new trends, our tools are designed to
          make your surveys seamless and impactful.
        </p>
        <p className="text-sm md:text-lg max-w-2xl mb-6">
         Join us in shaping the future of data-driven
          solutions.
        </p>
        <button className="px-6 py-3 text-lg font-medium bg-indigo-600 rounded-full hover:bg-indigo-500 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
