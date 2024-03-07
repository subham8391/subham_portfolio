import React from 'react'
import Myimg1 from '../assets/Myimg1.png'
import { homeText } from '../Data'
function Home() {
    return (
        <div className='homeContainer h-[100vh] w-[100%]'>
            <div className="homeSection h-[100%] w-[100%] grid sm:grid-cols-12 gap-10">
                <div className="hitems col-span-6 overflow-hidden">
                    <div className="pimg w-[100%] h-[100%]">
                        <img className='fadein-animation' src={Myimg1} alt="" />
                    </div>
                </div>
                <div className="hitems col-span-6 bg-black flex flex-col leading-[130px] items-start pt-[8rem]">
                {homeText.map((text, index) => (
                        <span key={index} className='text-white text-[80px] font-bold'>{text}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home