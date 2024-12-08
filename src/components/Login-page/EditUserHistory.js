import React from "react";
import edit from './assets/edit.png'
import patient from './assets/patient.png'

const EditUserHistory = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <header className="bg-white shadow-md">
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
      <div className="container flex items-center justify-center mx-auto py-8 px-6">
        <div className="bg-white shadow rounded-lg p-6 w-[1000px] ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit User History</h2>

          {/* Profile Image and Info at the Top */}
          <div className="container flex">
            {/* Left Section (40% width) */}
            <div className="w-[30%]"> 
              <img
                src={patient}
                alt="Profile"
                className="object-cover mb-4"
              />
            </div>

            {/* Right Section (60% width) */}
            <div className="w-[70%]">
              <ul className="text-gray-700 space-y-2 text-left pl-6">
                <li>
                  <button className="text-blue-500 hover:underline mb-4">
                    <img src={edit} alt="Edit Icon" />
                  </button>
                </li>
                <li>Name: <span className="font-medium">John Doe</span></li>
                <li>Date of Birth: <span className="font-medium">January 15, 1985</span></li>
                <li>Age: <span className="font-medium">39</span></li>
                <li>Sex/Gender: <span className="font-medium">Male</span></li>
                <li>Contact Information: <span className="font-medium">[Insert phone/email]</span></li>
                <li>Emergency Contact: <span className="font-medium">Jane Doe (Wife) - [Insert phone]</span></li>
                <li>Primary Care Physician: <span className="font-medium">Dr. Smith (Family Medicine)</span></li>
                <li>Date of Last Physical Exam: <span className="font-medium">June 2023</span></li>
              </ul>
            </div>
          </div>


          {/* Editable Sections */}
          <div className="mt-8">
            <div className="space-y-4">
              {[
                "Medical Conditions",
                "Medications",
                "Current Symptoms",
                "Lifestyle and Habits",
                "Add new Category"
              ].map((category, index) => (
                <div key={index}>
                  <label className="block text-gray-800 font-medium mb-2">
                    {category}:
                  </label>
                  <textarea
                    className="w-[440px] h-[75px] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows="2"
                    placeholder={`Add ${category.toLowerCase()}...`}
                  ></textarea>
                </div>
              ))}

              
            </div>

            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md w-[440px] h-[52px] hover:bg-blue-600">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserHistory;
