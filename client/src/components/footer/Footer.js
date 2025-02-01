import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { profileLogo } from "../../assets/index";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-gray-900 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
      <div className="flex flex-col gap-6">
        <img className="w-14" src={profileLogo} alt="logo" />
        <div className="flex gap-4">
          <a href="https://github.com/TejasSathe010" className="text-xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://twitter.com/TejasSathe010" className="text-xl hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/tejas-sathe010/" className="text-xl hover:text-gray-400">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <FooterSection title="Quick Links" links={["About", "Portfolio", "Services", "Blog", "Contact"]} />
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-700">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index} className="hover:text-gray-400 cursor-pointer">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;