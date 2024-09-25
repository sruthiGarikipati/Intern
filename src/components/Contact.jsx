import React from 'react';


import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Icons

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center px-4 lg:px-20 mt-20">
      {/* Contact Info Section with Pink Background */}
      <div className="lg:w-1/3 w-full mb-10 lg:mb-0 bg-[#e82574] p-16 rounded-lg shadow-lg relative">
        <h2 className="text-3xl font-bold mb-10 text-white">Contact Info</h2>
        
        {/* Location */}
        <div className="flex items-center mb-10">
          <a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FaMapMarkerAlt className="text-pink-100 text-xl mr-3" />
            <p className="text-white">
              Beside Barshal Water Tank,<br />
              Manpur, Barhanti,<br />
              West Bengal 723156
            </p>
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center mb-10">
          <a href="mailto:kkghosh0099@gmail.com" className="flex items-center">
            <FaEnvelope className="text-pink-100 text-xl mr-3" />
            <p className="text-white">kkghosh0099@gmail.com</p>
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center mb-10">
          <a href="tel:+919007062180" className="flex items-center">
            <FaPhoneAlt className="text-pink-100 text-xl mr-3" />
            <p className="text-white">+91 9007062180</p>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-28">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-pink-100 text-2xl" />
          </a>
          <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-100 text-2xl" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-pink-100 text-2xl" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-pink-100 text-2xl" />
          </a>
        </div>
      </div>

      {/* Send a Message Form */}
      <div className="lg:w-2/3 w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6" style={{ color: '#e82574' }}>Send a Message</h2>
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium" style={{ color: '#e82574' }}>First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="First Name" 
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium" style={{ color: '#e82574' }}>Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Last Name" 
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#e82574' }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
              placeholder="you@example.com" 
            />
          </div>

          {/* Mobile Number */}
          <div className="mt-6">
            <label htmlFor="mobile" className="block text-sm font-medium" style={{ color: '#e82574' }}>Mobile Number</label>
            <input 
              type="text" 
              id="mobile" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
              placeholder="+91 0000000000" 
            />
          </div>

          {/* Message */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium" style={{ color: '#e82574' }}>Write your message here...</label>
            <textarea 
              id="message" 
              rows="2" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button 
              type="submit" 
              className="w-full bg-[#e82574] text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
