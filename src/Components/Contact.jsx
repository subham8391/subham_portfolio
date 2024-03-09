import React from 'react'
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { ContactData } from '../Data';
function Contact() {
    return (
        <div className='ContactContainer'>
            <div className="contactHeadding fadein-animation flex flex-col justify-center items-center p-5">
                <h1 className='text-[35px] font-bold text-white'>GET IN TOUCH</h1>
                <div className='flex items-center gap-2 relative bottom-3'>
                    <div className='h-1 w-[8.5rem] bg-white'></div>
                    <span className='text-red-500 font-bold'>CONTACT US</span>
                </div>
            </div>
            <div className="ContactSection fadein-animation grid sm:grid-cols-12 pl-20 pr-20 gap-5 mb-10">
                <div className="contact col-span-7">
                    <form action="" className="contact__form">
                        <div className="from__input-group">
                            <div className="form__input-div">
                                <input type="text" className='form__control' placeholder='Enter Your Name' />
                            </div>
                            <div className="form__input-div">
                                <input type="email" className='form__control' placeholder='Enter Your Email' />
                            </div>
                        </div>
                        <div className="form__input-div">
                            <input type="text" className='form__control' placeholder='Enter Your Subject' />
                        </div>
                        <div className="form__input-div">
                            <textarea placeholder='Enter Your Query.' className="form__control textarea"></textarea>
                        </div>
                        <button className='bg-red-500  p-[10px] pl-5 pr-5 rounded-lg text-white font-bold'>SUBMIT</button>
                    </form>
                </div>
                <div className="contact col-span-5 rounded-[20px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118099.13277885974!2d87.18009583620011!3d22.331042072077587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d44143b5c99a1%3A0xf37ae5b844180ec4!2sKharagpur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709997735796!5m2!1sen!2sin" width={"100%"} height={"100%"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ borderRadius: '20px' }}></iframe>
                </div>

            </div>
            <div className="ContactMe fadein-animation grid sm:grid-cols-12 h-[250px] w-[100%] gap-10 pl-20 pr-20 mb-10">
                {ContactData.map((item,id)=>(
                    <div className="conDetails col-span-4 relative" key={id}>
                        <img className='h-[100%] relative' src={item.img} alt="" />
                        <div className="cshadow h-[100%] w-[100%] absolute top-0 flex justify-center items-center flex-col">
                            <h1 className='text-[20px] font-semibold text-white'>{item.type}</h1>
                            <h2 className='text-[15px] font-semibold text-white'>{item.con1}</h2>
                            <h2 className='text-[15px] font-semibold text-white'>{item.con2}</h2>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Contact