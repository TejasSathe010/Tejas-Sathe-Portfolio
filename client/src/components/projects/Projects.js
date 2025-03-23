import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectData } from "../../data/data";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Projects = () => {
  const [reposCount, setReposCount] = useState(0);
  const [activeTab, setActiveTab] = useState("showcase");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.github.com/users/TejasSathe010");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setReposCount(data.public_repos || 0);
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub repositories:", err);
        setError("Failed to fetch repository count. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const showcaseProjects = projectData.filter((project) =>
    ["TechLitHub.com", "Redix - A modern twist on Redis in Go", "SmartProxy", "NN-Grad Library", "Machine Learning from Scratch", "CodeCardz | Flashcards"].includes(project.title)
  );

  const archiveProjects = projectData.filter(
    (project) =>
      !["TechLitHub.com", "Redix - A modern twist on Redis in Go", "SmartProxy", "NN-Grad Library", "Machine Learning from Scratch", "CodeCardz | Flashcards"].includes(project.title)
  );

  return (
    <section
      id="projects"
      className="w-full py-20"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <Title
          title="Projects"
          des="A curated selection of my work showcasing technical skills and creativity."
        />

        {isLoading ? (
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
          </div>
        ) : error ? (
          <div className="flex justify-center mt-8 text-red-600">
            <p>{error}</p>
          </div>
        ) : (
          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/TejasSathe010/Tejas-Sathe-Portfolio"
              className="flex items-center gap-2 bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-all"
            >
              <AiFillGithub className="text-lg" />
              <span>View My GitHub ({reposCount} Repositories)</span>
            </a>
          </div>
        )}

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {showcaseProjects.map((project, index) => (
                <ProjectsCard key={index} {...project} />
              ))}
            </motion.div>
          )}
          {activeTab === "archive" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <p className="text-gray-600 italic text-center mb-6">
                These projects highlight my growth and exploration over time.
              </p>
              {archiveProjects.map((project, index) => (
                <ProjectsCard key={index} {...project} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;