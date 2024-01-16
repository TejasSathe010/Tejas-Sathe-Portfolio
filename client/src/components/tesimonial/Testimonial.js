import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import { AiFillLinkedin } from "react-icons/ai";
import { testimonials } from "../../data/data";
import DotsSlider from '../layouts/DotsSlider';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [activeDot, setActiveDot] = useState(2);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      setActiveDot(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      setActiveDot(newIndex);
      return newIndex;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-start items-center">
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
            <div className="flex ">
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
            style={{ minHeight: "150px" }}
          >
            {testimonials[currentIndex].recommendation}
          </p>
          <div className="flex justify-center items-center mt-4">
            <DotsSlider count={testimonials.length} activeIndex={activeDot} setActiveDot={handleDotClick} />  
          </div>
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
      </div>
    </section>
  );
};

export default Testimonial;
