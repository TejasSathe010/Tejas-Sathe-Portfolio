import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-slate-50 to-slate-200 p-4 lgl:p-8 rounded-lg shadow-xl flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-designColor">Tejas Sathe</h3>
        <p className="text-lg font-normal text-gray-800">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-800 tracking-wide">
          Graduate student at the University of South Florida, Tampa.
        </p>
        <p className="text-base text-gray-800 flex items-center gap-2">
          Phone: <span className="text-gray-600">+1 (786) 561-4652</span>
        </p>
        <p className="text-base text-gray-800 flex items-center gap-2">
          Email:
          <span className="text-gray-600">tejassathe117@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-designColor">Find me in</h2>
        <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/tejas-sathe010/"><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/TejasSathe010"><FaGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://twitter.com/TejasSathe010"><FaTwitter /></a>
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;