import React from "react";
import medication1 from './assets/medication1.png'
import medication2 from './assets/medication2.png'
import trash from './assets/Trash 3.png'
import plusIcon from './assets/icon.png'

function Medication() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800 pt-1">MediSolution</h1>
          <nav className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-gray-800 pt-2">
              For Patients
            </a>
            <a href="#" className="hover:text-gray-800 pt-2">
              For Providers
            </a>
            <a href="#" className="hover:text-gray-800 pt-2">
              Medications
            </a>
            <a href="#" className="hover:text-gray-800 pt-2">
              Conditions
            </a>
            <a href="#" className="hover:text-gray-800 pt-2">
              Telemedicine
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Log Out
            </button>
          </nav>
        </div>
      </header>

      {/* Body Section */}
      <main className="container flex items-center justify-center mx-auto py-8 px-6">
      <div className="bg-white shadow rounded-lg p-6 w-[1000px]">
        {/* Search Section */}
{/* Search Section */}
<div className="flex justify-center items-center mt-4 ">
  <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-full max-w-lg bg-gray-100">
    {/* Search Icon */}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 ml-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
        />
        </svg>
    {/* Input Field */}
    <input
      type="text"
      placeholder="What medications are you taking?"
      className="flex-1 px-2 py-1 bg-gray-100 focus:outline-none"
    />
    {/* Search Button */}
    <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Search
    </button>
  </div>
</div>



        {/* Picked By You Section */}
        <div className="mt-8">
        
          <h2 className="text-xl font-semibold text-gray-800">PICKED BY YOU</h2>

          {/* Pain Relief Section */}
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-800">PAIN RELIEF</h3>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {/* Card 1 */}
              <div className="relative p-4 bg-white rounded-md shadow hover:bg-gray-100 cursor-pointer ">
                <img
                  src={medication1} // Replace with actual image
                  alt="Acetaminophen"
                  className="w-full rounded-md"
                />
                <p className="mt-2 text-sm font-medium text-gray-800 font-bold">Acetaminophen</p>
                <p className="text-sm text-gray-500">50mg</p>
                <button
                  className="absolute top-2 right-2 w-[50px] h-[50px]  hover:border-blue-500 p-2 transition"
                  aria-label="Delete"
                >
                    <img src={trash} alt="" />
                </button>
              </div>

              {/* Card 2 */}
              <div className="relative p-4 bg-white rounded-md shadow hover:bg-gray-100 cursor-pointer">
                <img
                  src={medication2} // Replace with actual image
                  alt="Losartan"
                  className="w-full rounded-md"
                />
                <p className="mt-2 text-sm font-medium text-gray-800 font-bold">Losartan</p>
                <p className="text-sm text-gray-500">25mg</p>
                <button
                  className="absolute top-2 right-2  w-[50px] h-[50px] text-white p-1 hover:border-blue-500 p-2 transition"
                  aria-label="Delete"
                >
                  <img src={trash} alt="" />
                </button>
              </div>

              {/* Add New Medication Card */}
              <div className="flex items-center justify-center p-4 border-2 border-dashed rounded-md hover:bg-gray-100 cursor-pointer">
                <img src={plusIcon} alt="" />
              </div>
            </div>
          </div>

          {/* Headache Section */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800">HEADACHE</h3>
            
          </div>
        </div>

        
        </div>
      </main>
    </div>
  );
}

export default Medication;
