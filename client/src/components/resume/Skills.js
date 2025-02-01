import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaAngular, FaNodeJs, FaJava, FaPython, FaDocker, FaAws, FaGithub } from 'react-icons/fa';
import { SiKubernetes, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiNginx, SiJira, SiMysql, SiAmazondynamodb, SiTypescript, SiTensorflow, SiScikitlearn, SiNextdotjs, SiTailwindcss, SiSass, SiJest, SiWebpack, SiFigma, SiGitlab, SiMicrosoft, SiGooglecloud, SiRedis, SiElasticsearch } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "C/C++", icon: <FaReact className="text-blue-600" /> },
        { name: "HTML5/CSS", icon: <FaAngular className="text-red-600" /> },
        { name: "JavaScript", icon: <FaNodeJs className="text-green-600" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-orange-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "Go (Golang)", icon: <FaReact className="text-blue-600" /> },
        { name: "C#", icon: <SiMicrosoft className="text-green-600" /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", icon: <FaReact className="text-blue-600" /> },
        { name: "Angular", icon: <FaAngular className="text-red-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-green-600" /> },
        { name: "ASP.Net", icon: <SiMicrosoft className="text-blue-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
        { name: "SASS/SCSS", icon: <SiSass className="text-pink-600" /> },
        { name: "Jest", icon: <SiJest className="text-gray-800" /> },
      ],
    },
    {
      category: "Development Tools",
      items: [
        { name: "Git", icon: <FaGithub className="text-black" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
        { name: "CI/CD (GitLab)", icon: <SiGitlab className="text-orange-600" /> },
        { name: "Nginx", icon: <SiNginx className="text-green-600" /> },
        { name: "Webpack", icon: <SiWebpack className="text-pink-600" /> },
        { name: "Figma", icon: <SiFigma className="text-blue-500" /> },
        { name: "Jira", icon: <SiJira className="text-green-600" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "PL/SQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Redis", icon: <SiRedis className="text-red-600" /> },
        { name: "ElasticSearch", icon: <SiElasticsearch className="text-yellow-600" /> },
        { name: "DynamoDB", icon: <SiAmazondynamodb className="text-green-600" /> },
      ],
    },
    {
      category: "Cloud Platforms",
      items: [
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
        { name: "Azure", icon: <SiMicrosoft className="text-blue-600" /> },
        { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
      ],
    },
    {
      category: "Machine Learning",
      items: [
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-500" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      ],
    },
    {
      category: "API Development",
      items: [
        { name: "RESTful APIs", icon: <FaNodeJs className="text-green-600" /> },
        { name: "WebSocket", icon: <FaNodeJs className="text-green-600" /> },
        { name: "gRPC", icon: <FaNodeJs className="text-green-600" /> },
        { name: "GraphQL", icon: <FaNodeJs className="text-green-600" /> },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20"
    >
      {skills.map((skillCategory, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-white to-gray-100 shadow-lg p-8 rounded-2xl border border-gray-200 transition-all hover:shadow-2xl"
        >
          <div className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{skillCategory.category}</h2>
          </div>
          <ul className="space-y-6">
            {skillCategory.items.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-3 border-l-4 border-indigo-500 pl-5 relative group">
                <div className="text-xl text-gray-600">{skill.icon}</div>
                <p className="text-md font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </p>
                <span className="absolute -left-2 top-2 w-3 h-3 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform"></span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
