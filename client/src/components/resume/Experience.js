import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Frontend Developer"
            subTitle="Centiro Solutions - (2022 - 2023)"
            result="India"
            des="• Developed and enhanced an organization-level, multi-page website, empowering multiple clients to automate
            their labour-intensive workflows, resulting in a 40% reduction in manual errors and a 30% increase in overall
            productivity.
            • Architected and wrote multiple reusable Angular (TypeScript) components as per the Figma design with different
            design systems and architectural patterns. Reduced page load time by 50% with the help of SEO techniques.
            • Programmed, integrated, and maintained multiple endpoints in the ASP .Net framework. Contributed to developing
            detailed test plans and product evaluation tools as a member of the R&D group.
            • Identified and resolved over 12+ bugs."
          />
          <ResumeCard
            title="Python Developer"
            subTitle="Cognizant - (2020 - 2022)"
            result="India"
            des="• Engineered, implemented, tested, and documented Python automation scripts for comprehensive monitoring of
            Hadoop infrastructure.
            • Reducing manual monitoring efforts by 60% and ensuring bug-free code integrity.
            • Worked with low-level LINUX commands to connect with servers and databases. Integrated MoogSoft Api in
            Python automation scripts for alerting and raising the ticket.
            • Active participation in the continuous improvement of automation strategy. Upgraded scripts with error handling,
            reducing downtime by 40%."
          />
          <ResumeCard
            title="Android Developer (Internship)"
            subTitle="WERP - (2019)"
            result="Remote"
            des="• Contributed to the entire product development lifecycle, including planning, design, prototyping, testing, and
            iterating, of an Android application developed for women to buy and sell goods online.
            • Used Adobe XD for designing and developing user interactive prototypes. Integrated 3rd party APIs, enhancing
            application functionality."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
