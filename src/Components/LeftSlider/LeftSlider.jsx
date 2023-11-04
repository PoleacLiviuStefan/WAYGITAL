import React, { useRef } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { useScroll,useTransform} from 'framer-motion';
import {useLocation} from 'react-router-dom'
const LeftSlider = ({firstColored,firstColoredMobile}) => {
  const targerRef=useRef();
  const {scrollYProgress}=useScroll({
    target:targerRef,
    offset: ["start end" , "end end"],
  })
  const textX=useTransform(scrollYProgress,[0.1,0.7],['100%','-100%']);
  const opacitySection =useTransform(scrollYProgress,[0.1,0.5],[0,1])
  const scale= useTransform(scrollYProgress,[0.1,0.7],[1,0.7])
  const location=useLocation();
  
  return (
    <div className='fixed z-40 text-white left-[1rem] lg:left-[2rem] w-[2px] text-[14px] h-full flex flex-col justify-center '>
        <div className='relative  flex flex-col justify-center h-[40rem] w-[2px]'>
                 
                <div className={`flex flex-col h-[120px] w-[1px]   ${ location.pathname!=="/personal-CV" ?(firstColored==="black" ? "lg:bg-black lg:text-black" :"lg:bg-white lg:text-white") : "bg-white" } ${ location.pathname!=="/personal-CV" && (firstColoredMobile==="black" ? "bg-black text-black" :"bg-white text-white" )}   `} >
                <Link
            activeClass="active"
            to="Hero"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            href="Hero"
          >
                    
                <a className= {`flex whitespace-nowrap rotate-[-90deg] mt-[-1.5rem] cursor-pointer `} >Spre Inceput</a>
          </Link>
                <a href={`mailto:${location.pathname==='/personal-CV' ? "stefan.liviu286@gmail.com":"info@waygital.ro" }`} className={` flex rotate-[-90deg] mt-[18.5rem] cursor-pointer `} > {location.pathname==="/personal-CV" ? "stefan.liviu286@gmail.com":"info@waygital.ro"}</a>
            </div>
        </div>

    </div>
  )
}

export default LeftSlider