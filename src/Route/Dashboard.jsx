import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // console.log(isAdmin)
  return (
    <div className="flex">
      <div className=" lg:w-96 min-h-screen p-5 bg-[#F7A582] text-black">
        <ul>
          <>
            {/* surveys dashboard */}
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/dashboard/surveyor/create"}>Create Survey</NavLink>
            </li>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/dashboard/surveyor/update"}>
                Update Surveyor
              </NavLink>
            </li>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/dashboard/surveyor/surveys"}>All Surveys</NavLink>
            </li>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </>

          <div className="divider"></div>

          {/* admin dashboard */}
          <>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/dashboard/admin/users"}>Manage User</NavLink>
            </li>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/dashboard/admin/surveys"}>
                Publish/UnPublish
              </NavLink>
            </li>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/dashboard/admin/payments"}>All Payment</NavLink>
            </li>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </>

          <div className="divider"></div>

          {/* // user dashboard? */}
          <>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/dashboard/user/surveys"}>Participate Surveys</NavLink>
            </li>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/dashboard/user/my-reports"}>My Reports</NavLink>
            </li>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/dashboard/user/comments"}>My Comments</NavLink>
            </li>
            <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </>
        </ul>
      </div>
      {/* outlet */}
      <div className="flex-1 p-10 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
