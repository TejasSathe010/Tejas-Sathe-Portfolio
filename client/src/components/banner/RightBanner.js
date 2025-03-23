import React, { useState, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { TechLitHubProject, projectNine, projectSix, radix } from '../../assets/index';

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
      title: 'CodeCardz | Flashcards',
      description: 'A web application designed to help users practice and master Data Structures and Algorithms (DSA) problems through an interactive flashcard system',
      src: projectNine,
      gitLink: 'https://github.com/TejasSathe010/CodeCardz---DSA-Flashcards',
      deployLink: 'https://codecardz.netlify.app/'
    },
    {
      title: "Machine Learning from Scratch",
      description:
        "A collection of machine learning algorithms implemented from the ground up in Python, showcasing core ML concepts and techniques.",
      src: projectSix,
      gitLink: "https://github.com/TejasSathe010/ML_Scratch",
      deployLink: "#",
    },
    {
      title: 'Redix - A modern twist on Redis in Go',
      description: 'A high-performance, Redis-compatible in-memory database implemented in Go (Golang) with support for advanced data structures, persistence, replication, and clustering.',
      src: radix,
      gitLink: 'https://github.com/TejasSathe010/Redix-A-modern-twist-on-Redis',
      deployLink: '#'
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="relative w-full h-full">
      <motion.div
        className="relative w-[280px] h-[380px] md:w-[340px] md:h-[440px] lg:w-[420px] lg:h-[520px] bg-white rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105 active:scale-95"
        whileHover={{ y: -10 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-10 rounded-3xl blur-lg" />

        <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold py-1 px-3 md:py-1.5 md:px-4 rounded-lg shadow-md text-xs md:text-sm animate-pulse">
          Featured Projects 🚀
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-8 py-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -20, rotate: 5 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center"
            >
              <motion.h3
                className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {projects[currentProject].title}
              </motion.h3>
              
              <motion.p
                className="text-sm md:text-md lg:text-lg text-gray-600 mt-3 leading-6 mb-5 max-w-md text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {projects[currentProject].description}
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-3 md:gap-4 mt-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={projects[currentProject].gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm hover:bg-gray-200 transition-all"
                >
                  <FiGithub className="text-sm md:text-xl" /> GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={projects[currentProject].deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm hover:bg-gray-200 transition-all"
                >
                  <FiExternalLink className="text-sm md:text-xl" /> Live Demo
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default RightBanner;