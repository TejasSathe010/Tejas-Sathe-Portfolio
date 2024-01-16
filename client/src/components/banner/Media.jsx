import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact, FaAngular, FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaAngular />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaNode />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media;