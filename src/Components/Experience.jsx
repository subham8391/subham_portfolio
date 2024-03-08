import React from 'react'

function Experience() {
  return (
    <div className='ExperienceContainer'>
      <div className="expHeadding fadein-animation flex flex-col justify-center items-center p-5">
        <h1 className='text-[35px] font-bold text-white'>EXPERIENCE</h1>
        <div className='flex items-center gap-2 relative bottom-3'>
          <div className='h-1 w-[5rem] bg-white'></div>
          <span className='text-red-500 font-bold'>INVOLVEMENT</span>
        </div>
      </div>
      <div className="ExperienceSection fadein-animation flex flex-col w-[100%] h-auto gap-5 p-5 text-white">
        <div className="experience w-[100%] h-auto grid sm:grid-cols-12 gap-5">
          <div className="exp col-span-1"></div>
          <div className="exp col-span-5 relative">
            <div className="exp-con flex flex-row gap-3 w-[100%] h-[100%] relative">
              <div className="year  h-[100%] w-[40%] flex flex-col justify-center items-end ">
                <h1 className='text-[70px] font-bold text-gray-500'>2022</h1>
                <h3 className='text-[18px] font-bold'>Oct To 2023 Oct</h3>
              </div>
              <div className="conexp  h-[100%] w-[60%] p-3">
                <h1 className='text-[20px] font-bold'>Full Stack Web Development</h1>
                <h3 className='text-[15px] font-bold'>Newton School</h3>
                <p>Acquired full-stack dev skills: Java, HTML, CSS, JS, React, Node. Built websites, honed problem-solving, and learned from experienced mentors.</p>
              </div>
            </div>
            <div className="exp-con-shadow w-[70%] h-[100%]"></div>
          </div>
          <div className="exp col-span-5 relative">
            <div className="exp-con flex flex-row gap-3 w-[100%] h-[100%] relative">
              <div className="year  h-[100%] w-[40%] flex flex-col justify-center items-end ">
                <h1 className='text-[70px] font-bold text-gray-500'>2022</h1>
                <h3 className='text-[18px] font-bold'>Oct To 2023 Oct</h3>
              </div>
              <div className="conexp  h-[100%] w-[60%] p-3">
                <h1 className='text-[20px] font-bold'>Full Stack Web Development</h1>
                <h3 className='text-[15px] font-bold'>Newton School</h3>
                <p>Acquired full-stack dev skills: Java, HTML, CSS, JS, React, Node. Built websites, honed problem-solving, and learned from experienced mentors.</p>
              </div>
            </div>
            <div className="exp-con-shadow w-[70%] h-[100%]"></div>
          </div>
          <div className="exp col-span-1 "></div>
        </div>
        <div className="experience  w-[100%] h-auto grid sm:grid-cols-12 gap-5">
          <div className="exp col-span-1 "></div>
          <div className="exp col-span-5 relative">
            <div className="exp-con flex flex-row gap-3 w-[100%] h-[100%] relative">
              <div className="year  h-[100%] w-[40%] flex flex-col justify-center items-end ">
                <h1 className='text-[70px] font-bold text-gray-500'>2022</h1>
                <h3 className='text-[18px] font-bold'>Oct To 2023 Oct</h3>
              </div>
              <div className="conexp  h-[100%] w-[60%] p-3">
                <h1 className='text-[20px] font-bold'>Full Stack Web Development</h1>
                <h3 className='text-[15px] font-bold'>Newton School</h3>
                <p>Acquired full-stack dev skills: Java, HTML, CSS, JS, React, Node. Built websites, honed problem-solving, and learned from experienced mentors.</p>
              </div>
            </div>
            <div className="exp-con-shadow w-[70%] h-[100%]"></div>
          </div>
          <div className="exp col-span-5 relative">
            <div className="exp-con flex flex-row gap-3 w-[100%] h-[100%] relative">
              <div className="year  h-[100%] w-[40%] flex flex-col justify-center items-end ">
                <h1 className='text-[70px] font-bold text-gray-500'>2022</h1>
                <h3 className='text-[18px] font-bold'>Oct To 2023 Oct</h3>
              </div>
              <div className="conexp  h-[100%] w-[60%] p-3">
                <h1 className='text-[20px] font-bold'>Full Stack Web Development</h1>
                <h3 className='text-[15px] font-bold'>Newton School</h3>
                <p>Acquired full-stack dev skills: Java, HTML, CSS, JS, React, Node. Built websites, honed problem-solving, and learned from experienced mentors.</p>
              </div>
            </div>
            <div className="exp-con-shadow w-[70%] h-[100%]"></div>
          </div>
          <div className="exp col-span-1 "></div>
        </div>
      </div>
    </div>
  )
}

export default Experience