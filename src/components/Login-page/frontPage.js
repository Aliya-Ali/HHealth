import React from "react";
import FrontPage from './assets/front-page.png';
import medication1 from './assets/medication1.png';
import medication2 from './assets/medication2.png';
import medication3 from './assets/medication3.png';
import medication4 from './assets/medication4.png';
import medication5 from './assets/medication5.png';
import medication6 from './assets/medication6.png';
import medication7 from './assets/medication7.png';
import medication8 from './assets/medication8.png';
import medication9 from './assets/medication9.png';
import medication10 from './assets/medication 10.png';

function FrontPageComponent() {
  return (
    <div className="bg-gray-100 min-h-screen">
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

      {/* Hero Section */}
      <main className="container flex justify-center mx-auto px-6 py-12">
        <div className="bg-white items-center justify-between mb-6 rounded-md shadow-sm w-[1000px] p-4">
          <div className="flex justify-center items-center mb-6 pt-8">
          <div
  className="relative bg-white rounded-md shadow-sm w-full max-w-4xl h-[500px]"
  style={{ backgroundImage: `url(${FrontPage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
            {/* Content positioned at the bottom-center */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-6">
                <h2 className="text-3xl font-semibold text-gray-800">Welcome to MediSolution</h2>
                <p className="mt-4 text-gray-600">Your personalized medication guide</p>
                <div className="mt-6 flex hover:border-2 hover:border-blue-600 transition">
                <input
                    type="text"
                    placeholder="What medications are you taking?"
                    className="border border-blue-500 rounded-l-md px-4 py-2 focus:outline-none"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                    Search
                </button>
                </div>
            </div>
            </div>

          </div>

          {/* Trending Medications Section */}
          <div className="container mx-auto px-6 py-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Trending medications (Last 120 days)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: "Metformin", dosage: "50mg", image: medication1 },
                { name: "Losartan", dosage: "25mg", image: medication2 },
                { name: "Levothyroxine", dosage: "75mcg", image: medication3 },
                { name: "Atorvastatin", dosage: "20mg", image: medication4 },
                { name: "Lisinopril", dosage: "10mg", image: medication5 },
                { name: "Gabapentin", dosage: "300mg", image: medication6 },
                { name: "Amlodipine", dosage: "5mg", image: medication7 },
                { name: "Omeprazole", dosage: "40mg", image: medication8 },
                { name: "Simvastatin", dosage: "80mg", image: medication9 },
                { name: "Hydrochlorothiazide", dosage: "12.5mg", image: medication10 },
              ].map((med, index) => (
                <div
                  key={index}
                  className="bg-white  rounded-lg text-center hover: shadow-md transition hover:border border-gray-200"
                >
                  {/* Make the image larger */}
                  <img
                    src={med.image}
                    alt={med.name}
                    className="w-full h-40 object-contain mb-4" // Adjust height and object-fit
                  />
                  <h4 className="text-lg font-medium text-gray-800">{med.name}</h4>
                  <p className="text-gray-600 text-sm">{med.dosage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FrontPageComponent;
