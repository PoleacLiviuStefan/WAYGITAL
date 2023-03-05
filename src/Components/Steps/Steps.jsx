import React, { useState } from 'react'
import Step from './Step'
import planificationIcon from './planificationIcon.svg'
import designIcon from './designIcon.svg'
import developmentIcon from './developmentIcon.svg'
import launchIcon from './launchIcon.svg'
import improvementsIcon from './improvementsIcon.svg'
import seoIcon from './seoIcon.png'

import bullets from './bullets.svg'


import {BsChevronRight} from 'react-icons/bs'
const Steps = () => {
    const [stepsGroup,setStepsGroup]=useState(0)
  return (
    <div className='relative flex flex-col items-center w-full h-[97rem] lg:h-[65rem] bg-white'>
        <h2 className='relative text-[26px] lg:text-[56px] mt-[5rem] font-extrabold font-outline-black-2 text-transparent   '>PASII DE <span className='text-black' > LUCRU</span></h2>
        <div className='relative flex lg:Flex-row flex-col  items-center  justify-center w-[65rem]  '>
            <div className='absolute  top-[2rem] z-20 w-[55rem] h-[40rem] flex lg:flex-row flex-col overflow-y-scroll lg:overflow-hidden'>
                <div className={`flex lg:flex-row flex-col justify-between w-full ${stepsGroup!==0 && "lg:hidden"}`}>
                    <Step  iconImg={planificationIcon} stepNumber="1" stepTitle="Planificarea Proiectului"/>
                    <Step  iconImg={designIcon} stepNumber="2" stepTitle="Crearea Design-ului"/>
                    <Step  iconImg={developmentIcon} stepNumber="3" stepTitle="Dezvoltare"/>
                </div>
                <div className={`flex lg:flex-row flex-col justify-between w-full ${stepsGroup!==1 && "lg:hidden"}` }>
                    <Step  iconImg={launchIcon} stepNumber="4" stepTitle="Testare si Lansare"/>
                    <Step  iconImg={improvementsIcon} stepNumber="5" stepTitle="Imbunatari Periodice"/>
                    <Step  iconImg={seoIcon} stepNumber="6" stepTitle="Optimizare pentru Motoarele de Cautare"/>
                </div>
            </div>
            <img src={bullets} className="absolute hidden lg:inline top-[10rem] px-[1rem] left-0 rotate-[90deg] lg:rotate-0 "></img>
            <span onClick={()=>setStepsGroup(0)} className="absolute top-[8.3rem] left-0 text-[56px] rotate-[90deg] lg:rotate-[180deg]  text-[#9E00FF] cursor-pointer"><BsChevronRight /></span>
            <span onClick={()=>setStepsGroup(1)}   className="absolute top-[8.3rem] right-0 text-[56px] rotate-[90deg] lg:rotate-[0deg] text-[#9E00FF] cursor-pointer"><BsChevronRight /></span>
            
        </div>
        <div className='relative flex justify-center items-center w-[90%] lg:w-[800px] h-[450px] lg:h-[350px] mt-[53rem] lg:mt-[25rem]  rounded-[16px] '>
            <div className='absolute w-full h-full right-[-2rem] bottom-[-1.5rem] rounded-[16px]  bg-[#9E00FF] shadow-[0px_0px_49px_0px_rgba(158,0,255,0.67)]' />
            <div className='absolute flex flex-col items-center justify-center  rounded-[16px] bg-[#1A1A1A] w-full h-full shadow-[10px_10px_39px_-5px_rgba(0,0,0,0.67)]'>
                <h3 className='text-[18px] lg:text-[28px] text-white font-bold '>Planificarea Proiectului</h3>
                <p className=' w-[90%] lg:w-[40rem] text-[14px] lg:text-[16px]  text-white text-justify mt-[1.5rem]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore corrupti ad hic voluptatum rerum, natus non iure? Ullam quia doloremque, beatae aut molestiae dolor, pariatur debitis sapiente quasi autem voluptates, obcaecati ratione delectus ut placeat inventore dolores. Fugiat dolore tempora quae magnam necessitatibus velit praesentium, minima quas blanditiis suscipit error vel ea repudiandae aliquam voluptas fugit eaque earum eligendi hic distinctio voluptates beatae nam sit. Quas, ab? Voluptate fugiat expedita minus veritatis velit assumenda quae nesciunt cupiditate laboriosam, at eveniet!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Steps