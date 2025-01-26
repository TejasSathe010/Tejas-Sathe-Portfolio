import { FaLaptopCode, FaServer, FaCloud, FaDatabase, FaGit, FaPlug, FaPaintBrush } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import {
  TechLitHubProject,
  OrganizeIt,
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
} from '../assets/index';

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Frontend Development",
    des: "Proficient in modern frontend technologies including React.js, Angular, Next.js, and Tailwind CSS, with a focus on performance optimization and state management.",
    link: "https://github.com/TejasSathe010/IT-Employees-System",
    icon: <FaLaptopCode />
  },
  {
    id: 2,
    title: "Backend Development",
    des: "Experienced with building scalable backend services using Node.js, Express.js, ASP.Net, and microservices architectures for high-performance applications.",
    link: "https://github.com/TejasSathe010/Responsive-Nike-Website-Clone",
    icon: <FaServer />
  },
  {
    id: 3,
    title: "Cloud Platforms",
    des: "Hands-on experience with AWS (EC2, Lambda, S3, ECS), Azure (App Services, Functions), and GCP (Cloud Run, BigQuery) for cloud-native application deployment and management.",
    link: "#",
    icon: <FaCloud />
  },
  {
    id: 4,
    title: "Databases & Caching",
    des: "Proficient in relational (MySQL, PostgreSQL) and NoSQL (MongoDB, Redis) databases, with expertise in designing optimized, scalable database architectures.",
    link: "https://github.com/TejasSathe010/Starbucks-Landing-Page-CSS-Clone",
    icon: <FaDatabase />
  },
  {
    id: 5,
    title: "Version Control & CI/CD",
    des: "Skilled in Git for version control, and proficient in building CI/CD pipelines using Docker, Kubernetes, and GitLab, ensuring smooth deployment workflows.",
    link: "#",
    icon: <FaGit />
  },
  {
    id: 6,
    title: "Machine Learning & AI",
    des: "Experienced in developing machine learning models using TensorFlow and Scikit-learn, including recommendation systems and deep learning architectures.",
    link: "https://github.com/TejasSathe010",
    icon: <SiTensorflow />
  },
  {
    id: 7,
    title: "API Development & Integration",
    des: "Proficient in developing RESTful APIs, WebSockets, gRPC, and GraphQL services to enable efficient communication in distributed systems.",
    link: "#",
    icon: <FaPlug />
  },
  {
    id: 8,
    title: "UX/UI Design",
    des: "Solid foundation in UX/UI design principles using tools like Figma, focusing on user-centered design and creating visually appealing, responsive interfaces.",
    link: "#",
    icon: <FaPaintBrush />
  },
];

export const projectData = [
  {
    title: 'TechLitHub.com',
    description: 'A highly scalable blog platform utilizing microservices, developed with React, Node.js, MongoDB, AWS S3, Redis, Docker, and TensorFlow for content recommendation.',
    src: TechLitHubProject,
    gitLink: 'https://github.com/TejasSathe010/TechLitHub',
    deployLink: 'https://techlithub.netlify.app/'
  },
  {
    title: 'Starbucks UI Clone',
    description: 'A responsive homepage clone of Starbucks, built with HTML, CSS, and JavaScript, featuring an intuitive layout and interactive elements.',
    src: projectOne,
    gitLink: 'https://github.com/TejasSathe010/Starbucks-Landing-Page-CSS-Clone',
    deployLink: 'https://starbucks-ui-clone.netlify.app/'
  },
  {
    title: 'Nike Website Clone',
    description: 'A Nike website replica using React.js and Tailwind CSS, demonstrating responsive design principles and modern front-end practices.',
    src: projectTwo,
    gitLink: 'https://github.com/TejasSathe010/Responsive-Nike-Website-Clone',
    deployLink: 'https://nike-site-clone.netlify.app/'
  },
  {
    title: 'OrganizeIt - Trello Clone',
    description: 'A productivity tool inspired by Trello, built with React, Next.js, TypeScript, and Appwrite for cloud backend services, featuring drag-and-drop functionality and Zustand state management.',
    src: OrganizeIt,
    gitLink: 'https://github.com/TejasSathe010/OranizeIt',
  },
  {
    title: 'Employee Management System',
    description: 'A full-stack application with distinct profiles for employees and administrators, implemented with React.js and Node.js for managing employee data and tasks.',
    src: projectThree,
    gitLink: 'https://github.com/TejasSathe010/IT-Employees-System'
  },
  {
    title: 'React Expense Tracker',
    description: 'A simple expense tracker application built with React, enabling users to track, add, and remove transactions for personal financial management.',
    src: projectFour,
    gitLink: 'https://github.com/TejasSathe010/React-Expense-Tracker'
  },
  {
    title: 'Color Fusion',
    description: 'An interactive web application where users can discover, create, and choose colors, useful for web development and design.',
    src: projectFive,
    gitLink: 'https://github.com/TejasSathe010/Color-Fusion'
  },
  {
    title: 'Machine Learning from Scratch',
    description: 'A collection of machine learning algorithms implemented from the ground up in Python, showcasing core ML concepts and techniques.',
    src: projectSix,
    gitLink: 'https://github.com/TejasSathe010/ML_Scratch'
  },
  {
    title: 'Movie Recommendation System',
    description: 'A hybrid recommendation system that combines content-based filtering and collaborative filtering to suggest movies, built with Python and machine learning libraries.',
    src: projectSeven,
    gitLink: ''
  },
  {
    title: 'Heart Pizza House Android App',
    description: 'An Android-based pizza ordering application designed with Firebase as the backend, allowing users to place orders and track their delivery status.',
    src: projectEight,
    gitLink: ''
  },
];

export const educationData = [
  {
    period: '2016 - Present',
    title: 'Master of Science in Business Analytics and Information Systems',
    subTitle: 'University of South Florida, Tampa (2023 - 2024)',
    result: '3.89/4',
    keySkills: 'Data Mining, Advanced Database Management System, Advanced System Analysis and Design, Seminar on Software Testing, Project Management, Big Data',
  },
  {
    period: '2016 - 2020',
    title: 'Bachelor of Engineering (BEng) in Computer Science',
    subTitle: 'Savitribai Phule Pune University, India',
    result: '3.70/4',
    keySkills: 'Web Development, Object Oriented Programming Language, Database Management System, Data Structures and Algorithms, Machine Learning',
  },
];

export const jobExperienceData = [
  {
    period: '2020 - 2023',
    title: 'Frontend Developer',
    subTitle: 'Centiro Solutions - (2022 - 2023)',
    result: 'India',
    keySkills: 'Javascript | Angular (TypeScript) | Next.JS | ASP.Net Framework | CSS | Figma | Azure DevOps',
    description: [
      "•  Led the transformation of a multi-page website for 20+ enterprise clients using cutting-edge technologies including Angular (TypeScript), RxJS, and NgRx. Employed advanced SEO strategies to achieve a 50% reduction in page load times, enhancing user experience and engagement. Ensured seamless alignment with Figma designs and implemented scalable architectural patterns.",
      "• Architected and optimized a suite of 10+ ASP .Net core endpoints with a remarkable 99.9% uptime and 25% improvement in response times. Implemented MySQL query optimization techniques to enhance database performance, resulting in faster data retrieval and processing. Leveraged React for the Application Management project, achieving streamlined development workflows, and deployed via Octopus for efficient CI/CD integration.",
      "• Tech Stack: JS, TS, Angular, React, C#, ASP.Net Core, Microsoft SQL Server, Octopus, Microsoft Azure"
    ] 
  },
  {
    period: '2020 - 2023',
    title: 'Python Developer',
    subTitle: 'Cognizant - (2020 - 2022)',
    result: 'India',
    keySkills: 'Python | LINUX | UNIX | Moogsoft | Web API | Continues Improvement | Maintenance',
    description: [
      "• Drove the development of sophisticated Python automation scripts tailored for comprehensive monitoring of Hadoop infrastructure, seamlessly integrating with critical services such as Hive, Spark, and PostgreSQL. Achieved a remarkable 60% reduction in manual efforts, optimizing operational efficiency and system reliability.",
      "• Engineered enhancements with advanced error handling mechanisms, significantly reducing system downtime by 40% and ensuring uninterrupted operations at scale. Elevated system performance to industry-leading standards.",
      "• Tech Stack: Python, LINUX, Git, Hadoop Clusters, Grafana, Moogsoft AIOps"
    ]
  },
  {
    period: '2020 - 2023',
    title: 'Android Developer Intern',
    subTitle: 'WERP - (2019)',
    result: 'India',
    keySkills: 'Android Development | API Integration | Adobe XD | Prototype Design',
    description: [
      "• Contributed to the entire product development lifecycle, including planning, design, prototyping, testing, and iterating, of an Android application developed for women to buy and sell goods online.",
      " • Used Adobe XD for designing and developing user interactive prototypes. Integrated 3rd party APIs, enhancing application functionality."
    ]
  },
];

export const testimonials = [
  {
    name: "Bhavya Kethepalli",
    linkedin: "https://www.linkedin.com/in/bhavya-kethepalli-47b3b6208/",
    position: "Data Engineer at Cognizant",
    recommendation:
      "A very hardworking person who knows how to tackle the situation smartly. He is a highly skilled and a dedicated professional, has helped a lot in ETL issues and is also very good with front end. An all-rounder guy with whom it’s fun to work! I highly recommend him to anyone who is willing to work smartly with enthusiasm.",
  },
  {
    name: "Anjali Dhobale",
    linkedin: "https://www.linkedin.com/in/anjali-dhobale-428039138/",
    position: "Frontend Developer at Centiro",
    recommendation:
      "We worked together at Centiro and I was Tejas' mentor. He is an excellent team player and works individually as well. He is always ready to help people personally and professionally. Tejas has all the skills needed in corporate life. He is the best colleague I have ever met. I would be more than happy to work with Tejas again. thanks 😊",
  },
  {
    name: "Rujeet Lavekar",
    linkedin: "https://www.linkedin.com/in/rujeet-lavekar-ab2102173/",
    position: "Application Specialist at Centiro",
    recommendation:
      "I wanted to take a moment to acknowledge the incredible work that Tejas has done. His attention to detail and problem solving skills are truly impressive. I have had pleasure to work with him on a project for almost a year, and i am amazed by his technical expertise , his frontend skills and ability to implement complex designs with precision whenever in a complex situation TEJAS is go to person for creative and effective solutions.",
  },
  {
    name: "Rucha Butala",
    linkedin: "https://www.linkedin.com/in/rucha-butala-3b93b4185/",
    position: "Software Developer at Centiro",
    recommendation:
      "Tejas is the go-to developer with frontend related queries, He is very good with Angular and also always trying look for better ways to solve problems. He is also willing to learn more and explore different technologies in backend not confining himself to frontend and is ready to take different initiatives around the workplace which challenge him to do better. He is also maintiains collaborations between various teams.",
  },
  {
    name: "Shweta Patil",
    linkedin: "https://www.linkedin.com/in/shweta-patil-16501113b/",
    position: "Backend Developer at Centiro",
    recommendation:
      "I had a privileged of working with Tejas as an IT professional, where he consistently impressed me with his technical skills and expertise in frontend technology. He was always able to find innovative solutions to complex technical problems, demonstrating a strong ability to work well under pressure and handle multiple projects. I hope that I have the opportunity to work with Tejas again at some point future, Thanks.",
  },
];
