import React, { useEffect, useRef, useState } from 'react';
import outImage from '../assets/out.jpg';
import Navbar from './Navbar';

const About = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1); // Start with no items visible
  const sectionRef = useRef(null); // Reference to the About section

  const textItems = [
    { content: "ABOUT US", className: "text-4xl font-bold mb-4" },
    { content: "The Best Holidays Start Here!", className: "text-3xl font-semibold mb-4" },
    {
      content: "Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.",
      className: "text-lg text-gray-700 mb-4",
    },
    {
      content: (
        <>
          Address:{" "}
          <a
            href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-700 underline"
          >
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </a>
        </>
      ),
      className: "text-lg text-violet-900 mb-4",
    },
    {
      content: (
        <>
          Contact us: <a href="tel:+919007062180" className="text-blue-700">+91 9007062180</a>
        </>
      ),
      className: "text-lg text-blue-700 mb-4",
    },
    {
      content: (
        <a
          href="https://api.whatsapp.com/send?phone=919007062180"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-[#e82574] text-white text-lg font-bold py-2 px-4 rounded shadow-lg hover:bg-[#bc1c5c] transition duration-300"
        >
          BOOK NOW
        </a>
      ),
      className: "mb-4",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleIndex(0); // Start the animation
          const timer = setInterval(() => {
            setVisibleIndex((prevIndex) => {
              if (prevIndex < textItems.length - 1) {
                return prevIndex + 1;
              } else {
                clearInterval(timer); // Stop the interval when done
                return prevIndex; // Return the last index
              }
            });
          }, 600); // Adjust the delay as needed

          return () => clearInterval(timer); // Cleanup on unmount
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [textItems.length]);

  return (
    <div ref={sectionRef}>
      <div className="flex flex-col md:flex-row mt-40 h-screen">
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center md:justify-start md:pl-10">
          <img
            src={outImage}
            alt="About"
            className="w-full h-auto md:w-2/3 lg:w-4/5 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 flex justify-center items-center p-4">
          <div className="text-center md:text-left">
            {textItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  index <= visibleIndex ? 'fade-in' : 'opacity-0'
                }`}
              >
                <h2 className={item.className}>{item.content}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;















