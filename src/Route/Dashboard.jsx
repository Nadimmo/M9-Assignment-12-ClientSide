import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../components/Hooks/useAdmin";
import useSurveyor from "../components/Hooks/useSurveyor";
import { FaBars } from "react-icons/fa";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isSurveyor] = useSurveyor();
  const [isOpen, setIsOpen] = useState(false);

  // console.log("admin", isAdmin, "surveyor", isSurveyor);

  return (
    <div className="min-h-screen">
      <button className='md:hidden p-3 bg-gradient-to-r from-[#F7A582] via-[#FBBF93] to-[#F9E7DA]hover:bg-gray-700 transition duration-300' onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} />
      </button>
    <div className="flex lg:flex-row">
      {/* Sidebar */}
      <div className={`w-full min-h-screen lg:w-72 p-4 bg-gradient-to-r from-[#F7A582] via-[#FBBF93] to-[#F9E7DA] text-black ${isOpen? "block":"hidden"} md:block`} >
        <ul className="space-y-2">
          {/* Conditional Dashboard Sections */}
          {isAdmin ? (
            <>
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
    </div>
  );
};

export default Dashboard;
