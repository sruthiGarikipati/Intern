










import React from 'react';
import smallRoomImage from '../assets/small.jpg'; // Replace with your actual image path
import largeRoomImage from '../assets/large.jpg'; // Replace with your actual image path
import 'remixicon/fonts/remixicon.css';






const Rooms = () => {
  const rooms = [
    {
      title: 'Cozy Haven Room',
      description: 'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
      price: 'Starting from Rs. 1000/night',
      image: smallRoomImage,
    },
    {
      title: 'Spacious Serenity Suite',
      description: 'Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
      price: 'Starting from Rs. 1500/night',
      image: largeRoomImage,
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start h-screen  px-4 lg:px-20">
      {/* Existing Title and Text Section */}
      <h1 className="text-4xl lg:text-4xl font-bold text-left mb-2 lg:mt-0 mt-[500px] lg:mb-4">
        OUR LIVING ROOM
      </h1>
      <p className="text-lg lg:text-3xl text-left mb-8 mt-4 lg:mt-0">
        The Most Memorable Rest Time Starts Here.
      </p>

      {/* Card Layout Section */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between mt-8">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden m-4 w-full lg:w-[48%]"
          >
            {/* Image Container with relative positioning */}
            <div className="relative">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-60 object-cover"
              />

            {/* Icons on the image at the bottom right */}
            <div className="absolute bottom-4 right-4 flex space-x-4">
                <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg text-pink-400">
                  <i className="ri-heart-fill text-2xl"></i>
                </span>
                <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg text-purple-500">
                  <i className="ri-paint-fill text-2xl"></i>
                </span>
                <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg text-blue-400">
                  <i className="ri-shield-star-fill text-2xl"></i>
                </span>
              </div>
            </div>
            <div className="p-4">
              <h5 className="text-2xl font-bold text-black dark:text-white mb-2">
                {room.title}
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {room.description}
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">
                {room.price}
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=919007062180"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#e82574] text-white text-lg font-bold py-2 px-4 rounded shadow-lg hover:bg-[#bc1c5c] transition duration-300"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
