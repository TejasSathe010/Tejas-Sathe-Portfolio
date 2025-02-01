import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { profileLogo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-white shadow-md border-b border-gray-200 flex justify-between items-center px-6 lg:px-16 font-sans backdrop-blur-lg">
      {/* Logo */}
      <div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#home">
          <img
            src={profileLogo}
            alt="logo"
            width={48}
            height={48}
            className="rounded-full border-4 border-indigo-600 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-6">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex items-center gap-4 ml-8">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="text-xl text-gray-600 hover:text-indigo-500 transition-transform duration-300"
          >
            <FaGithub />
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="text-xl text-gray-600 hover:text-blue-400 transition-transform duration-300"
          >
            <FaTwitter />
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="text-xl text-gray-600 hover:text-indigo-500 transition-transform duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl md:hidden text-gray-600 hover:text-indigo-500 transition-colors duration-300 cursor-pointer"
      >
        {showMenu ? <MdClose /> : <FiMenu />}
      </span>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed top-0 left-0 w-[75%] h-screen bg-white shadow-lg border-r border-gray-200 p-6 z-50">
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                src={profileLogo}
                alt="logo"
                width={48}
                height={48}
                className="rounded-full shadow-sm border border-gray-300"
              />
              <p className="text-lg font-semibold text-gray-800">My Portfolio</p>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-6">
              {navLinksdata.map(({ _id, title, link }) => (
                <li
                  key={_id}
                  className="text-base font-medium text-gray-700 hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-gray-500 mb-2">
                Connect with me:
              </h2>
              <div className="flex gap-6">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  className="text-2xl text-gray-600 hover:text-indigo-500 transition-transform duration-300"
                >
                  <FaGithub />
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  className="text-2xl text-gray-600 hover:text-blue-400 transition-transform duration-300"
                >
                  <FaTwitter />
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  className="text-2xl text-gray-600 hover:text-indigo-500 transition-transform duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
