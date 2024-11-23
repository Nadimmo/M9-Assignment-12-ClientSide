import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../components/Hooks/useAxiosPublic";

const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data for submission
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    if (file) {
      data.append("file", file);
    }

    try {
      const response = await axiosPublic.post("/contact", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your message has been sent successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFile(null);
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your form. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-12 rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg leading-relaxed">
          Have questions or need assistance? Reach out to us anytime.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold text-gray-600 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600 mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600 mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600 mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold text-gray-600 mb-2" htmlFor="file">
              Upload File (optional)
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-600 text-white w-full py-3 rounded-md hover:bg-teal-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Contact Information Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Phone */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="text-teal-600 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3.75a17.25 17.25 0 0117.25 17.25m0-6.75a10.5 10.5 0 00-10.5-10.5m0 0v-3m0 3h3"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="text-teal-600 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 8.25l7.5 4.5 7.5-4.5M3.75 8.25V15a3 3 0 003 3h10.5a3 3 0 003-3V8.25M3.75 8.25L12 12.75m0 0l8.25-4.5"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">support@surveyapp.com</p>
          </div>
        </div>
        {/* Address */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="text-teal-600 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.556 0 8.25-3.694 8.25-8.25s-3.694-8.25-8.25-8.25-8.25 3.694-8.25 8.25 3.694 8.25 8.25 8.25z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Address</h3>
            <p className="text-gray-600">123 Survey Ave, Feedback City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
