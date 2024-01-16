import React from "react";

const DotsSlider = ({ count, activeIndex, setActiveDot }) => {
    return (
      <div className="flex justify-center items-center">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`mx-2 rounded-full ${
              activeIndex === index ? 'bg-designColor w-4 h-4' : 'bg-gray-300 w-2 h-2'
            } cursor-pointer`}
            onClick={() => setActiveDot(index)}
          />
        ))}
      </div>
    );
  };

export default DotsSlider;

  