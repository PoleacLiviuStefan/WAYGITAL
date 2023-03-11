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
    const [stepText,setStepText]=useState(0)
    const textDescription=['In prima etapa stabilim "planul de atac" prin construirea unei imagini clare a rezultatutui final. Aceasta este etapa in care imi descrieti ceea ce doriti cu ajutorul nostru de specialitate .','Etapa creativa a acestui proces . Construirea unui design complet de la zero . Pe parcursul construirii design-ului va cer mai multe pareri , astfel incat rezultatul final sa fie unul placut .' , 'Etapa de dezvoltare este cea in care transformam ideea si design-ul proiectului intr-un website functional si pregatit pentru etapa de testare . Aceasta este etapa care dureaza cel mai mult in functie de complexitatea proiectului . Pentru aceasta etapa folosim cele mai noi tehnologii pentru o performanta maxima.',"Aceasta este etapa in care ne asiguram ca totul functioneaza perfect si in care lansam site-ul online , astfel incat sa apara in randul cautarilor in motoarele de cautare. Practic aceasta este etapa in care avem un produs final , gata de utilizare .", 'In general un utilizator ar dori sa vada informatii de actualitate , astfel incat noi actualizam informatiile aflate pe site la cererea clientului . Pentru acest serviciu primele 3 luni le oferim GRATUIT .', 'Fara o strategie SEO site-ul nu poate concura sa fie prezent pe primele pozitii in randul cautarilor . Etapa de optimizare pentru motoarele de cautare ( SEO ) este una de lunga durata (in functie de concurenta intre 6-8 luni) . Va oferim s impactul pe care il are asupra publicului tinta. ']
  return (
    <div name="Etape De Lucru" className='relative flex flex-col items-center w-full h-[97rem] lg:h-[65rem] '>
        <h2 className='relative text-[24px] lg:text-[56px] mt-[5rem] font-extrabold font-outline-black-2 text-transparent   '>PASII DE <span className='text-black' > LUCRU</span></h2>
        <div className='relative flex lg:flex-row flex-col  items-center  justify-center w-[65rem]  '>
         
            <div className='absolute  top-[2rem] z-20 w-[55rem] h-[40rem] flex lg:flex-row flex-col overflow-y-scroll lg:overflow-hidden'>
              
                <div className={`flex relative  lg:flex-row flex-col justify-between w-full ${stepsGroup!==0 && "lg:hidden"}`}>
                 
                    <div onClick={()=>setStepText(0)}>  <Step   iconImg={planificationIcon} stepNumber="1" stepTitle="Planificarea Proiectului"/></div>
                    <div onClick={()=>setStepText(1)}> <Step  iconImg={designIcon} stepNumber="2" stepTitle="Crearea Design-ului"/></div>
                    <div onClick={()=>setStepText(2)}>  <Step   iconImg={developmentIcon} stepNumber="3" stepTitle="Dezvoltare"/></div>
                </div>
                <div className={`flex lg:flex-row flex-col justify-between w-full ${stepsGroup!==1 && "lg:hidden"}` }>
                <div onClick={()=>setStepText(3)}><Step  iconImg={launchIcon} stepNumber="4" stepTitle="Testare si Lansare"/> </div>
                <div onClick={()=>setStepText(4)}><Step  iconImg={improvementsIcon} stepNumber="5" stepTitle="Schimbari Periodice"/> </div>
                <div onClick={()=>setStepText(5)}><Step  iconImg={seoIcon} stepNumber="6" stepTitle="Optimizare pentru Motoarele de Cautare"/> </div>
                </div>
            </div>
            <img src={bullets} className="absolute hidden lg:inline top-[10rem] px-[1rem] left-0 rotate-[90deg] lg:rotate-0 "></img>
            <span onClick={()=>setStepsGroup(0)} className="absolute hidden lg:inline top-[8.3rem] z-40 left-0 text-[56px] rotate-[90deg] lg:rotate-[180deg]  text-[#9E00FF] cursor-pointer"><BsChevronRight /></span>
            <span onClick={()=>setStepsGroup(1)}   className="absolute hidden lg:inline z-40 top-[8.3rem] right-0 text-[56px] rotate-[90deg] lg:rotate-[0deg] text-[#9E00FF] cursor-pointer"><BsChevronRight /></span>
            <div className='absolute h-full lg:hidden w-full '>
                <div className='absolute  bottom-[-43rem] z-30   bg-gradient-to-t from-[#F2F2F7] to-transparent bg-opacity-[50%] h-[15rem] w-full   ' />
        </div>  
        </div>
        <div className='relative flex justify-center items-center w-[90%] lg:w-[700px] h-[400px] lg:h-[350px] mt-[53rem] lg:mt-[25rem]  rounded-[16px] '>
        <span onClick={()=>{if(stepText>0) setStepText(prev=>prev-=1); if(stepText==3) setStepsGroup(0)}} className="absolute  top-[12rem] lg:top-[10rem] z-40 left-0 text-[48px] lg:text-[56px] rotate-[180deg]  text-[#9E00FF] cursor-pointer"><BsChevronRight /></span>
            <span onClick={()=>{if(stepText<5) setStepText(prev=>prev+=1); if(stepText==2) setStepsGroup(1)}}   className="absolute  top-[12rem] lg:top-[10rem]  z-40 right-0 text-[48px] lg:text-[56px] rotate-[0deg] text-[#9E00FF] cursor-pointer"><BsChevronRight /></span>
            <div className='absolute w-full h-full right-[-2rem] bottom-[-1.5rem] rounded-[16px]  bg-[#9E00FF] shadow-[0px_0px_49px_0px_rgba(158,0,255,0.67)]' />
            <div className='absolute flex flex-col items-center justify-center  rounded-[16px] bg-[#1A1A1A] w-full h-full shadow-[10px_10px_39px_-5px_rgba(0,0,0,0.67)]'>
                <h3 className='absolute top-[3rem] text-[16px] px-4 text-center lg:text-[28px] text-white font-bold '>{stepText ==0 ? "Planificarea Proiectului": stepText==1 ? "Crearea Design-ului": stepText===2 ?"Dezvoltarea site-ului":stepText==3 ? "Testare si Lansare": stepText==4 ? "Imbunatatiri Periodice": "Optimizare pentru Motoarele de Cautare"}</h3>
                <p className=' w-[70%] lg:w-[35rem] text-[14px] lg:text-[16px]  text-white text-justify mt-[1.5rem]'>
                    {textDescription[stepText]}
                </p>

            </div>
       
        </div>
       
    </div>
  )
}

export default Steps