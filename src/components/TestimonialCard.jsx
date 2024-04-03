import React from "react";

const TestimonialCard = ({ author, text }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <p className="text-gray-600 mb-2">{text}</p>
      <p className="text-gray-800 font-bold">{author}</p>
    </div>
  );
};

export default TestimonialCard;
