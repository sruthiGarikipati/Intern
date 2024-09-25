
import React from 'react';
import palashImage from '../assets/palash.jpg'; 

// Replace with your actual image path

const Services = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen px-4 lg:px-20 mt-[1300px] lg:mt-12">
      {/* Left Side Image */}
      <div className="lg:w-1/2 w-full flex justify-center mb-4 lg:mb-0">
        <img 
          src={palashImage} 
          alt="Palash" 
          className="object-cover h-full w-full lg:h-[100%] lg:w-[100%] rounded-lg shadow-lg" 
        />
        
      </div>
      
      
      {/* Right Side Content with Headings and Icons */}
      <div className="lg:w-1/2 w-full text-center lg:text-left p-20 lg:pl-32 lg:mt-[-40px]">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <h2 className="text-3xl font-semibold mb-6">Strive Only For The Best.</h2>
        
        {/* Services List with Icons */}
        <ul className="service__list space-y-6">
          <li className="flex items-center mb-4">
            <span className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-blue-400 bg-blue-100 mr-4">
              <i className="ri-shield-star-fill text-2xl"></i>
            </span>
            <span className="text-lg font-semibold">High Class Security</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-pink-400 bg-pink-100 mr-4">
              <i className="ri-24-hours-line text-2xl"></i>
            </span>
            <span className="text-lg font-semibold">24 Hours Room Service</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-purple-400 bg-purple-100 mr-4">
              <i className="ri-restaurant-2-fill text-2xl"></i>
            </span>
            <span className="text-lg font-semibold">Restaurant</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-red-400 bg-red-100 mr-4">
              <i className="ri-map-2-line text-2xl"></i>
            </span>
            <span className="text-lg font-semibold">Tourist Guide Support</span>
          </li>
        </ul>
        
      </div>
         

         {/* White Horizontal Rectangle with Curved Corners and Shadow */}
<div className="absolute bottom-[-3500px] lg:bottom-[-2080px] left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[80%] bg-white rounded-lg shadow-xl p-4">
  <div className="flex flex-col lg:flex-row justify-between items-center text-center">
    {/* Left side: 100+ Bookings Completed */}
    <div className="mb-4 lg:mb-0">
      <span className="text-4xl font-bold text-black">100+</span>
      <p className="text-lg font-semibold text-gray-600">Bookings Completed</p>
    </div>

    {/* Right side: 150+ Happy Customers */}
    <div>
      <span className="text-4xl font-bold text-black">150+</span>
      <p className="text-lg font-semibold text-gray-600">Happy Customers</p>
    </div>
  </div>
</div>

</div>
  );
};

export default Services;


      