// src/components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="bg-gray-100 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-red sm:text-4xl">
              About Us
            </h2>
            <h4 className=" font-extrabold text-xl">
              Holistic Education for Empowered Individuals
            </h4>
            <h4 className=" font-bold text-xl text-red pt-5">
              1. Academic Excellence:
            </h4>
            <p className=" text-lg text-black text-justify mr-5">
              Our holistic school system is committed to fostering academic
              excellence by providing a comprehensive curriculum that integrates
              traditional subjects with innovative teaching methodologies,
              ensuring students develop critical thinking skills and a thirst
              for lifelong learning.
            </p>
            <h4 className=" font-bold text-xl text-red pt-5">
              2. Social and Emotional Well-being:
            </h4>
            <p className=" text-lg text-black text-justify mr-5">
              We prioritize the holistic development of every student by
              nurturing their social and emotional well-being through a
              supportive and inclusive environment, fostering empathy,
              resilience, and self-awareness essential for success in both
              personal and professional realms.
            </p>
            <h4 className=" font-bold text-xl text-red pt-5">
              3.Community Engagement and Global Citizenship:{" "}
            </h4>
            <p className=" text-lg text-black text-justify mr-5">
              Our mission extends beyond the classroom as we instill in our
              students a sense of community engagement and global citizenship,
              empowering them to become compassionate leaders who actively
              contribute to positive societal change and
              environmental sustainability.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="flex justify-center md:justify-end">
            <img
              className="md:h-auto object-cover h-100 w-97 ml-5"
              src="https://i.ibb.co/RbyP9ry/about.jpg"
              alt="School Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
