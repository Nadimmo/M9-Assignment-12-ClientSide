import React, { useState } from 'react';
import useUser from '../../../components/Hooks/useUser';

const ManageUser = () => {
  const { users } = useUser(); // Fetching users from the custom hook
  const [filterRole, setFilterRole] = useState('All'); // State for dropdown filter

  // Handle role change from the dropdown
  const handleRoleChange = (role) => {
    setFilterRole(role);
  };

  // Filter users based on the selected role
  const filteredUsers = filterRole === 'All' 
    ? users 
    : users.filter(user => user.role === filterRole);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold text-white">Manage Users</h1>
      </div>

      {/* Role Filter Dropdown */}
      <div className="mb-6">
        <label htmlFor="roleFilter" className="mr-4 text-lg font-medium text-gray-700">
          Filter by Role:
        </label>
        <select
          id="roleFilter"
          value={filterRole}
          onChange={(e) => handleRoleChange(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="All">All</option>
          <option value="Surveyor">Surveyor</option>
          <option value="Admin">Admin</option>
          <option value="Pro-User">Pro-User</option>
        </select>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-purple-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">#</th>
              <th className="px-4 py-3 text-left font-semibold">Email</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className={`text-gray-700 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 shadow-md">
                      Surveyor
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 shadow-md">
                      Admin
                    </button>
                    <button className="bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600 shadow-md">
                      Pro-User
                    </button>
                  </div>
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
