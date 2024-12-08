import React from "react";
import background from './assets/login.png'; // Full-page background image
import vector from './assets/Vector.png'; // Icon/logo

function Login1() {
  return (
    <div
      className="flex h-screen bg-cover bg-center items-center justify-center"
      style={{ backgroundImage: `url(${background})` }} // Full-screen background
    >
      <div className="p-8 rounded-lg w-[400px]">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div
            className="flex items-center justify-center w-[100px] h-[100px] rounded-md bg-cover bg-center shadow-[-4px_4px_rgba(101,128,225,0.6)]"
            style={{ backgroundImage: `url(${background})` }} // Icon background
          >
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-[4px_-4px_rgba(101,128,225,0.6)]">
              <div
                className="flex items-center justify-center w-[160px] h-[160px] rounded-md bg-cover bg-center shadow-[-4px_4px_rgba(101,128,225,0.6)]"
                style={{ backgroundImage: `url(${background})` }} // Icon background
              >
                <img
                  src={vector}
                  alt="Logo"
                  className="w-[100px] h-[100px]" // Center logo
                />
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form className="gap-y-5 flex flex-col pt-4 ">
          <div className="pt-16">
            <label htmlFor="username" className="block text-white font-semibold mb-2">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              placeholder="Patient0"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2148C0] focus:border-[#2148C0]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white font-semibold mb-2">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2148C0] focus:border-[#2148C0]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#2148C0] font-semibold py-2 rounded-md shadow-md hover:border-2 border-[#2148C0] transition"
          >
            LOGIN
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-right">
          <a href="#" className="text-white hover:underline text-sm">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login1;
