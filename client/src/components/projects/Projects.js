import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectData } from "../../data/data";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const [reposCount, setReposCount] = useState(0);
  const [activeTab, setActiveTab] = useState("showcase");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/TejasSathe010");
        const data = await response.json();
        setReposCount(data.public_repos || 0);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  const showcaseProjects = projectData.filter((project) =>
    ["TechLitHub.com", "Machine Learning from Scratch", "CodeCardz | Flashcards"].includes(project.title)
  );

  const archiveProjects = projectData.filter(
    (project) =>
      !["TechLitHub.com", "Machine Learning from Scratch", "CodeCardz | Flashcards"].includes(project.title)
  );

  return (
    <section
      id="projects"
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <Title
          title="Projects"
          des="A curated selection of my work showcasing technical skills and creativity."
        />

        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/TejasSathe010/Tejas-Sathe-Portfolio"
            className="flex items-center gap-2 bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-all"
          >
            <AiFillGithub className="text-lg" />
            <span>View My GitHub ({reposCount} Repositories)</span>
          </a>
        </div>

        <div className="flex justify-center mt-12 space-x-6">
          <button
            onClick={() => setActiveTab("showcase")}
            className={`px-6 py-2 rounded-lg text-sm font-medium ${
              activeTab === "showcase"
                ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            } transition-all duration-300 shadow-sm hover:shadow-md`}
          >
            Showcase Projects
          </button>
          <button
            onClick={() => setActiveTab("archive")}
            className={`px-6 py-2 rounded-lg text-sm font-medium ${
              activeTab === "archive"
                ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            } transition-all duration-300 shadow-sm hover:shadow-md`}
          >
            Archive Projects
          </button>
        </div>

        <div className="mt-12">
          {activeTab === "showcase" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcaseProjects.map((project, index) => (
                <ProjectsCard key={index} {...project} />
              ))}
            </div>
          )}
          {activeTab === "archive" && (
            <div>
              <p className="text-gray-600 italic text-center mb-6">
                These projects highlight my growth and exploration over time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {archiveProjects.map((project, index) => (
                  <ProjectsCard key={index} {...project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
