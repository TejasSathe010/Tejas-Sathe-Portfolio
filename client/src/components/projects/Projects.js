import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="A Starbucks UI clone"
          des="The homepage features the iconic green and white color scheme of Starbucks using HTML, CSS and Javascript."
          src={projectOne}
          gitLink="https://github.com/TejasSathe010/Starbucks-Landing-Page-CSS-Clone"
        />
        <ProjectsCard
          title="A Nike Site"
          des="Nike website, involves replicating its design and structure homepage using React.JS and Tailwind.CSS"
          src={projectTwo}
          gitLink="https://github.com/TejasSathe010/Responsive-Nike-Website-Clone"
        />
        <ProjectsCard
          title="Employee Management System"
          des="A comprehensive project featuring distinct profiles for both employees and administrators, developed with React.JS and Node.JS"
          src={projectThree}
          gitLink="https://github.com/TejasSathe010/IT-Employees-System"
        />
        <ProjectsCard
          title="React Expense Tracker"
          des="Simple expense tracker app project where we can include, and delete transaction."
          src={projectFour}
          gitLink="https://github.com/TejasSathe010/React-Expense-Tracker"
        />
        <ProjectsCard
          title="Color Fusion"
          des="A site where we can discover, create, choose color for web development"
          src={projectFive}
          gitLink="https://github.com/TejasSathe010/Color-Fusion"
        />
        <ProjectsCard
          title="ML from scratch"
          des="Different Machine Learning algorithms implemented from scratch."
          src={projectSix}
          gitLink="https://github.com/TejasSathe010/ML_Scratch"
        />
      </div>
    </section>
  );
}

export default Projects