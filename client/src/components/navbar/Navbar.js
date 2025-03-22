import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { profileLogo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: navbarRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <motion.nav
      ref={navbarRef}
      style={{ opacity, y }}
      className="w-full h-20 sticky top-0 z-50 bg-white shadow-md border-b border-gray-200 flex justify-between items-center px-6 lg:px-16 font-sans backdrop-blur-lg"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a href="#home">
          <motion.img
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={profileLogo}
            alt="logo"
            width={48}
            height={48}
            className="rounded-full border-4 border-indigo-600 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300"
          />
        </a>
      </motion.div>

      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="hidden md:flex items-center gap-8"
      >
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 ml-8"
        >
          <motion.a
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
            className="text-xl text-gray-600 hover:text-indigo-500 transition-transform duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="#"
            className="text-xl text-gray-600 hover:text-blue-400 transition-transform duration-300"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#"
            className="text-xl text-gray-600 hover:text-indigo-500 transition-transform duration-300"
          >
            <FaLinkedinIn />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Icon */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl md:hidden text-gray-600 hover:text-indigo-500 transition-colors duration-300 cursor-pointer"
      >
        {showMenu ? <MdClose /> : <FiMenu />}
      </motion.span>

      {/* Mobile Menu */}
      {showMenu && (
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-[75%] h-screen bg-white shadow-lg border-r border-gray-200 p-6 z-50"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <img
                src={profileLogo}
                alt="logo"
                width={48}
                height={48}
                className="rounded-full shadow-sm border border-gray-300"
              />
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg font-semibold text-gray-800"
              >
                My Portfolio
              </motion.p>
            </motion.div>

            {/* Links */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
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
            </motion.ul>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <motion.h2
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold text-gray-500 mb-2"
              >
                Connect with me:
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-6"
              >
                <motion.a
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  href="#"
                  className="text-2xl text-gray-600 hover:text-indigo-500 transition-transform duration-300"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  href="#"
                  className="text-2xl text-gray-600 hover:text-blue-400 transition-transform duration-300"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href="#"
                  className="text-2xl text-gray-600 hover:text-indigo-500 transition-transform duration-300"
                >
                  <FaLinkedinIn />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;