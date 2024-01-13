import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Science in Business Analytics and Information Systems "
            subTitle="University of South Florida, Tampa (2023 - Expected 2024)"
            result="3.89/4"
            des="Data Mining, Advanced Database Management System, Advanced System Analysis and Design, Seminar on Software Testing, Project Management, Big Data"
          />
          <ResumeCard
            title="Bachelor of Engineering (BEng) in Computer Science"
            subTitle="Savitribai Phule Pune University, India (2016 - 2020)"
            result="3.70/4"
            des="Web Development, Object Oriented Programming Language, Database Management System, Data Structures and Algorithms, Machine Learning"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer"
            subTitle="Centiro Solutions - (2022 - 2023)"
            result="India"
            des="Javascript | Angular (TypeScript) | ASP.Net Framework | CSS | Figma | Azure DevOps"
          />
          <ResumeCard
            title="Python Developer"
            subTitle="Cognizant - (2020 - 2022)"
            result="India"
            des="Python | LINUX | UNIX | Moogsoft | Web API | Continues Improvement | Maintenance"
          />
          <ResumeCard
            title="Android Developer (Internship)"
            subTitle="WERP - (2019)"
            result="Remote"
            des="Android Development | API Integration | Adobe XD | Prototype Design"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education