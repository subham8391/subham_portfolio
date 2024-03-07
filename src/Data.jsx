//Navbar
import { FaHome } from 'react-icons/fa';
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
export const homeText =["I`m","Subham","Das"];
//About
export const aboutContent={
    heading:"ABOUT ME",
    content:"Hello! I'm Subham Das, a dedicated web developer with a passion for creating user-friendly interfaces and compelling websites. My expertise revolves around HTML, CSS, and JavaScript, specializing in building dynamic web applications using React.js. Additionally, I possess proficiency in programming languages such as Java, which complements my skill set. With a keen eye for detail and a commitment to staying abreast of the latest trends and technologies, I continuously enhance my abilities. My goal is to deliver seamless and immersive user experiences while adhering to best practices in web development. I thrive on challenges and am driven by a desire to innovate and push boundaries in the ever-evolving landscape of web development. Let's collaborate to bring your ideas to life and make your online presence stand out!",
    cvTitle:"Download Resume"
}