import React, { useState, useEffect } from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import { projectData } from '../../data/data';
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {

  const [reposCount, setReposCount] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/TejasSathe010');
        const data = await response.json();
        setReposCount(data.public_repos);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-start items-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
        <a
          href="https://github.com/TejasSathe010/Tejas-Sathe-Portfolio"
          className="text-designColor flex justify-evenly items-center"
        >
          <AiFillGithub />
          <span className='ml-2'>{reposCount} Total repositories</span>
        </a>
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
