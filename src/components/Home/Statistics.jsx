import React from "react";
import { FaUsers, FaPoll, FaGlobe, FaChartLine } from "react-icons/fa";

const Statistics = () => {
  const stats = [
    {
      icon: <FaUsers className="text-4xl text-[#6e54b5]" />,
      title: "Total Users",
      value: "25,000+",
      description: "Engaged and active users worldwide.",
    },
    {
      icon: <FaPoll className="text-4xl text-[#6e54b5]" />,
      title: "Surveys Created",
      value: "12,500+",
      description: "Surveys hosted across various categories.",
    },
    {
      icon: <FaGlobe className="text-4xl text-[#6e54b5]" />,
      title: "Global Reach",
      value: "100+ Countries",
      description: "Users from over 100 countries.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#6e54b5]" />,
      title: "Responses Collected",
      value: "1M+",
      description: "Insights and data-driven responses.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Our Achievements
        </h2>
        <p className="text-gray-600 mb-12">
          See how our platform has impacted the community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center items-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-[#6e54b5] mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
