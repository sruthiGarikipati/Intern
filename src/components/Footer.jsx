import React from 'react';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import youtubeIcon from '../assets/youtube.png';
import twitterIcon from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Guest House Info */}
          <div className="flex flex-col md:items-start items-center">
            <h2 className="text-lg font-bold mb-4">Kingsukh Guest House</h2>
            <p className="text-[#78716c] text-lg text-center md:text-left">
              Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
            </p>
            <button className="mt-4 bg-[#e82574] text-white w-32 py-2 rounded hover:bg-[#d0205c] transition duration-300">BOOK NOW</button>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">QUICK LINKS</h2>
            <div className="flex flex-col text-lg space-y-3">
              <a href="#" className="text-[#78716c] hover:text-white transition duration-300">Browse Destinations</a>
              <a href="#" className="text-[#78716c] hover:text-white transition duration-300">Special Offers & Packages</a>
              <a href="#" className="text-[#78716c] hover:text-white transition duration-300">Room Types & Amenities</a>
              <a href="#" className="text-[#78716c] hover:text-white transition duration-300">Customer Reviews & Ratings</a>
              <a href="#" className="text-[#78716c] hover:text-white transition duration-300">Travel Tips & Guides</a>
            </div>
          </div>

          {/* Our Services */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">OUR SERVICES</h2>
            <div className="flex flex-col text-lg space-y-3">
              <a href="#" className="text-[#78716c] hover:text-white transition duration-300">Concierge Assistance</a>
              <a href="#" className="text-[#78716c] hover:text-white transition duration-300">Flexible Booking Options</a>
              <a href="#" className="text-[#78716c] hover:text-white transition duration-300">Airport Transfers</a>
              <a href="#" className="text-[#78716c] hover:text-white transition duration-300">Wellness & Recreation</a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-bold mb-4">CONTACT US</h2>
            <p className="text-lg text-[#78716c] mb-2 text-center md:text-left">
              Address: <a 
                href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#78716c] hover:text-white transition duration-300"
              >
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </a>
            </p>
            <p className="text-lg text-[#78716c] mb-2 text-center md:text-left">
              Contact us: <a href="tel:+919007062180" className="text-[#78716c] hover:text-white transition duration-300">+91 9007062180</a>
            </p>
            <p className="text-lg text-[#78716c] mb-2 text-center md:text-left">
              Email: <a href="mailto:kkghosh0099@gmail.com" className="text-[#78716c] hover:text-white transition duration-300">kkghosh0099@gmail.com</a>
            </p>
         
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6 hover:opacity-80 transition duration-300" />
              </a>
              <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:opacity-80 transition duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 hover:opacity-80 transition duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6 hover:opacity-80 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-lg" style={{ color: '#78716c' }}>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
























