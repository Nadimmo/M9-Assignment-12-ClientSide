import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../components/Hooks/useAdmin";
import useSurveyor from "../components/Hooks/useSurveyor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isSurveyor] = useSurveyor();

  // console.log("admin", isAdmin, "surveyor", isSurveyor);

  return (
    <div className="flex lg:flex-row">
      {/* Sidebar */}
      <div className="w-full min-h-screen lg:w-72 p-4 bg-gradient-to-r from-[#F7A582] via-[#FBBF93] to-[#F9E7DA] text-black">
        <ul className="space-y-2">
          {/* Conditional Dashboard Sections */}
          {isAdmin ? (
            <>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                Admin Dashboard
              </h2>
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
            </>
          ) : isSurveyor ? (
            <>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                Surveyor Dashboard
              </h2>
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
                  to={"/dashboard/surveyor/surveys"}
                  className="block px-4 py-2 text-sm font-medium"
                >
                  All Surveys
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                User Dashboard
              </h2>
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
            </>
          )}

          {/* Common Link */}
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
