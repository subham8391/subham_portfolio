import React, { useState } from 'react'
import Close from '../assets/close.svg'
const Portfolioitms = ({img,title,details}) => {
    const[modal,setModal]=useState(false);
    const toggleModal=()=>{
        setModal(!modal);
    }
  return (
    <div className="portfolio__item relative rounded-[10px] overflow-hidden cursor-pointer">
        <img src={img} alt="" className='portfolio__img' />

        <div className="portfolio__hover" onClick={toggleModal}>
            <h3 className="portfolio__title text-white text-[20px] font-semibold">{title}</h3>
        </div>
        {modal && (
            <div className="portfolio__modal">
            <div className="portfolio__modal-content bg-white">
                <img src={Close} alt="" className="modal__close" onClick={toggleModal}/>
                <h3 className="modal__title">{title}</h3>
                <ul className="modal__list grid">
                            {details.map(({ icon, title, desc, link }, index) => {
                                return (
                                    <li className="modal__item" key={index}>
                                        <span className="item__icon">{icon}</span>
                                        <div>
                                            <span className="item__title">{title}</span>
                                            {title === 'Preview : ' ? (
                                                <a href={link} className="item__details"target="_blank" >
                                                    {desc}
                                                </a>
                                            ) : (
                                                <span className="item__details">{desc}</span>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                <img src={img} alt="" className='modal__img' />
            </div>
        </div>
        )}
    </div>
  )
}

export default Portfolioitms