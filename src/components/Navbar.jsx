import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="relative">
      <div className="flex justify-between items-center px-4 py-4 md:p-8">
        <div className="font-bold text-xl text-gray-700">
          {/* Site logo or brand */}
          <a 
  href="https://api.whatsapp.com/send?phone=919007062180" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="cursor-pointer"
>
  Kingsukh Guest House
</a>
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 justify-center w-full">
          <Link to="home" smooth={true} duration={500} className="text-gray-700 font-semibold cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="text-gray-700 font-semibold cursor-pointer">About</Link>
          <Link to="services" smooth={true} duration={500} className="text-gray-700  font-semibold cursor-pointer">Services</Link>
          <Link to="rooms" smooth={true} duration={500} className="text-gray-700  font-semibold cursor-pointer">Rooms</Link>
          <Link to="gallery" smooth={true} duration={500} className="text-gray-700 font-semibold cursor-pointer">Gallery</Link>
          <Link to="contact" smooth={true} duration={500} className="text-gray-700 font-semibold cursor-pointer">Contact</Link>
          <Link to="location" smooth={true} duration={500} className="text-gray-700 font-semibold cursor-pointer">Location</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 bg-[#e82574] p-2 rounded"
          onClick={toggleMenu}
        >
          {isOpen ? <span className="text-white">✖</span> : <span className="text-white">☰</span>}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-[#e82574] text-white py-5 px-4 absolute w-full z-10">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
          <Link to="services" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Services</Link>
          <Link to="rooms" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Rooms</Link>
          <Link to="gallery" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Gallery</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
          <Link to="location" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Location</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




















