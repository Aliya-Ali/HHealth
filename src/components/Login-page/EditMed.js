import React from "react";
import edit from './assets/edit.png'
import medication from './assets/medication.png'



const EditMed = () => {
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

          {/* Medication Details */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
          <div className="container flex">
            {/* Image Section */}
            <div className="w-[40%]">
              <img
                src={medication} // Replace with your image URL
                alt="Medication"
                className="rounded-md object-cover w-full max-w-sm"
              />
            </div>

            {/* Details Section */}
            <div className="lg:w-2/3 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">Acetaminophen</h3>
              <p className="text-gray-600">50mg, 1 tablet, daily</p>
              <p className="text-gray-600">Expires in 3 months</p>
            </div>
            </div>
          </div>


          {/* Editable Sections */}
          <div className="mt-8">
            <div className="space-y-4">
              {[
                "Indications",
                "Dosage",
                "Contraindications",
                "Mechanism of Action",
                "Add new category...."
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

export default EditMed;
