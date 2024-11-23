import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "SurveyPro made it so easy to collect feedback from my clients. The insights have been invaluable!",
    image: "https://i.ibb.co.com/bL9nVVT/Ellipse-2.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "I love how simple it is to create and share surveys. Highly recommend SurveyPro!",
    image: "https://i.ibb.co.com/bL9nVVT/Ellipse-2.png",
  },
  {
    id: 3,
    name: "Alex Johnson",
    feedback:
      "The analytics dashboard is amazing. It helped me understand my audience like never before.",
    image: "https://i.ibb.co.com/bL9nVVT/Ellipse-2.png",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center 
              transition-all duration-500 transform hover:scale-105 hover:bg-blue-100 hover:shadow-lg animate-fade-in`}
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: "forwards",
            }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 transition-transform duration-500 hover:rotate-6"
            />
            <h3 className="text-xl font-medium">{testimonial.name}</h3>
            <p className="mt-2 text-gray-600">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
