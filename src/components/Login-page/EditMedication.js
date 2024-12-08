import React from "react";
import medication from './assets/medication.png'

const EditMedication = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
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
      <main className="container flex items-center justify-center mx-auto py-8 px-6">
        <div className="bg-white shadow rounded-lg p-6 w-[1000px] ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Medication</h2>

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
          <div className="space-y-6">
            {/* Indications */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">Indications:</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
                defaultValue="Mild to moderate pain relief (e.g., headaches, muscle aches, back pain, toothaches, arthritis, menstrual pain, and other conditions)."
              ></textarea>
            </div>

            {/* Dosage */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">Dosage:</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
                defaultValue="Oral (tablets, liquid, etc.):
                        Standard dose: 325 mg to 500 mg every 4–6 hours as needed.
                        Maximum dose: 4,000 mg per day (8 tablets of 500 mg) unless advised otherwise by a healthcare provider."
              ></textarea>
            </div>

            {/* Contraindications */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">Contraindications:</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
                defaultValue="Alcohol Use: Chronic alcohol consumption or acute alcohol intoxication can increase the risk of liver damage when taking acetaminophen."
              ></textarea>
            </div>

            {/* Mechanism of Action */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">Mechanism of Action:</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="6"
                defaultValue="Pain Relief: Inhibition of COX (Cyclooxygenase) Enzymes: Acetaminophen selectively inhibits the COX enzymes, especially COX-2, in the CNS. This reduces the production of prostaglandins, which are chemicals responsible for the sensation of pain. However, acetaminophen does not significantly affect COX-1 in peripheral tissues, making it less likely to cause gastrointestinal irritation compared to other nonsteroidal anti-inflammatory drugs (NSAIDs)."
              ></textarea>
            </div>
          </div>

          {/* Return Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-blue-500  w-[440px] h-[52px] text-white px-6 py-3 rounded-md font-bold hover:bg-blue-600">
              Return
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditMedication;
