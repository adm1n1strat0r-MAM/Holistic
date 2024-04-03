// src/Carousel.js
import React, { useState, useEffect } from "react";
import "./Carousel.css";
const Carousel = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  //   const prevSlide = () => {
  //     setActiveIndex((prevIndex) =>
  //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //     );
  //   };
  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="carousel absolute top-0 left-0 w-full h-[90%] object-cover transition-opacity">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />
      </div>
    </div>
  );
};
export default Carousel;
