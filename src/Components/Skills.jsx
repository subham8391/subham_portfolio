import React from 'react'
import ProgressBar from './ProgressBar'
import { SkillsContent } from '../Data'
function Skills() {
  return (
    <div className='SkillsContainer'>
        <div className="skillHeadding fadein-animation flex flex-col justify-center items-center p-5">
        <h1 className='text-[35px] font-bold text-white'>MY SKILLS</h1>
        <div className='flex items-center gap-2 relative bottom-3'>
          <div className='h-1 w-[5rem] bg-white'></div>
          <span className='text-red-500 font-bold'>EXPERT IN</span>
        </div>
      </div>
      <div className="SkillsSection grid grid-cols-4 gap-4 pl-20 pr-20">
        {SkillsContent.map((data,index)=>(
          <div className="skillGrid" key={index} >
            <ProgressBar targetProgress={data.Percentage} skillName={data.skill} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills