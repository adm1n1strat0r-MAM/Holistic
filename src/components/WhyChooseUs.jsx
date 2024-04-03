import React from "react";
import Button from "./Button"; // Assuming you have a Button component
import TestimonialCard from "./TestimonialCard"; // Assuming you have a TestimonialCard component
import Image1 from "../../public/Images/1.jpg"; // Importing sample images
import Image2 from "../../public/Images/1.jpg"; // Importing sample images
import Image3 from "../../public/Images/1.jpg"; // Importing sample images

const WhyChooseUs = () => {
  return (
    <div id="WhyChooseUs" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-red text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src={Image1} alt="Unique Features" className="h-64 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Unique Features</h3>
            <p className="text-gray-600 text-center">
              Highlights of the school's unique features and strengths.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Image2} alt="Testimonials" className="h-64 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Testimonials</h3>
            <p className="text-gray-600 text-center">
              Testimonials from satisfied parents and students.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Image3} alt="Holistic Development" className="h-64 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Holistic Development</h3>
            <p className="text-gray-600 text-center">
              Information about the school's commitment to holistic development and student well-being.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button text="Learn More" />
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-red mb-4">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              author="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nulla vel eros sollicitudin tincidunt."
            />
            <TestimonialCard
              author="Jane Smith"
              text="Vestibulum auctor mattis mauris, ac sollicitudin magna. Nullam interdum, metus eu vehicula consequat."
            />
            <TestimonialCard
              author="David Johnson"
              text="Fusce eget urna id est varius ultrices in et sapien. Sed id metus sit amet nunc luctus condimentum."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
