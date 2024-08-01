import React, { useState } from 'react';
import webSlider from '../images/webSlider.jpg';
import webSlider2 from '../images/webSlider2.jpg';

function SliderMain() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [webSlider,webSlider2];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden h-96"> {/* Set a fixed height */}
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full"> {/* Ensure the container takes full height */}
            <img 
              src={image} 
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full" 
            />
          </div>
        ))}
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10094;
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10095;
      </button>
    </div>
  );
}

export default SliderMain;
