import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard"; // Assuming you have a TestimonialCard component

const WhyChooseUs = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      image: "../../public/Images/teach1.png",
      author: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nulla vel eros sollicitudin tincidunt.",
    },
    {
      image: "Images/teach2.png",
      author: "Jane Smith",
      text: "Vestibulum auctor mattis mauris, ac sollicitudin magna. Nullam interdum, metus eu vehicula consequat.",
    },
    {
      image: "Images/teach3.png",
      author: "David Johnson",
      text: "Fusce eget urna id est varius ultrices in et sapien. Sed id metus sit amet nunc luctus condimentum.",
    },
    {
      image: "Images/teach4.png",
      author: "David Johnson",
      text: "Fusce eget urna id est varius ultrices in et sapien. Sed id metus sit amet nunc luctus condimentum.",
    },
  ];
  return (
    <div id="WhyChooseUs" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-red text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/9rHDCtJ/leaders.jpg"
              alt="Unique Features"
              className="h-64 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Empowering future leaders
            </h3>
            <p className="text-gray-600 text-center">
              Your school prepares students to be engaged members of society who
              can make a positive impact on the world.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/mJNWr9d/focus.jpg"
              alt="Testimonials"
              className="h-64 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Focus on well-rounded individuals
            </h3>
            <p className="text-gray-600 text-center">
              Your school goes beyond just academics, aiming to develop the
              whole student – intellectually, socially, and emotionally.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/g4n87hd/supportive.jpg"
              alt="Holistic Development"
              className="h-64 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Supportive and inclusive environment
            </h3>
            <p className="text-gray-600 text-center">
              You create a safe space where students can thrive and learn
              important life skills like empathy and resilience.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-red hover:text-black text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
            Admission Now
          </button>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-red text-center mb-8">
            Our Team
          </h2>
          <div className=" m-auto">
            <div className="mt-10">
              <Slider {...settings}>
                {data.map((d) => (
                  <div key={d} className="h-[450ox] text-white rounded-xl">
                    <div className="h-56 rounded-t-xl bg-red flex justify-center items-center">
                      <img
                        src={d.image}
                        alt=""
                        className="bg-white rounded-full h-44 w-44"
                      />
                    </div>
                    <div className="border rounded-b-xl h-[250px] text-red flex flex-col justify-center items-center gap-4 p-4">
                      <p className="text-xl font-semibold">{d.author}</p>
                      <p className="text-black text-center">{d.text}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
