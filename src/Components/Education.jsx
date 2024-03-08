import React from 'react'

function Education() {
    return (
        <div className="educationContainer">
            <div className="eduHeadding fadein-animation flex flex-col justify-center items-center p-5">
                <h1 className='text-[35px] font-bold text-white'>EDUCATION</h1>
                <div className='flex items-center gap-2 relative bottom-3'>
                    <div className='h-1 w-[7rem] bg-white'></div>
                    <span className='text-red-500 font-bold'>LEARNING</span>
                </div>
            </div>
            <div className="educationSection w-[100%] h-auto flex flex-col gap-2 p-5 text-white overflow-x-hidden">
                <div className="LToR-fadein-animation edu grid sm:grid-cols-12 w-[100%] h-auto gap-2">
                    <div className="eduItm col-span-4  text-right">
                        <h1 className='text-[20px] font-bold'>NEWTON SCHOOL</h1>
                        <h4 className='text-[15px] font-bold'>Bangalore, Karnataka</h4>
                        <p >A professional certificate course in full-stack development designed to help me get the best knowledge in  software development with a strong focus on DSA.</p>
                    </div>
                    <div className="eduItm col-span-2 bg-red-600 flex justify-center items-center text-[60px] font-bold rounded-r-[50%]">2024</div>
                    <div className="eduItm col-span-2"></div>
                    <div className="eduItm col-span-4 "></div>
                </div>
                <div className="RToL-fadein-animation edu grid sm:grid-cols-12 w-[100%] h-auto gap-2">
                    <div className="eduItm col-span-4 "></div>
                    <div className="eduItm col-span-2"></div>
                    <div className="eduItm col-span-2 bg-red-600 flex justify-center items-center text-[60px] font-bold rounded-l-[50%]">2023</div>
                    <div className="eduItm col-span-4 ">
                        <h1 className='text-[20px] font-bold'>CCLMS - Management College</h1>
                        <h3 className='text-[16px] font-bold'>(Affiliated to: MAKAUT, College Code: 340)</h3>
                        <h4 className='text-[15px] font-bold'>CONTAI (WEST BENGAL)</h4>
                        <p >I completed My bachelor`s Degree In BCA With a 8.69 CGPA Grade from "CCLMS Management College" Which is Affiliated With "MAKAUT University".</p>
                    </div>
                </div>
                <div className="LToR-fadein-animation edu grid sm:grid-cols-12 w-[100%] h-auto gap-2">
                    <div className="eduItm col-span-4  text-right">
                        <h1 className='text-[19px] font-bold'>Keshrambha Vidyasagar Vidyabhaban(H.S.)</h1>
                        <h3 className='text-[16px] font-bold'>West Bengal Council of Higher Secondary Education</h3>
                        <h4 className='text-[15px] font-bold'>KESHRAMBHA (WEST BENGAL)</h4>
                        <p >I Passed My School from "Keshrambha Vidyasagar Vidyabhaban". During my Schooling, I scored 73% in the 12th Board Exam In Science stream.</p>
                    </div>
                    <div className="eduItm col-span-2 bg-red-600 flex justify-center items-center text-[60px] font-bold rounded-r-[50%]">2020</div>
                    <div className="eduItm col-span-2"></div>
                    <div className="eduItm col-span-4 "></div>
                </div>
                <div className="RToL-fadein-animation edu grid sm:grid-cols-12 w-[100%] h-auto gap-2">
                    <div className="eduItm col-span-4 "></div>
                    <div className="eduItm col-span-2"></div>
                    <div className="eduItm col-span-2 bg-red-600 flex justify-center items-center text-[60px] font-bold rounded-l-[50%]">2018</div>
                    <div className="eduItm col-span-4 ">
                        <h1 className='text-[19px] font-bold'>Keshrambha Vidyasagar Vidyabhaban(H.S.)</h1>
                        <h3 className='text-[16px] font-bold'> West Bengal Board of Secondary Education</h3>
                        <h4 className='text-[15px] font-bold'>KESHRAMBHA (WEST BENGAL)</h4>
                        <p >I Passed My School from "Keshrambha Vidyasagar Vidyabhaban". During my Schooling, I scored 65% in the 10th Board Exam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education