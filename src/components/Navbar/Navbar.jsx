import React, { useContext } from "react";
import { SiLimesurvey } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../Hooks/useAdmin";
import useSurveyor from "../Hooks/useSurveyor";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isSurveyor] = useSurveyor();

  const Links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="text-lg text-gray-700 hover:text-blue-600 font-medium"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className="text-lg text-gray-700 hover:text-blue-600 font-medium"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/surverys"}
          className="text-lg text-gray-700 hover:text-blue-600 font-medium"
        >
          Surveys
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/price"}
          className="text-lg text-gray-700 hover:text-blue-600 font-medium"
        >
          Pricing
        </NavLink>
      </li>
      {user && isAdmin && 
        <li>
          <NavLink
            to={"/dashboard/admin/users"}
            className="text-lg text-gray-700 hover:text-blue-600 font-medium"
          >
            Dashboard
          </NavLink>
        </li>
      }
      {user && isSurveyor &&
        <li>
          <NavLink
            to={"/dashboard/surveyor/create"}
            className="text-lg text-gray-700 hover:text-blue-600 font-medium"
          >
            Dashboard
          </NavLink>
        </li>
      }
      {user && !isAdmin && !isSurveyor &&
        <li>
          <NavLink
            to={"/dashboard/user/my-reports"}
            className="text-lg text-gray-700 hover:text-blue-600 font-medium"
          >
            Dashboard
          </NavLink>
        </li>
      }

      
      <li>
        <NavLink
          to={"/contact"}
          className="text-lg text-gray-700 hover:text-blue-600 font-medium"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  const handlerRemove = (e) => {
    e.preventDefault();
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Sign Out Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="bg-gray-100 shadow-md">
      <div className="navbar container mx-auto py-4  ">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {Links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="lg:text-4xl flex items-center font-bold text-[#6e54b5] hover:text-blue-600 lg:ml-2"
          >
            <SiLimesurvey className="mr-2" /> SurveyPro
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">{Links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center">
          {user && (
            <p className="hidden md:block text-lg font-bold text-gray-700 mr-4">
              {user?.displayName}
            </p>
          )}
          {user ? (
            <button
              onClick={handlerRemove}
              className="btn bg-[#6e54b5] text-white border-0 hover:bg-blue-600 transition-colors duration-300"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-[#6e54b5] text-white border-0 hover:bg-blue-600 transition-colors duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
