import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import {
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
    title: "JavaScript Frameworks",
    des: "Proficient in widely-used JavaScript frameworks such as React.JS, Angular, and Express.JS.",
    link: "https://github.com/TejasSathe010/IT-Employees-System"
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "CSS Frameworks",
    des: "Acquainted with CSS frameworks such as Bootstrap and Tailwind CSS.",
    link: "https://github.com/TejasSathe010/Responsive-Nike-Website-Clone"
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "SEO Optimisation",
    des: "Familiar with the process of enhancing a website's visibility in search engine results pages (SERPs).",
    link: "#"
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Responsive Design",
    des: "Skilled in crafting designs that seamlessly adapt to different devices and screen sizes through the use of media queries and flexible layouts.",
    link: "https://github.com/TejasSathe010/Starbucks-Landing-Page-CSS-Clone"
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Foundational grasp of graphic design principles, enhancing the ability to create visually appealing user interfaces.",
    link: "#"
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Version Control/Git",
    des: "Adept in utilizing version control systems like Git for collaborative development and tracking changes.",
    link: "https://github.com/TejasSathe010"
  },
];

export const projectData = [
  {
    title: 'A Starbucks UI clone',
    description: 'The homepage features the iconic green and white color scheme of Starbucks using HTML, CSS and Javascript.',
    src: projectOne,
    gitLink: 'https://github.com/TejasSathe010/Starbucks-Landing-Page-CSS-Clone'
  },
  {
    title: 'A Nike Site',
    description: 'Nike website, involves replicating its design and structure homepage using React.JS and Tailwind.CSS',
    src: projectTwo,
    gitLink: 'https://github.com/TejasSathe010/Responsive-Nike-Website-Clone'
  },
  {
    title: 'Employee Management System',
    description: 'A comprehensive project featuring distinct profiles for both employees and administrators, developed with React.JS and Node.JS',
    src: projectThree,
    gitLink: 'https://github.com/TejasSathe010/IT-Employees-System'
  },
  {
    title: 'React Expense Tracker',
    description: 'Simple expense tracker app project where we can include, and delete transaction.',
    src: projectFour,
    gitLink: 'https://github.com/TejasSathe010/React-Expense-Tracker'
  },
  {
    title: 'Color Fusion',
    description: 'A site where we can discover, create, choose color for web development.',
    src: projectFive,
    gitLink: 'https://github.com/TejasSathe010/Color-Fusion'
  },
  {
    title: 'ML from scratch',
    description: 'Different Machine Learning algorithms implemented from scratch.',
    src: projectSix,
    gitLink: 'https://github.com/TejasSathe010/ML_Scratch'
  },
  {
    title: 'Movie Recommendation System',
    description: 'Researched and programmed a Recommendation System based on a Hybrid Approach (Content-based filtering and Collaborative-based filtering).',
    src: projectSeven,
    gitLink: ''
  },
  {
    title: 'Heart Pizza House Android Application ',
    description: 'Designed and developed a pizza-ordering Android application with Firebase as a backend service.',
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
    keySkills: 'Javascript | Angular (TypeScript) | ASP.Net Framework | CSS | Figma | Azure DevOps',
    description: [
      "• Developed and enhanced an organization-level, multi-page website, empowering multiple clients to automate their labour-intensive workflows, resulting in a 40% reduction in manual errors and a 30% increase in overall productivity.",
      "• Architected and wrote multiple reusable Angular (TypeScript) components as per the Figma design with different design systems and architectural patterns. Reduced page load time by 50% with the help of SEO techniques.",
      "• Programmed, integrated, and maintained multiple endpoints in the ASP .Net framework. Contributed to developing detailed test plans and product evaluation tools as a member of the R&D group.",
      "• Identified and resolved over 12+ bugs."
    ] 
  },
  {
    period: '2020 - 2023',
    title: 'Python Developer',
    subTitle: 'Cognizant - (2020 - 2022)',
    result: 'India',
    keySkills: 'Python | LINUX | UNIX | Moogsoft | Web API | Continues Improvement | Maintenance',
    description: [
      "• Engineered, implemented, tested, and documented Python automation scripts for comprehensive monitoring of Hadoop infrastructure.",
      "• Reducing manual monitoring efforts by 60% and ensuring bug-free code integrity.",
      "• Worked with low-level LINUX commands to connect with servers and databases. Integrated MoogSoft Api in Python automation scripts for alerting and raising the ticket.",
      "• Active participation in the continuous improvement of automation strategy. Upgraded scripts with error handling, reducing downtime by 40%."
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
