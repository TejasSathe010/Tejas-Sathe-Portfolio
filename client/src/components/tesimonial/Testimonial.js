import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import { AiFillLinkedin } from "react-icons/ai";

const testimonials = [
  {
    name: "Rujeet Lavekar",
    linkedin: "https://www.linkedin.com/in/rujeet-lavekar-ab2102173/",
    position: "Application Specialist at Centiro",
    recommendation:
      "I wanted to take a moment to acknowledge the incredible work that Tejas has done. His attention to detail and problem solving skills are truly impressive. I have had pleasure to work with him on a project for almost a year, and i am amazed by his technical expertise , his frontend skills and ability to implement complex designs with precision whenever in a complex situation TEJAS is go to person for creative and effective solutions.",
  },
  {
    name: "Anjali Dhobale",
    linkedin: "https://www.linkedin.com/in/anjali-dhobale-428039138/",
    position: "Frontend Developer at Centiro",
    recommendation:
      "We worked together at Centiro and I was Tejas' mentor. He is an excellent team player and works individually as well. He is always ready to help people personally and professionally. Tejas has all the skills needed in corporate life. He is the best colleague I have ever met. I would be more than happy to work with Tejas again. thanks 😊",
  },
  {
    name: "Bhavya Kethepalli",
    linkedin: "https://www.linkedin.com/in/bhavya-kethepalli-47b3b6208/",
    position: "Data Engineer at Cognizant",
    recommendation:
      "A very hardworking person who knows how to tackle the situation smartly. He is a highly skilled and a dedicated professional, has helped a lot in ETL issues and is also very good with front end. An all-rounder guy with whom it’s fun to work! I highly recommend him to anyone who is willing to work smartly with enthusiasm.",
  },
  {
    name: "Rucha Butala",
    linkedin: "https://www.linkedin.com/in/rucha-butala-3b93b4185/",
    position: "Software Developer at Centiro",
    recommendation:
      "Tejas is the go-to developer with frontend related queries, He is very good with Angular and also always trying look for better ways to solve problems. He is also willing to learn more and explore different technologies in backend not confining himself to frontend and is ready to take different initiatives around the workplace which challenge him to do better. He is also maintiains collaborations between various teams.",
  },
  {
    name: "Shweta Patil",
    linkedin: "https://www.linkedin.com/in/shweta-patil-16501113b/",
    position: "Backend Developer at Centiro",
    recommendation:
      "I had a privileged of working with Tejas as an IT professional, where he consistently impressed me with his technical skills and expertise in frontend technology. He was always able to find innovative solutions to complex technical problems, demonstrating a strong ability to work well under pressure and handle multiple projects. I hope that I have the opportunity to work with Tejas again at some point future, Thanks.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-start items-center text-center">
        <Title title="WHAT TEAMMATES SAY" des="Recommendations" />
        <a
          href="https://www.linkedin.com/in/tejas-sathe010/details/recommendations/"
          className="text-designColor"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className="max-w-6xl group mx-auto relative">
        <div className="w-full h-auto py-10 bg-gradient-to-r from-slate-50 to-slate-200 rounded-lg shadow-2xl p-4 lg:p-8 flex flex-col justify-between items-center gap-4 lg:gap-8">
          <div className="flex flex-col justify-between items-center py-6 border-b-2 border-b-gray-900">
            <div className="flex">
              <h3 className="text-xl text-designColor lg:text-2xl font-medium tracking-wide">
                {testimonials[currentIndex].name}
              </h3>
              <a
                href={testimonials[currentIndex].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-designColor"
              >
                <AiFillLinkedin />
              </a>
            </div>
            <p className="text-base text-gray-400 group-hover:text-gray-800 mt-3">
              {testimonials[currentIndex].position}
            </p>
          </div>
          <p
            className="text-base font-titleFont text-gray-800 text-center font-medium tracking-wide leading-6"
            style={{ minHeight: "200px" }}
          >
            {testimonials[currentIndex].recommendation}
          </p>
          <div className="absolute top-2 right-2 flex justify-between items-center">
            <div
              className="w-8 h-6 lg:w-14 lg:h-12 bg-slate-50 hover:bg-slate-300 duration-300 rounded-md text-2xl text-gray-600 flex justify-center items-center shadow-2xl cursor-pointer"
              onClick={handlePrev}
            >
              <HiArrowLeft />
            </div>
            <div
              className="w-8 h-6 lg:w-14 lg:h-12 ml-2 bg-slate-50 hover:bg-slate-300 duration-300 rounded-md text-2xl text-gray-600 flex justify-center items-center shadow-2xl cursor-pointer"
              onClick={handleNext}
            >
              <HiArrowRight />
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 right-10 text-gray-600 mt-4">
          {currentIndex + 1} of {testimonials.length}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
