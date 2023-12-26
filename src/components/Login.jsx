import React from "react";
import loginImg from "../assets/wineAi1.png";

export default function Login() {
  return (
    <div className="grid w-full h-screen grid-cols-1 sm:grid-cols-2">
      <div className="hidden sm:block">
        <img className="object-cover w-full h-full" src={loginImg} alt="" />
      </div>
      <div className="flex flex-col justify-center bg-gray-200">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl font-bold text-center dark:text-white">SIGN IN</h2>
          <div className="flex flex-col py-2 text-gray-400">
            <label>Email</label>
            <input
              className="p-2 mt-2 bg-gray-600 rounded-lg focus:border-blue-500 focus:bg-gray-700 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2 text-gray-400">
            <label>Password</label>
            <input
              className="p-2 mt-2 bg-gray-600 rounded-lg focus:border-blue-500 focus:bg-gray-700 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-between py-2 text-gray-400">
            <p className="flex">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>

            <a href="" className="hover:text-red-600">
              Forgot Password
            </a>
          </div>
          <button
            type="button"
            class="mt-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg hover:shadow-md hover:shadow-purple-500/50  px-5 py-2.5 text-center"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
