import React from 'react';
import bgImage from '../assets/bg.jpg'; // Adjust the path as needed
import Navbar from './Navbar';

const Home = () => {
 

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar */}
      <Navbar />

     

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4 md:space-y-6 mt-32 px-4 animate-slide-up">
        {/* First Text Line: Simple - Unique - Friendly */}
        <h2 className="text-white text-lg md:text-3xl font-bold">
          Simple - Unique - Friendly
        </h2>
        
        {/* Second Text Line: Make Yourself At Home In Our Guest House */}
        <h2 className="text-white text-3xl md:text-6xl font-bold">
          Make Yourself At Home <br /> In Our
          <span className="text-[#e82574]"> Guest House</span>.
        </h2>
      </div>

      {/* White Rectangle with Book Now Button */}
      <div className="absolute top-[550px] md:top-[600px] left-0 right-0 flex justify-center lg:mt-[-60px] items-center">
        <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-lg md:max-w-5xl flex justify-center items-center">
          <a 
            href="https://api.whatsapp.com/send?phone=919007062180"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#e82574] text-white text-lg font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#bc1c5c] transition duration-300"
          >
            BOOK NOW
          </a>
        </div>
      </div>

      {/* Floating Book Now Button for Large Screens */}
      <a 
        href="https://api.whatsapp.com/send?phone=919007062180" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:block absolute top-8 right-4 bg-[#e82574] text-white text-lg font-bold py-2 px-4 rounded shadow-lg hover:bg-[#bc1c5c] transition duration-300"
      >
        Book Now
      </a>
    </div>
  );
};

export default Home;



















