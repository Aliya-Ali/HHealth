import React from "react";

function PatientsHistory () {
  const patients = [
    { name: "John Doe", lastHealthUpdate: "4 days ago", lastPrescriptionUpdate: "2 days ago" },
    { name: "Michael Johnson", lastHealthUpdate: "5 days ago", lastPrescriptionUpdate: "3 days ago" },
    { name: "Laura Davis", lastHealthUpdate: "6 days ago", lastPrescriptionUpdate: "4 days ago" },
    { name: "Robert Brown", lastHealthUpdate: "7 days ago", lastPrescriptionUpdate: "5 days ago" },
    { name: "Patricia Miller", lastHealthUpdate: "8 days ago", lastPrescriptionUpdate: "6 days ago" },
    { name: "William Wilson", lastHealthUpdate: "9 days ago", lastPrescriptionUpdate: "7 days ago" },
    { name: "Jessica Moore", lastHealthUpdate: "10 days ago", lastPrescriptionUpdate: "8 days ago" },
    { name: "Richard Taylor", lastHealthUpdate: "11 days ago", lastPrescriptionUpdate: "9 days ago" },
    { name: "Elizabeth Anderson", lastHealthUpdate: "12 days ago", lastPrescriptionUpdate: "10 days ago" },
    { name: "David Thomas", lastHealthUpdate: "13 days ago", lastPrescriptionUpdate: "11 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
      <main className="container mx-auto px-6 py-8 w-[1000px] h-[800px] p-6">
        <div className="flex items-center justify-between mb-6 ">
          <h2 className="text-2xl font-semibold text-gray-800">Patients</h2>
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-300">
            New patient
          </button>
        </div>

        {/* Search Bar */}
        <div className="pb-6 ">
        
          <div className="flex items-center rounded-md shadow-sm bg-gray-200 ">
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
              placeholder="Search patients"
              className="w-full px-4 py-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-r-md"
            />
          </div>
          </div>
        


        {/* Patient Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden ">
          <table className="w-full text-left">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-3 text-gray-600 font-bold">Name</th>
                <th className="px-6 py-3 text-gray-600 font-bold">Last health history update</th>
                <th className="px-6 py-3 text-gray-600  font-bold">Last prescription update</th>
                <th className="px-6 py-3 text-gray-600 text-center font-bold">Edit Health History</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-600">{patient.name}</td>
                  <td className="px-6 py-4 text-[#4F7A96]">{patient.lastHealthUpdate}</td>
                  <td className="px-6 py-4 text-[#4F7A96]">{patient.lastPrescriptionUpdate}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-[#4F7A96] font-bold hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default PatientsHistory ;
