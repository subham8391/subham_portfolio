import React from 'react';
import { navItems } from '../Data';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="nav h-[100%] w-20 text-gray-400 fixed right-0 flex justify-center items-center z-10">
      <ul className='navb flex flex-col gap-8'>
      {navItems.map((item, index) => (
       <Link to={item.route} key={index}>
        <li className='text-[25px] font-extrabold flex hover:text-white relative'> 
        
          {item.icon}
          <span className="hidden absolute right-10 top-0 text-[20px]">{item.title}</span>
        </li>
        </Link>
      ))}
      </ul>
    </div>
  )
}

export default Navbar;
