import Carousel from "./Carousel.jsx";

const Hero = () => {
  const images = [
    "Images/1.jpg",
    "Images/2.jpg",
    "Images/3.jpg",
  ];
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel images */}
      <Carousel images={images} />
      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-center text-red">
        <div className="p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red mb-4">
            Welcome to HSS
          </h1>
          <p className="text-lg mb-8 text-black font-bold w-[50%] m-auto hidden sm:block">
            Our vision is to create a nurturing environment where every
            individual is empowered to flourish academically, emotionally, and
            socially, fostering lifelong learners and compassionate global
            citizens.
          </p>
          <button className="bg-red hover:text-black text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
            Admission Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
