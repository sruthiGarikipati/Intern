import React from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/baranti.jpg';
import image3 from '../assets/bg.jpg';
import image4 from '../assets/flower.jpg';
import image6 from '../assets/large.jpg';
import image7 from '../assets/mithonDam.jpg';
import image8 from '../assets/out.jpg';
import image9 from '../assets/palash.jpg';
import image10 from '../assets/recep.jpg';
import image11 from '../assets/room1.jpg';
import image12 from '../assets/service.jpg';
import image13 from '../assets/small.jpg';

const images = [
  { src: image8, alt: "Beautiful outdoor view" },
  { src: image12, alt: "Service area of Kingsukh Guest House" },
  { src: image3, alt: "Stunning background scenery" },
  { src: image4, alt: "Colorful flowers in the garden" },
  { src: image6, alt: "Large open space" },
  { src: image7, alt: "View of Mithon Dam" },
  { src: image1, alt: "Cozy room interior" },
  { src: image10, alt: "Reception area of the guest house" },
  { src: image9, alt: "Palash flowers blooming" },
  { src: image11, alt: "Another cozy room view" },
  { src: image2, alt: "A beautiful view of Baranti" },
  { src: image13, alt: "A small decorative piece" }
];

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 lg:px-20 lg:mt-40 mt-[400px]">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.src} 
              alt={image.alt}  // Use the new alt text here
              className="object-cover w-full h-full" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
























