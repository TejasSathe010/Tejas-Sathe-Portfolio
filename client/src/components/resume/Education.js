import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { educationData } from "../../data/data";
import { jobExperienceData } from "../../data/data";

const Education = () => {
  const renderSection = (data, title) => (
    <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">
          {data[0].period}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {data.map((item, index) => (
          <ResumeCard
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            result={item.result}
            keySkills={item.keySkills}
          />
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {renderSection(educationData, "Education")}
      {renderSection(jobExperienceData, "Job Experience")}
    </motion.div>
  );
};

export default Education;
