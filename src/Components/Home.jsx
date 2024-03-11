import React from 'react'
import Myimg1 from '../assets/Myimg1.png'
import { Link } from 'react-router-dom'
import { homeText } from '../Data'
function Home() {
    return (
        <div className='homeContainer h-[100vh] w-[100%]'>
            <div className="homeSection h-[100%] w-[100%] grid sm:grid-cols-12 gap-10">
                <div className="hitems col-span-5">
                    <div className="pimg w-[100%] h-[100vh] relative">
                        <img className='fadein-animation h-[100%] relative' src={Myimg1} alt="" />
                        <div className='homeshadow absolute w-[100%] h-[100%] top-0'></div><div className='homevshadow absolute w-[100%] h-[100%] top-0'></div>
                    </div>
                </div>
                <div className="hitems col-span-7 bg-black flex flex-col  items-start pt-[8rem]">
                {homeText.map((text, index) => (
                    <div key={index} className='leading-[110px]'>
                        <span  className='text-white text-[80px] font-bold'>{text}</span>
                        </div>
                    ))}
                    <Link to='./about' className='fadein-animation bg-red-500 p-[10px] rounded-lg text-white font-semibold'>More About Me</Link>
                
                </div>
                
            </div>
        </div>
    )
}

export default Home