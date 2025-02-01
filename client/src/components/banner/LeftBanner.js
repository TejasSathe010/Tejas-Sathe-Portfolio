import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { FiArrowRight } from "react-icons/fi";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Architect.",
      "Backend Engineer.",
      "Tech Innovator.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full md:w-1/2 flex flex-col items-start gap-6 text-left">
      <h4 className="text-lg font-medium text-gray-500">Hey there 👋</h4>
      <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800">
        I’m
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-500 ml-2">
          Tejas Sathe
        </span>
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-600">
        A <span className="text-purple-500 font-bold">{text}</span>
        <Cursor cursorStyle="|" cursorColor="#00bcd4" />
      </h2>
      <p className="text-lg text-gray-600 leading-8 max-w-lg">
        Passionate about crafting intuitive and scalable web applications with
        sleek UI design and robust backend solutions.
      </p>
      <div className="flex items-center gap-6">
        <a href="#contact" className="px-6 py-3 bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:scale-105 transition-transform">
          Contact Me
        </a>
        <a
          href="#projects"
          className="text-indigo-600 font-medium flex items-center gap-2 hover:underline"
        >
          View My Work <FiArrowRight className="text-lg" />
        </a>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
