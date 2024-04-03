import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none">
      {text}
    </button>
  );
};

export default Button;
