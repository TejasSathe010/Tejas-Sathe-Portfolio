import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Architect.",
      "Backend Engineer.",
      "Tech Innovator.",
      "Fullstack Developer."
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: -50 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-start gap-8"
    >
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-lg font-medium text-gray-500 tracking-wide"
      >
        Hey there 👋
      </motion.h4>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
      >
        I’m
        <span className="ml-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          Tejas Sathe
        </span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-semibold text-gray-700"
      >
        A <span className="text-purple-500 font-bold">{text}</span>
        <Cursor cursorStyle="|" cursorColor="#00bcd4" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="text-base md:text-lg text-gray-600 leading-8 max-w-xl"
      >
        Passionate about crafting intuitive and scalable web applications with
        sleek UI design and robust backend solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        className="flex items-center gap-6 mt-8"
      >
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-lg transition-all"
        >
          Contact Me
        </motion.a>
        <motion.a
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="text-indigo-600 font-medium flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          View My Work <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
        </motion.a>
      </motion.div>

      <Media className="mt-8" />
    </motion.div>
  );
};

export default LeftBanner;