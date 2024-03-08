import React from 'react'
import Myimg2 from '../assets/Myimg2.png'
import { aboutContent } from '../Data'
import Resume from '../assets/My_Resume.pdf';
function About() {
  const handleDownload = () => {
    const fileUrl =Resume;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'My_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='aboutContainer fadein-animation h-[100vh] w-[100%]'>
    <div className="aboutSection grid sm:grid-cols-12 h-[100%]">
      <div className="aitems col-span-1 bg-black"></div>
      <div className="aitems col-span-4 flex justify-center items-center "><div className="apimg h-[80vh] w-[100%] flex justify-center relative"><img src={Myimg2} className='fadein-animation h-[100%]' alt="" /> <div className='shadow absolute w-[100%] h-[100%]'></div><div className='vshadow absolute w-[100%] h-[100%]'></div></div></div>
      <div className="aitems col-span-6 flex justify-center items-center">
          <div className="acontent w-[90%] h-[70vh] text-white ">
            <h1 className='text-[35px] font-bold'>{aboutContent.heading}</h1>
            <div className='flex items-center gap-2 relative bottom-3'>
            <div className='h-1 w-[6rem] bg-white'></div>
            <span className='text-red-500 font-bold'>WHO AM I</span>
            </div>
            <p>{aboutContent.content}</p>
            <button onClick={handleDownload} className='bg-red-500 mt-7 p-[10px] rounded-lg'>{aboutContent.cvTitle}</button>
          </div>
      </div>
      <div className="aitems col-span-1 bg-black"></div>
    </div>
  </div>
  
  )
}

export default About