//Navbar
import { FaHome ,FaCode} from 'react-icons/fa';
import { MdDescription, MdSchool } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { BiSolidContact } from 'react-icons/bi';

export const navItems = [
    { icon: <FaHome />, title: 'Home', route: '/' },
    { icon: <MdDescription />, title: 'About', route: '/about' },
    { icon: <MdSchool />, title: 'Education', route: '/education' },
    { icon: <BsPersonWorkspace />, title: 'Experience', route: '/experience' },
    { icon: <GiSkills />, title: 'Skills', route: '/skills' },
    { icon: <GrProjects />, title: 'Portfolio', route: '/portfolio' },
    { icon: <BiSolidContact />, title: 'Contact', route: '/contact' },
  ];

//Home
export const homeText =["I`m","Subham Das","Web Devloper"];
//About
export const aboutContent={
    heading:"ABOUT ME",
    content:"Hello! I'm Subham Das, a dedicated web developer with a passion for creating user-friendly interfaces and compelling websites. My expertise revolves around HTML, CSS, and JavaScript, specializing in building dynamic web applications using React.js. Additionally, I possess proficiency in programming languages such as Java, which complements my skill set. With a keen eye for detail and a commitment to staying abreast of the latest trends and technologies, I continuously enhance my abilities. My goal is to deliver seamless and immersive user experiences while adhering to best practices in web development. I thrive on challenges and am driven by a desire to innovate and push boundaries in the ever-evolving landscape of web development. Let's collaborate to bring your ideas to life and make your online presence stand out!",
    cvTitle:"Download Resume"
}

//skills
export const SkillsContent=[
  {skill:"HTML",Percentage:90},
  {skill:"CSS",Percentage:80},
  {skill:"JAVASCRIPT",Percentage:75},
  {skill:"REACT",Percentage:70},
  {skill:"BOOSTRAP",Percentage:65},
  {skill:"TAILWIND",Percentage:70},
  {skill:"JAVA",Percentage:55},
  {skill:"C",Percentage:40},
]

//Portfolio
// import {
//   FaHome,
//   FaUser,
//   FaFolderOpen,

  
// } from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'ZEE5 APP',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'ZEE5',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'zee5-vcys.vercel.app',
        link: 'https://zee5-vcys.vercel.app/'
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'BEYOUNG SHOPPING',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'BEYOUNG',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'beyoung-app.vercel.app',
        link: 'https://beyoung-app.vercel.app/'
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'TMDB WEBSITE',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'SILVER SCREEN',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'silver-screen-sigma',
        link:'https://silver-screen-sigma.vercel.app/'
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'PHOTO GALLERY',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'photo-gallery-app',
        link: 'https://photo-gallery-app-drab.vercel.app/'
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'POKEMON KINGDOM',
    details: [
      {
        title: 'Project : ',
        desc: 'POKEMON KINGDOM',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'pokemon-kingdom-three',
        link: 'https://pokemon-kingdom-three.vercel.app/'
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'LANDING PAGES',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Fire Fly',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'fire-fly',
        link: 'https://fire-fly-rho.vercel.app/'
      },
    ],
  },
];