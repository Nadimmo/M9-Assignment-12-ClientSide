import React, { useState } from "react";
import useUser from "../../../components/Hooks/useUser";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUserLock } from "react-icons/fa6";
import { FaUserCheck, FaUserSecret } from "react-icons/fa";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { users, refetch } = useUser(); // Fetching users from the custom hook
  const [filterRole, setFilterRole] = useState("All"); // State for dropdown filter

  // Debugging: Log users
  console.log("All Users:", users);

  const handlerMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handlerMakeSurvey = (user) => {
    axiosSecure
      .patch(`/surverys/surveyor/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is a Surveyor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Filter users based on the selected role
  const filteredUsers =
  filterRole === "All"
    ? users
    : users.filter((user) => {
        const userRole = user.role 
        return userRole === filterRole;
      });

  // Debugging: Log filtered users
  console.log("Filtered Users:", filteredUsers);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold text-white">Manage Users</h1>
      </div>

      {/* Role Filter Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="roleFilter"
          className="mr-4 text-lg font-medium text-gray-700"
        >
          Filter by Role:
        </label>
        <select
          id="roleFilter"
          value={filterRole}
          onChange={(e) => {
            setFilterRole(e.target.value);
            console.log("Selected Role:", e.target.value); // Debugging: Log role
          }}
          className="p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="All">All</option>
          <option value="surveyor">Surveyor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-purple-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                #
              </th>
              <th className="px-4 py-3 text-left font-semibold">Email</th>
              <th className="px-4 py-3 text-left font-semibold">Surveyor</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                Admin
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user._id}
                className={`text-gray-700 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  {user.role === "surveyor" ? (
                    <FaUserSecret className="text-2xl" />
                  ) : (
                    <button
                      onClick={() => handlerMakeSurvey(user)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 shadow-md"
                    >
                      Surveyor
                    </button>
                  )}
                </td>
                <td className="px-4 py-3">
                  {user.role === "admin" ? (
                    <FaUserCheck className="text-2xl" />
                  ) : (
                    <button
                      onClick={() => handlerMakeAdmin(user)}
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 shadow-md"
                    >
                      Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
