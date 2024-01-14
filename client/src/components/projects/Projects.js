import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import { projectData } from "../../data/data";



const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectData.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
