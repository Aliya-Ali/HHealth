import React from "react";
import background from './assets/login.png'; // Full-page background image
import vector from './assets/Vector.png'; // Icon/logo

function App() {
  return (
    <div
      className="flex h-screen bg-cover bg-center items-center justify-center"
      style={{ backgroundImage: `url(${background})` }} // Full-screen background
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Icon */}
        <div className="bg-white p-4 rounded-lg shadow-lg shadow-[4px_-4px_rgba(101,128,225,0.6)]">
          <div
            className="flex items-center justify-center w-[160px] h-[160px] rounded-md bg-cover bg-center shadow-[-4px_4px_rgba(101,128,225,0.6)]"
            style={{ backgroundImage: `url(${background})` }} // Icon background
          >
            <img
              src={vector}
              alt="Logo"
              className="w-[100px] h-[100px] " // Center logo
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button className="w-[486px] h-[52px] bg-white border-bg rounded-md text-blue-600 font-semibold shadow-md hover:border-2 border-[#2148C0] transition">
            DOCTOR
          </button>
          <button className="w-[486px] h-[52px] bg-white text-blue-600 font-semibold shadow-md hover:border-2 border-[#2148C0] transition">
            PATIENT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
