import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdDescription, MdSchool } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { BiSolidContact } from 'react-icons/bi';

function Navbar() {
  return (
    <div className="nav h-[100%] w-20 text-white fixed right-0 flex justify-center items-center">
      <ul className='navb flex flex-col gap-8'>
        <li className='text-[25px] font-extrabold flex hover:text-blue-500 relative'> 
          <FaHome />
          <span className="hidden absolute right-10 top-0 text-[20px]">Home</span>
        </li>
        <li className='text-[25px] font-extrabold flex hover:text-blue-500 relative'> 
          <MdDescription />
          <span className="hidden absolute right-10 top-0 text-[20px]">About</span>
        </li>
        <li className='text-[25px] font-extrabold flex hover:text-blue-500 relative'> 
          <MdSchool />
          <span className="hidden absolute right-10 top-0 text-[20px]">Education</span>
        </li>
        <li className='text-[25px] font-extrabold flex hover:text-blue-500 relative'>
          <BsPersonWorkspace />
          <span className="hidden absolute right-10 top-0 text-[20px]">Experience</span>
        </li>
        <li className='text-[25px] font-extrabold flex hover:text-blue-500 relative'> 
          <GiSkills /> 
          <span className="hidden absolute right-10 top-0 text-[20px]">Skills</span>
        </li>
        <li className='text-[25px] font-extrabold flex hover:text-blue-500 relative'> 
          <GrProjects /> 
          <span className="hidden absolute right-10 top-0 text-[20px]">Portfolio</span>
        </li>
        <li className='text-[25px] font-extrabold flex hover:text-blue-500 relative'>
          <BiSolidContact /> 
          <span className="hidden absolute right-10 top-0 text-[20px]">Contact</span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
