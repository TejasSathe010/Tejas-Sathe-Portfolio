import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix
} from '../assets/index';

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "JavaScript Frameworks",
    des: "Knowledge of popular JavaScript frameworks like React, Angular and Express.js",
    link: "https://github.com/TejasSathe010/IT-Employees-System"
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "CSS Frameworks",
    des: "Familiarity with CSS frameworks like Bootstrap, Tailwind CSS",
    link: "https://github.com/TejasSathe010/Responsive-Nike-Website-Clone"
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "SEO Optimisation",
    des: "The process of enhancing a website's visibility in search engine results pages (SERPs)",
    link: "#"
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Responsive Design",
    des: "Designs that work well on various devices and screen sizes using media queries and flexible layouts",
    link: "https://github.com/TejasSathe010/Starbucks-Landing-Page-CSS-Clone"
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Basic understanding of graphic design principles which is beneficial for creating visually appealing UIs",
    link: "#"
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Version Control/Git",
    des: "Know version control systems like Git to collaborate with other developers and track changes",
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
    description: 'A site where we can discover, create, choose color for web development',
    src: projectFive,
    gitLink: 'https://github.com/TejasSathe010/Color-Fusion'
  },
  {
    title: 'ML from scratch',
    description: 'Different Machine Learning algorithms implemented from scratch.',
    src: projectSix,
    gitLink: 'https://github.com/TejasSathe010/ML_Scratch'
  }
];
