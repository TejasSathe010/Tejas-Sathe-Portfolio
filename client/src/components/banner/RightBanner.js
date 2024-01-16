import React from 'react';
// import { profile } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center p-6 md:px-8 md:py-6
    bg-gradient-to-r from-slate-50 to-slate-200 rounded-lg shadow-2xl">
      {/* <img
        className="w-[200px] h-[300px] lgl:w-[400px] lgl:h-[580px] z-10"
        src={profile}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
      <p className="text-base font-bodyFont leading-6 tracking-wide">
        From crafting robust front-end experiences with <span className="text-designColor">Angular and React</span> to diving deep into Python automation scripts for infrastructure monitoring, I've explored the breadth of programming languages, frameworks, and tools. My journey spans from building an intuitive Movie Recommendation System to spearheading Android app development for a seamless user experience. Eager to tackle challenges and constantly evolve within the tech landscape, I thrive on the thrill of learning and applying various skill sets to drive innovation.
      </p>
    </div>
  );
}

export default RightBanner;