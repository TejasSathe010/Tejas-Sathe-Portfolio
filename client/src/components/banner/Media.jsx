import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact, FaAngular, FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6">
      <div>
        <h2 className="text-sm uppercase font-medium text-gray-600 mb-3">
          Find me on
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/tejas-sathe010/"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 transition-all duration-300"
          >
            <FaLinkedinIn className="text-blue-600 text-xl" />
          </a>
          <a
            href="https://github.com/TejasSathe010"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300"
          >
            <FaGithub className="text-gray-700 text-xl" />
          </a>
          <a
            href="https://twitter.com/TejasSathe010"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-200 transition-all duration-300"
          >
            <FaTwitter className="text-blue-400 text-xl" />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-sm uppercase font-medium text-gray-600 mb-3">
          Best Skills
        </h2>
        <div className="flex gap-4">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 transition-all duration-300">
            <FaReact className="text-blue-600 text-xl" />
          </span>
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 transition-all duration-300">
            <FaAngular className="text-red-600 text-xl" />
          </span>
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-100 transition-all duration-300">
            <SiTailwindcss className="text-teal-500 text-xl" />
          </span>
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-100 transition-all duration-300">
            <FaNode className="text-green-600 text-xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;