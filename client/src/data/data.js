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
  projectNine,
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
    title: 'CodeCardz | Flashcards',
    description: 'A web application designed to help users practice and master Data Structures and Algorithms (DSA) problems through an interactive flashcard system',
    src: projectNine,
    gitLink: 'https://github.com/TejasSathe010/CodeCardz---DSA-Flashcards',
    deployLink: 'https://codecardz.netlify.app/'
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
    period: '2024 - 2024',
    title: 'Software Developer Intern',
    subTitle: 'FirstFive8, Inc. – Jambonz | Boston, MA, USA',
    keySkills: 'Node.js | TypeScript | Docker | Kubernetes | React.js | SIP | WebRTC | WebSocket',
    description: [
      "Engineered a high-throughput microservices architecture using Node.js, TypeScript, Docker, and Kubernetes, optimizing resource allocation and increasing system efficiency across 8+ enterprise-scale conversational AI platforms, processing over 500K requests/day.",
      "Designed and deployed a low-latency real-time transcription and translation pipeline leveraging SIP, WebRTC, and WebSocket, reducing processing delays from 400ms to 200ms and enabling seamless multilingual communication for 10K+ concurrent users.",
      "Enhanced frontend architecture with React.js and modern state management techniques, modularizing components and improving user engagement by 40%, while ensuring seamless integration with backend microservices.",
      "Automated deployment pipelines using Kubernetes, Docker, and PM2, reducing production incidents from 50/month to 35/month and ensuring 99.99% uptime across 3 global data centers."
    ]
  },
  {
    period: 'Mar 2022 – Jul 2023',
    title: 'Software Developer',
    subTitle: 'Centiro Solutions | Pune, India',
    keySkills: 'Angular | TypeScript | ASP.NET | Azure DevOps | Octopus Deploy',
    description: [
      "Spearheaded the re-architecture of a high-scale enterprise logistics platform using Angular, TypeScript, and ASP.NET, reducing page load times by 70% and increasing user engagement by 50% through advanced caching strategies and API optimizations.",
      "Refactored high-performance RESTful APIs with ASP.NET and optimized database queries, reducing response times from 900ms to 500ms and improving system scalability to handle over 15,000 concurrent users.",
      "Streamlined CI/CD workflows with Azure DevOps (Repos, Pipelines) and Octopus Deploy, cutting deployment time by 60% and reducing defects by nearly 1/3rd, accelerating release cycles for a globally distributed development team."
    ]
  },
  {
    period: 'Dec 2020 – Mar 2022',
    title: 'Software Engineer',
    subTitle: 'Cognizant | Pune, India',
    keySkills: 'Python | Hadoop | Grafana | Moogsoft | AI/ML',
    description: [
      "Overhauled an automated and scalable Hadoop monitoring system in Python, automating issue detection and resolution, reducing manual intervention from 20+ hours per week to under 5 hours, and improving incident response time by 3x.",
      "Developed an AI-powered proactive alerting pipeline by integrating Python with Grafana and Moogsoft, decreasing false positive alerts from 1000s per day to a manageable threshold, significantly enhancing operational stability.",
      "Optimized Hadoop job scheduling, increasing cluster utilization by 1.5x through intelligent resource allocation while deploying self-healing mechanisms, preventing critical failures and reducing unscheduled downtimes."
    ]
  },
  {
    period: '2019',
    title: 'Android Developer Intern',
    subTitle: 'WERP | India',
    keySkills: 'Android Development | API Integration | Adobe XD | Prototype Design',
    description: [
      "Contributed to the entire product development lifecycle, including planning, design, prototyping, testing, and iterating, of an Android application developed for women to buy and sell goods online.",
      "Used Adobe XD for designing and developing user interactive prototypes. Integrated 3rd party APIs, enhancing application functionality."
    ]
  }
];

export const testimonials = [
  {
    image: "https://media.licdn.com/dms/image/v2/D4D35AQG1FqN1R6niAg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1654530876763?e=1738990800&v=beta&t=S9SDoVNmuuafiqLs2-TymAEEKzyqQKMJdB61zTIEnvE",
    name: "Bhavya Kethepalli",
    linkedin: "https://www.linkedin.com/in/bhavya-kethepalli-47b3b6208/",
    position: "Data Engineer at Cognizant",
    recommendation:
      "A very hardworking person who knows how to tackle the situation smartly. He is a highly skilled and a dedicated professional, has helped a lot in ETL issues and is also very good with front end. An all-rounder guy with whom it’s fun to work! I highly recommend him to anyone who is willing to work smartly with enthusiasm.",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEqcTEOm9A9dg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1662468642909?e=1743638400&v=beta&t=_zzP12T36QVmI8qWTJUIYt53nrrGvf8OF4P6syLZKks",
    name: "Anjali Dhobale",
    linkedin: "https://www.linkedin.com/in/anjali-dhobale-428039138/",
    position: "Frontend Developer at Centiro",
    recommendation:
      "We worked together at Centiro and I was Tejas' mentor. He is an excellent team player and works individually as well. He is always ready to help people personally and professionally. Tejas has all the skills needed in corporate life. He is the best colleague I have ever met. I would be more than happy to work with Tejas again. thanks 😊",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C5603AQHbwI4L-sR6jQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1659975371883?e=1743638400&v=beta&t=e5kJj0WucWPzyBORDPbEJdCh0dbVAoszXhr-47HqHvE",
    name: "Rujeet Lavekar",
    linkedin: "https://www.linkedin.com/in/rujeet-lavekar-ab2102173/",
    position: "Application Specialist at Centiro",
    recommendation:
      "I wanted to take a moment to acknowledge the incredible work that Tejas has done. His attention to detail and problem solving skills are truly impressive. I have had pleasure to work with him on a project for almost a year, and i am amazed by his technical expertise , his frontend skills and ability to implement complex designs with precision whenever in a complex situation TEJAS is go to person for creative and effective solutions.",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEji2PsHpfTyA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1663411818799?e=1743638400&v=beta&t=YuKFIeo3MlX8YFj_wX3y0ZMH-j6BGb4546pwBfC3JaI",
    name: "Rucha Butala",
    linkedin: "https://www.linkedin.com/in/rucha-butala-3b93b4185/",
    position: "Software Developer at Centiro",
    recommendation:
      "Tejas is the go-to developer with frontend related queries, He is very good with Angular and also always trying look for better ways to solve problems. He is also willing to learn more and explore different technologies in backend not confining himself to frontend and is ready to take different initiatives around the workplace which challenge him to do better. He is also maintiains collaborations between various teams.",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGxoU9ro2ddhg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698424892118?e=1743638400&v=beta&t=8Zoo06S_pWItkJBaWoMPOLKl51KsKiKlR1Uhpf79too",
    name: "Shweta Patil",
    linkedin: "https://www.linkedin.com/in/shweta-patil-16501113b/",
    position: "Backend Developer at Centiro",
    recommendation:
      "I had a privileged of working with Tejas as an IT professional, where he consistently impressed me with his technical skills and expertise in frontend technology. He was always able to find innovative solutions to complex technical problems, demonstrating a strong ability to work well under pressure and handle multiple projects. I hope that I have the opportunity to work with Tejas again at some point future, Thanks.",
  },
];
