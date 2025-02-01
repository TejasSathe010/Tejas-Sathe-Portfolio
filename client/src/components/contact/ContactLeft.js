import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { profileLogo } from "../../assets/index";
import Title from "../layouts/Title";

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[35%] bg-white shadow-lg rounded-xl border border-gray-200 p-8 text-center">
      <Title title="Let's Connect" des="Contact Information" />

      <img
        className="w-32 h-32 object-cover rounded-full border-4 border-indigo-600 mx-auto"
        src={profileLogo}
        alt="Profile"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mt-4">Tejas Sathe</h3>
      <p className="text-gray-600">Full Stack Developer</p>
      <p className="text-sm text-gray-500 mt-2">
        Graduate student at the University of South Florida, Tampa.
      </p>

      {/* Contact Info */}
      <div className="mt-6 space-y-2">
        <p className="text-gray-700">
          📞 <span className="font-medium">+1 (786) 561-4652</span>
        </p>
        <p className="text-gray-700">
          ✉️ <span className="font-medium">tejassathe010@gmail.com</span>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-6">
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
  );
};

export default ContactLeft;
