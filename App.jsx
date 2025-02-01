import React, { useState } from "react";

const Kerch = () => {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kerch-street.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Kerch-fortress.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kerch-port.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Kerch-bridge.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5d/Kerch-museum.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">ქერჩი</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        ქერჩი არის ისტორიული ქალაქი, რომელიც ცნობილია თავისი სტრატეგიული მდებარეობით 
        და საომარი ისტორიით. ის მნიშვნელოვანი როლი ითამაშა მეორე მსოფლიო ომში.
      </p>
      <div className="mt-6 relative w-full max-w-lg">
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-l-md">&#9665;</button>
        <img 
          src={images[currentIndex]} 
          alt={`ქერჩი ${currentIndex + 1}`} 
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-r-md">&#9655;</button>
      </div>
    </div>
  );
};

export default Kerch;