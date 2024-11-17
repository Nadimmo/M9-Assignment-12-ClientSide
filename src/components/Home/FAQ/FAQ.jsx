import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is SurveyPro?",
      answer:
        "SurveyPro is an intuitive platform for creating, sharing, and analyzing surveys. It’s designed for businesses, educators, and individuals to gather insights effortlessly.",
    },
    {
      question: "How can I create a survey?",
      answer:
        "Simply log in, select a template, or start from scratch. Customize your questions and themes to align with your goals, then publish your survey to share it.",
    },
    {
      question: "What types of surveys can I create?",
      answer:
        "You can create surveys for market research, customer feedback, employee satisfaction, academic studies, and more. Choose from a variety of question types to suit your needs.",
    },
    {
      question: "How do I analyze survey results?",
      answer:
        "SurveyPro provides real-time analytics with visual charts and downloadable reports. Use these insights to make data-driven decisions.",
    },
    {
      question: "Is my data secure on SurveyPro?",
      answer:
        "Absolutely! We prioritize data security with end-to-end encryption and compliance with global privacy standards.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">FAQ ❓📚</h2>
        <p className="text-lg md:text-xl text-center mb-12 text-gray-600">
          Find answers to the most commonly asked questions about SurveyPro and its features.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-lg"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-800"
              >
                {faq.question}
                <span className="text-indigo-600 text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
