import React from "react"; // Assuming you have a TestimonialCard component

const WhyChooseUs = () => {
  return (
    <div id="WhyChooseUs" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-red text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="Images/leaders.jpeg"
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
              src="Images/focus.jpeg"
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
              src="Images/supportive.jpeg"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="m-auto">
            <div className="mt-10">
              <div className="m-auto flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl ">
                <div className="bg-white object-cover w-full rounded-lg  md:h-auto md:w-55 md:rounded-none md:rounded-s-lg">
                  <img className="m-auto h-[250px]" src="Images/director.jpeg" alt="" />
                </div>
                <div className="flex bg-red flex-col rounded-lg justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Director: Yaiza González Vila
                  </h5>
                  <p className="mb-3 font-normal text-white">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto">
            <div className="mt-10">
              <div className="m-auto flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl ">
                <div className="bg-white object-cover w-full rounded-lg  md:h-auto md:w-55 md:rounded-none md:rounded-s-lg">
                  <img className="m-auto h-[250px]" src="Images/director2.jpg" alt="" />
                </div>
                <div className="flex bg-red flex-col rounded-lg justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Director: Eliza awan
                  </h5>
                  <p className="mb-3 font-normal text-white">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
