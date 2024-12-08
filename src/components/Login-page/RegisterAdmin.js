import React from "react";
import robot from "./assets/Group.png";
import attachment from "./assets/image.png";

function RegisterAdmin() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <header className="bg-white shadow-md pt-8">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800 pt-1">MediSolution</h1>
          <nav className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-gray-800 pt-2">For Patients</a>
            <a href="#" className="hover:text-gray-800 pt-2">For Providers</a>
            <a href="#" className="hover:text-gray-800 pt-2">Medications</a>
            <a href="#" className="hover:text-gray-800 pt-2">Conditions</a>
            <a href="#" className="hover:text-gray-800 pt-2">Telemedicine</a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Log Out</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex flex-column justify-center items-center h-[700px]">
        <div className="bg-white rounded-md shadow-sm w-[1000px] h-[550px] p-6">
          <div className="bg-[#05FFF4] rounded-md w-full h-[100px] flex items-center justify-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Health History</h2>
          </div>

          {/* Health Details */}
          <div className="flex pt-6 pb-6">
          <div className="space-y-6 items-center w-[440px] h-[75px]">
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md hover:border-2 border-[#2148C0] transition">
              <span className="text-gray-600 font-medium">Weight</span>
              <span className="text-gray-900 font-semibold">80 kg</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md hover:border-2 border-[#2148C0] transition">
              <span className="text-gray-600 font-medium">Height</span>
              <span className="text-gray-900 font-semibold">6' 2"</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md hover:border-2 border-[#2148C0] transition">
              <span className="text-gray-600 font-medium">Age</span>
              <span className="text-gray-900 font-semibold">23</span>
            </div>
          </div>

          

            {/* Robot Illustration */}
          <div className="bg-white flex items-center justify-center ">
            <div className=" pl-40 items-center justify-center ">
              <img
                src={robot} // Replace with your robot image URL
                alt="Robot"
                className="w-200 h-220"
              />
            </div>
          </div>
          </div>

            {/* Buttons Section */}
            <div className="flex flex-col items-center pt-6 space-y-4">
                {/* Centered Bottom Button */}
                <button className="w-[440px] h-[75px] flex items-center justify-center bg-gray-200 text-gray-900 border-gray-500 hover:border-2 border-black transition">
                    <img src={attachment} alt="Attachment Icon" className="w-[30px] h-[30px] mr-3" />
                    <span>Add your clinical reports in PDF format</span>
                </button>
            </div>
        </div>
       
        
      </main>
      <div className="container mx-auto px-6 py-12 items-right justify-right bottom-4 right-4">
                        
                        {/* Right-Bottom Button (Fixed Positioning) */}
                        <button
                    className="absolute  w-[217px] h-[50px] bg-gradient-to-r from-[#3742FA] via-[#00B2FF] to-[#000EFF] text-white font-semibold rounded-md shadow-md hover: border -2 hover:border-black transition "
                >
                    Add the health history manually
                </button>
            </div>
      
        

    </div>
  );
}

export default RegisterAdmin;
