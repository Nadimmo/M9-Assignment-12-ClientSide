import React, { useContext } from "react";
import { SiLimesurvey } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const Links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/surverys"}>Survery </NavLink>
      </li>
      <li>
        <NavLink to={"/price"}>Pricing Page</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/surveyor/create"}>Dashboard</NavLink>
      </li>
    </>
  );

  const handlerRemove = (e) => {
    e.preventDefault();
    logOut()
      .then((res) => {
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
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Link to={"/"} className="text-4xl lg:ml-2">
            <SiLimesurvey />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <p className="text-lg font-bold mr-2">{user.displayName}</p>
          {user ? (
            <button onClick={handlerRemove} className="btn bg-[#6e54b5] text-white hover:bg-blue-600 hover:text-black">
              Sign out
            </button>
          ) : (
            <Link className="btn bg-[#6e54b5] text-white hover:bg-blue-600 hover:text-black" to={"/login"} >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
