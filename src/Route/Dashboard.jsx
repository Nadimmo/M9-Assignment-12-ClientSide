import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex  lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-72 p-4 bg-gradient-to-r from-[#F7A582] via-[#FBBF93] to-[#F9E7DA] text-black">
        <ul className="space-y-2">
          {/* Surveys Dashboard */}
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Surveyor</h2>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink
              to={"/dashboard/surveyor/create"}
              className="block px-4 py-2 text-sm font-medium"
            >
              Create Survey
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink
              to={"/dashboard/surveyor/update"}
              className="block px-4 py-2 text-sm font-medium"
            >
              Update Surveyor
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink
              to={"/dashboard/surveyor/surveys"}
              className="block px-4 py-2 text-sm font-medium"
            >
              All Surveys
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink to={"/"} className="block px-4 py-2 text-sm font-medium">
              Home
            </NavLink>
          </li>

          <div className="divider my-4"></div>

          {/* Admin Dashboard */}
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Admin</h2>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink
              to={"/dashboard/admin/users"}
              className="block px-4 py-2 text-sm font-medium"
            >
              Manage User
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink
              to={"/dashboard/admin/surveys"}
              className="block px-4 py-2 text-sm font-medium"
            >
              Publish/UnPublish
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink
              to={"/dashboard/admin/payments"}
              className="block px-4 py-2 text-sm font-medium"
            >
              All Payments
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink to={"/"} className="block px-4 py-2 text-sm font-medium">
              Home
            </NavLink>
          </li>

          <div className="divider my-4"></div>

          {/* User Dashboard */}
          <h2 className="text-lg font-semibold mb-3 text-gray-800">User</h2>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink
              to={"/dashboard/user/surveys"}
              className="block px-4 py-2 text-sm font-medium"
            >
              Participate Surveys
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink
              to={"/dashboard/user/my-reports"}
              className="block px-4 py-2 text-sm font-medium"
            >
              My Reports
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink
              to={"/dashboard/user/comments"}
              className="block px-4 py-2 text-sm font-medium"
            >
              My Comments
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:bg-[#06b6d4] hover:text-white rounded-lg">
            <NavLink to={"/"} className="block px-4 py-2 text-sm font-medium">
              Home
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-gray-50 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
