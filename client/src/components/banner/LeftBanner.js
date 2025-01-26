import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { FiArrowRight } from "react-icons/fi";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Specialist.",
      "Backend Enthusiast.",
      "Full-Stack Innovator.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
      <h4 className="text-lg font-medium text-gray-500">Hey there 👋</h4>
      <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800">
        I’m
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 ml-2">
          Tejas Sathe
        </span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
        A <span className="text-designColor font-bold">{text}</span>
        <Cursor cursorStyle="|" cursorColor="#00bcd4" />
      </h2>
      <p className="text-base text-gray-600 leading-7">
        I specialize in delivering high-quality web solutions by combining 
        sleek UI design with robust backend systems. Passionate about 
        creating scalable, user-centric applications.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-5 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          Contact Me
        </button>
        <a
          href="#projects"
          className="text-blue-600 font-medium flex items-center gap-2 hover:underline"
        >
          View My Work <FiArrowRight className="text-lg" />
        </a>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;