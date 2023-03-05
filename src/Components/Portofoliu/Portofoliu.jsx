import React from 'react'
import motoDesktop from './Images/4motoForRent.png'
import motoPhone from './Images/4MotoForRentPhone.png'
import adinaDeskotp from './Images/adinaNails.png'
import adinaPhone from './Images/AdinaNailsPhone.png'
import bidhouseDesktop from './Images/Bidhouse.png'
import bidhousePhone from './Images/BidhousePhone.png'
import scoalaDeSoferiDesktop from './Images/scoalaDeSoferi.png'
import scoalaDeSoferiPhone from './Images/scoalaDeSoferiPhone.png'

import { useState } from 'react'
const Portofoliu = () => {
  const [siteIndex,setSiteIndex]=useState(0)
  const desktopImg=[bidhouseDesktop,motoDesktop,adinaDeskotp,scoalaDeSoferiDesktop]
  const phoneImg=[bidhousePhone,motoPhone,adinaPhone,scoalaDeSoferiPhone]
  const sitesLink=["https://www.bidhouseplatform.com/","https://4motoforrent.ro/","https://adinahirsch.ro/","https://scoaladesoferi-diculescuciprian.ro/"]
  return (
    <div name="Portofoliu" className='relative flex justify-center items-center w-full h-[25rem] lg:h-[55rem] bg-[#1A1A1A]'>
        <div className='flex flex-col items-center w-[80%] lg:w-[90%]'>
        <h2 className='absolute top-[2rem] text-[26px] lg:text-[56px]  font-extrabold font-outline-2    text-transparent'>PORTOFOLIU</h2>
        <div className='relative  w-[350px] lg:w-[900px]'>
            <a target="_blank" href={sitesLink[siteIndex]}><img   src={desktopImg[siteIndex]} className="lg:left-0 left-[1rem] w-[280px] lg:w-[650px] xl:w-[700px] 2xl:w-[800px] cursor-pointer" /></a>
            <a target="_blank" href={sitesLink[siteIndex]}> <img src={phoneImg[siteIndex]} className="absolute right-[1.5rem] lg:right-[11rem] xl:right-[7rem] 2xl:right-0 top-[1rem] lg:top-[5rem] w-[60px] lg:w-[115px] xl:w-[130px] 2xl:w-[150px] cursor-pointer" /></a>
          </div>
          <div className='flex'>
              <div onClick={()=>setSiteIndex(0)} className='relative mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px] border-white overflow-hidden cursor-pointer'><span className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${siteIndex!==0 && "hidden"} `} /></div>
              <div onClick={()=>setSiteIndex(1)} className='relative mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px] border-white overflow-hidden cursor-pointer'><span className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${siteIndex!==1 && "hidden"}`} /></div>
              <div onClick={()=>setSiteIndex(2)} className='relative mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px] border-white overflow-hidden cursor-pointer'><span className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${siteIndex!==2 && "hidden"}`} /></div>
              <div onClick={()=>setSiteIndex(3)} className='relative mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px] border-white overflow-hidden cursor-pointer'><span className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${siteIndex!==3 && "hidden"}`} /></div>
          </div>
        </div>
    </div>
  )
}

export default Portofoliu