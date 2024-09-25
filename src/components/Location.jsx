import React from 'react';

const Location = () => {
  return (
    <div className="location-container">
      <h2 className="text-center text-3xl mt-4 font-bold mb-4">Location</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244118.99118607157!2d86.8572155!3d23.5863373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1694665691982!5m2!1sen!2sin"
          width="100%"
          height="450"
          title="Location of Kingsukh Guest House"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
     
    </div>
  );
};

export default Location;







