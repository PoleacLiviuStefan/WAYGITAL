import React from 'react'
import logoText from './logoText.webp'
import { TypeAnimation } from 'react-type-animation';
import { useMotionValue,useTransform,motion } from 'framer-motion';
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import { Link, animateScroll as scroll } from "react-scroll";
const Hero = () => {

const x = useMotionValue(0);
const y = useMotionValue(0);
const rotateX = useTransform(y,[-100,100],[-30,30]);
const rotateY = useTransform(x,[-100,100],[-30,30]);
  return (
    <div name="Hero" className='relative w-screen h-[40rem] lg:h-screen flex flex-col justify-center  items-center text-white bg-gradient-to-tl from-[#6B34FF] via-purple-400 to-[#B234FF]  background-animate'>

      <img src={logoText} draggable='false'  className=" w-[150px] 2xl:w-[550px] xl:w-[450px] lg:w-[400px] opacity-[10%] animate-[animateFirtTwo_1s_ease-in-out_forwards] "  alt="Before logo effect"/>
                <img draggable='false' src={logoText} className=" w-[200px] 2xl:w-[600px] xl:w-[500px] lg:w-[450px] animate-[animateFirtTwo_1s_ease-in-out_forwards] opacity-[20%] mb-[-1rem]  " alt="Before logo effect" />
                  <img draggable='false' src={logoText} className=" w-[250px] 2xl:w-[650px] z-30 xl:w-[550px] lg:w-[500px] animate-[logoLoadingAnim_2s_ease-in-out_forwards] opacity-[40%] mb-[-.5rem] lg:mb-[-1rem] xl:mb-[-2rem] 2xl:mb-[-3rem]" alt="Before logo effect" />
                 
                          <img src={logoText} className=" w-[300px] 2xl:w-[700px] z-40 xl:w-[600px] lg:w-[550px] animate-[logoLoadingAnim_2s_ease-in-out_forwards]" alt="Creare site web de prezentare" />
                         
            <img src={logoText} className=" w-[250px] 2xl:w-[650px] z-30 xl:w-[550px] lg:w-[500px] animate-[logoLoadingAnim_2s_ease-in-out_forwards] opacity-[40%] mt-[-.5rem] lg:mt-[-1rem] xl:mt-[-2rem] 2xl:mt-[-3rem]"  alt="After logo effect" />
            <img src={logoText} className=" w-[200px] 2xl:w-[600px] xl:w-[500px] lg:w-[450px]  opacity-[20%] animate-[animateLastTwo_1s_ease-in-out_forwards] " alt="After logo effect" />
            <img src={logoText} className=" w-[150px] 2xl:w-[550px] xl:w-[450px] lg:w-[400px]  opacity-[10%]  animate-[animateLastTwo_1s_ease-in-out_forwards]" alt="After logo effect" />
            
         
            <div className="mt-[1rem] lg:mt-[2rem] flex justify-center text-[13px] lg:text-[24px] font-bold italic w-[24rem] lg:w-[40rem] ">
            <h3 className='flex justify-center font-extrabold' >
              Te ajutam in <span  className='w-1'/>
                        <TypeAnimation
                  sequence={[
                    2000,
                    'digitalizarea', // Types 'One'
                    2000,
                    'extinderea',
                    2000,
                    'cresterea',
                    2000,
                    'automatizarea',
                    () => {
                          
                    }
                  ]}
                  
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{textDecoration:"underline"}}
                />
              <span  className='w-1'/>
              propriei tale afaceri
            </h3>
            </div>
            <Link
            activeClass="active"
            to="Despre Noi"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            href="Despre Noi"
          >
            <div className='absolute bottom-[-10rem] lg:bottom-[-2rem] flex flex-col items-center relative   text-white'>
                    <span className='text-[24px] cursor-pointer animate-[appearDissappear_2s_ease-in-out_infinite] '><BsFillArrowDownCircleFill /></span>
                    <h4 className=' font-montSerrat text-[10px] lg:text-[14px]'>Exploreaza</h4>
            </div>
            </Link>
    </div>
  )
}

export default Hero