import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaGithub } from "react-icons/fa"; // GitHub icon
import axios from "axios";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {login,loginWithGoogle,loginWithGithub,user} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location.pathname)

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    login(email,password)
    .then(res =>{
      if(res.user){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `User Login Successfully`,
          showConfirmButton: false,
          timer: 1500
        });
        form.reset()
      }
      navigate(location?.pathname? location?.pathname:'/')
    })
    .catch(err =>{
      alert(err.message)
    })

  };


  const handlerGoogle = (e) => {
    e.preventDefault();
    loginWithGoogle()
      .then((res) => {
        // console.log(res.user.email)
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
        };
        if (res.user) {
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} Login Successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handlerGithub = (e) => {
    e.preventDefault();
    loginWithGithub()
    .then((res) => {
      // console.log(res.user.email)
      const userInfo = {
        name: user?.displayName,
        email: user?.email,
      };
      if (res.user) {
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} Login Successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    })
      .catch((err) => {
        alert(err.message);
      });
  };



  return (
    <div className="flex bg-[#2b2738] rounded-2xl border-2 shadow-xl p-5">
      {/* Left Side */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-8 py-12 shadow-xl rounded-xl rounded-l-none">
        <h1 className="text-3xl font-bold text-white">Login</h1>
        <p className="mt-2 text-sm text-[#827f8d]">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Create one
          </Link>
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#6e54b5] hover:bg-blue-600 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or continue with</span>
          </div>
        </div>

         {/* Social Buttons */}
         <div className="lg:grid grid-cols-2 gap-4">
          <button
          onClick={handlerGoogle}
            type="button"
            className="flex items-center justify-center w-full px-4 py-2  border text-white border-gray-300 rounded-lg hover:bg-[#0d0d11]"
          >
            <FcGoogle className="w-5 h-5 mr-2 " />
            Sign in with Google
          </button>
          <button
          onClick={handlerGithub}
            type="button"
            className="lg:mt-0 mt-2 flex items-center justify-center w-full px-4 py-2  border text-white border-gray-300 rounded-lg hover:bg-[#0d0d11]"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            Sign in with GitHub
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="hidden md:flex w-1/2 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/GWc3MHF/banner.webp')",
        }}
      ></div>
    </div>
  );
};

export default Login;
