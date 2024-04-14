import React from "react";

const TestimonialCard = ({ image, author, text }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <img src={image} alt="testimonial" className="w-[150px] h-[200px] rounded-full mx-auto mb-4" />
      <p className="text-gray-600 mb-2 text-center">{text}</p>
      <p className="text-red font-bold text-center">{author}</p>
    </div>
  );
};

export default TestimonialCard;
