import React, {  useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience";
import { AiOutlineDownload } from 'react-icons/ai';


const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);

   const handleDownload = () => {
    const resumePath = require('../../assets/Tejas-Sathe-Resume.pdf');
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Tejas-Sathe-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-start items-start text-center">
        <Title title="2.5+ YEARS OF EXPERIENCE" des="My Resume" />
        <button onClick={handleDownload} className="bg-designColor text-white py-2 px-3 ml-4 mt-10 md:mt-12 rounded">
          <AiOutlineDownload />
        </button>
      </div>
      <div>
        <ul className="w-full text-gray-800 grid grid-cols-1 xl:grid-cols-3">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "text-designColor border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi text-gray-800 bg-slate-200`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "text-designColor border-designColor rounded-lg" : "border-transparent"
            } resumeLi text-gray-800 bg-slate-200`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "text-designColor border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi text-gray-800 bg-slate-200`}
          >
            Job Experience
          </li>
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "text-designColor border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi text-gray-800 bg-slate-200`}
          >
            Achievements
          </li> */}
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
 
    </section>
  );
}

export default Resume;