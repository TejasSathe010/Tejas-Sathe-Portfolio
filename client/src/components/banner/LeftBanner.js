import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Frontend Developer.", "Full Stack Developer.", "Backend Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY Portfolio</h4>
        <h1 className="text-6xl font-bold text-gray-800">
          Hi, I'm <span className="text-designColor capitalize">Tejas Sathe</span>
        </h1>
        <h2 className="text-4xl font-bold text-gray-800">
          a <span className='text-gray-800'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Versatile and passionate about embracing a multitude of skill sets in the tech realm, a relentless learner and a dynamic professional with a knack for seamlessly navigating diverse domains. From crafting robust front-end experiences with <span className="text-designColor">Angular and React</span> to diving deep into Python automation scripts for infrastructure monitoring, I've explored the breadth of programming languages, frameworks, and tools. My journey spans from building an intuitive Movie Recommendation System to spearheading Android app development for a seamless user experience. Eager to tackle challenges and constantly evolve within the tech landscape, I thrive on the thrill of learning and applying various skill sets to drive innovation.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner