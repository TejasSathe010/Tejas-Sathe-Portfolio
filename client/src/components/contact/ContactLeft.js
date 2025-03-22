import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Title from "../layouts/Title";
import { profileLogo } from "../../assets/index";
import { motion } from "framer-motion";

const ContactLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-[35%] bg-white shadow-lg rounded-xl border border-gray-200 p-8 text-center"
    >
      <Title title="Let's Connect" des="Contact Information" />

      <div className="mt-8">
        <motion.img
          initial={{ scale: 0.9, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 object-cover rounded-full border-4 border-indigo-600 mx-auto"
          src={profileLogo}
          alt="Profile"
        />

        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-semibold text-gray-900 mt-6"
        >
          Tejas Sathe
        </motion.h3>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600"
        >
          Full Stack Developer
        </motion.p>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-gray-500 mt-2"
        >
          Graduate student at University of South Florida, Tampa.
        </motion.p>
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 space-y-4"
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-2"
        >
          <span className="text-gray-500">📞</span>
          <span className="text-gray-700 font-medium">+1 (786) 561-4652</span>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex items-center justify-center gap-2"
        >
          <span className="text-gray-500">✉️</span>
          <span className="text-gray-700 font-medium">tejassathe010@gmail.com</span>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center gap-6 mt-8"
      >
        <a
          href="https://www.linkedin.com/in/tejas-sathe010/"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 transition-all duration-300"
        >
          <FaLinkedinIn className="text-blue-600 text-xl" />
        </a>
        <a
          href="https://github.com/TejasSathe010"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300"
        >
          <FaGithub className="text-gray-700 text-xl" />
        </a>
        <a
          href="https://twitter.com/TejasSathe010"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-200 transition-all duration-300"
        >
          <FaTwitter className="text-blue-400 text-xl" />
        </a>
      </motion.div>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-sm text-gray-400 mt-8"
      >
        Let's connect and create something amazing together!
      </motion.p>
    </motion.div>
  );
};

export default ContactLeft;