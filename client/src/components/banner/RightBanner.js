import React, { useState, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {
  TechLitHubProject,
  projectSix,

} from '../../assets/index';

const RightBanner = () => {
  const projects = [
    {
      title: "TechLitHub.com",
      description:
        "A highly scalable blog platform utilizing microservices, developed with React, Node.js, MongoDB, AWS S3, Redis, Docker, and TensorFlow for content recommendation.",
      src: TechLitHubProject,
      gitLink: "https://github.com/TejasSathe010/TechLitHub",
      deployLink: "https://techlithub.netlify.app/",
    },
    {
      title: "Machine Learning from Scratch",
      description:
        "A collection of machine learning algorithms implemented from the ground up in Python, showcasing core ML concepts and techniques.",
      src: projectSix,
      gitLink: "https://github.com/TejasSathe010/ML_Scratch",
      deployLink: "#",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative">
      {/* Rotating Card */}
      <div
        className="group relative w-[320px] h-[420px] md:w-[400px] md:h-[500px] bg-gradient-to-r from-white via-gray-50 to-gray-100 
        rounded-xl shadow-lg transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
      >
        {/* Glowing Background */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-500 via-teal-500 to-green-500 
          opacity-30 rounded-xl blur-lg"
        ></div>

        {/* Highlighted Info */}
        <div
          className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 
          text-white font-bold py-1 px-3 rounded-lg shadow-lg text-sm animate-pulse"
        >
          My Special Projects 🚀
        </div>

        {/* Slideshow Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-8 text-center">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-gray-800">
                {projects[currentProject].title}
              </h3>
              <p className="text-gray-600 mt-4 leading-7">
                {projects[currentProject].description}
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <a
                  href={projects[currentProject].gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-md hover:bg-blue-50 transition-all"
                >
                  <FiGithub className="text-xl" /> GitHub
                </a>
                <a
                  href={projects[currentProject].deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-md hover:bg-green-50 transition-all"
                >
                  <FiExternalLink className="text-xl" /> Live Demo
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RightBanner;