import React from 'react'
import Portfolioitms from './Portfolioitms'
import { portfolio } from '../Data'
function Portfolio() {
  return (
    <div className='PortfolioContainer'>
        <div className="portfolioHeadding fadein-animation flex flex-col justify-center items-center p-5">
        <h1 className='text-[35px] font-bold text-white'>PORTFOLIO</h1>
        <div className='flex items-center gap-2 relative bottom-3'>
          <div className='h-1 w-[5.6rem] bg-white'></div>
          <span className='text-red-500 font-bold'>MY WORKS</span>
        </div>
      </div>
        <div className="PortfolioSection fadein-animation w-[100%] flex justify-center items-center">
        <div className="portfolio__container grid gap-[1.875rem] max-w-[71.25rem] ">
        {portfolio.map((item)=>{
          return <Portfolioitms key={item.id} {...item}/>
        })}
      </div>
        </div>
    </div>
  )
}

export default Portfolio