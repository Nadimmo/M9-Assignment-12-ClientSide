// import React, { useState, useEffect } from "react";
// // import { useParams} from "react-router-dom";
// // import Swal from "sweetalert2";
// import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";

// const UpdateSurvery = () => {
//   // const { id } = useParams(); // Survey ID from URL
//   const axiosPublic = useAxiosPublic()
//   const [survey, setSurvey] = useState(null);

//   // Predefined categories
//   const categories = [
//     "Customer Feedback",
//     "Employee Satisfaction",
//     "Market Research",
//     "Academic Study",
//     "Event Feedback",
//   ];

//   // useEffect(() => {
//   //   // Fetch survey details
//   //   const fetchSurvey = async () => {
//   //     try {
//   //       const response = await axiosPublic.get(`/surverys/${id}`);
//   //       const data = await response.json();
//   //       setSurvey(data);
//   //     } catch (error) {
//   //       console.error("Error fetching survey:", error);
//   //       Swal.fire("Error", "Failed to load survey details", "error");
//   //     }
//   //   };

//   //   fetchSurvey();
//   // }, [id]);

//   // // Handle form changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSurvey({ ...survey, [name]: value });
//   };

//   // // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log()

//   //   try {
//   //     const response = await axiosPublic.put(`/surverys/${id}`,survey);

//   //     const result = await response.json();

//   //     if (response.ok) {
//   //       Swal.fire("Success", "Survey updated successfully!", "success");
//   //     } else {
//   //       Swal.fire("Error", result.message || "Failed to update survey", "error");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error updating survey:", error);
//   //     Swal.fire("Error", "An error occurred while updating the survey", "error");
//   //   }
//   // };

//   // if (!survey) {
//   //   return <div>Loading survey details...</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto py-12">
//       <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
//         Update Survey
//       </h1>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 shadow-md rounded-lg space-y-6"
//       >
//         <div>
//           <label className="block font-semibold mb-1">Survey Title</label>
//           <input
//             type="text"
//             name="title"
//             value={survey.title}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1">Survey Description</label>
//           <textarea
//             name="description"
//             value={survey.description}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//             rows="4"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1">Category</label>
//           <select
//             name="category"
//             value={survey.category}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//             required
//           >
//             <option value="">Select a Category</option>
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block font-semibold mb-1">Deadline</label>
//           <input
//             type="date"
//             name="deadline"
//             value={survey.deadline}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Questions</h2>
//           {survey.questions.map((question, index) => (
//             <div key={index} className="p-4 bg-gray-100 rounded-md mb-4">
//               <label className="block font-semibold mb-1">Question Title</label>
//               <input
//                 type="text"
//                 name={`questions[${index}].title`}
//                 value={question.title}
//                 onChange={(e) => {
//                   const updatedQuestions = [...survey.questions];
//                   updatedQuestions[index].title = e.target.value;
//                   setSurvey({ ...survey, questions: updatedQuestions });
//                 }}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <label className="block font-semibold mt-4">Description</label>
//               <textarea
//                 name={`questions[${index}].description`}
//                 value={question.description}
//                 onChange={(e) => {
//                   const updatedQuestions = [...survey.questions];
//                   updatedQuestions[index].description = e.target.value;
//                   setSurvey({ ...survey, questions: updatedQuestions });
//                 }}
//                 className="w-full p-2 border rounded-md"
//                 rows="3"
//                 required
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
//         >
//           Update Survey
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateSurvery;

import React from 'react'

const UpdateSurvery = () => {
  return (
    <div>UpdateSurvery</div>
  )
}

export default UpdateSurvery