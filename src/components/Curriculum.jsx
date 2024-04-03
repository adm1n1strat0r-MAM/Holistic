import React from "react";

const Curriculum = () => {
  return (
    <div id="Curriculum" className="bg-gray-100">
      <div className="bg-gray-100 py-12 bg-red ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="flex justify-center md:justify-start">
              <img
                className="md:h-auto object-cover h-[400px] w-[300px] rounded-lg shadow-md"
                src="https://i.ibb.co/xXdvWdB/curriculum.jpg"
                alt="Curriculum Image"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Our Curriculum
              </h2>
              <h4 className="font-bold text-xl mt-4">
                Empowering Students Through Diverse Learning Experiences
              </h4>
              <p className="mt-4 text-lg text-white text-justify">
                At Holistic School System (HSS), we offer a wide range of
                curricula tailored to meet the diverse needs and interests of
                our students. Our offerings include:
              </p>
              <ul className="mt-4 text-lg text-white list-disc list-inside">
                <li>Cambridge Curriculum</li>
                <li>Project-Based Learning</li>
                <li>
                  STEM (Science, Technology, Engineering, and Mathematics)
                </li>
                <li>Arts Integration</li>
                <li>Montessori Method</li>
              </ul>
              <p className="mt-4 text-lg text-white text-justify">
                Each curriculum is designed to foster critical thinking,
                creativity, and holistic development, empowering students to
                excel academically and personally.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
        {/* Activity 1 */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="flex justify-center">
            <img
              className="h-80 w-80 object-cover rounded-full"
              src="https://i.ibb.co/b3cddx5/project.png"
              alt="Activity 1 Image"
            />
          </div>
          <div className="mt-4 text-center md:text-left">
            <h4 className="font-bold text-xl mx-4">Project-Based Learning</h4>
            <p className="mx-4 text-lg text-black text-justify">
              Our project-based learning approach encourages students to explore
              real-world problems, collaborate with peers, and apply critical
              thinking skills to find innovative solutions.
            </p>
          </div>
        </div>
        {/* Activity 2 */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="flex justify-center">
            <img
              className="h-80 w-80 object-cover rounded-full"
              src="https://i.ibb.co/DQTV7gp/stem.png"
              alt="Activity 2 Image"
            />
          </div>
          <div className="mt-4 text-center md:text-left">
            <h4 className="font-bold text-xl mx-4">STEM Education</h4>
            <p className="mx-4 text-lg text-black text-justify">
              Our STEM education program integrates science, technology,
              engineering, and mathematics to foster problem-solving skills and
              prepare students for careers in high-demand fields.
            </p>
          </div>
        </div>
        {/* Activity 3 */}
        <div className="md:w-1/3">
          <div className="flex justify-center">
            <img
              className="h-80 w-80 object-cover rounded-full"
              src="https://i.ibb.co/xSXLYYy/art.png"
              alt="Activity 3 Image"
            />
          </div>
          <div className="mt-4 text-center md:text-left">
            <h4 className="font-bold text-xl mx-4">Arts Integration</h4>
            <p className="mx-4 text-lg text-black text-justify">
              Through arts integration, students explore their creativity,
              express themselves, and develop essential skills such as
              communication and collaboration, enhancing their overall learning
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
