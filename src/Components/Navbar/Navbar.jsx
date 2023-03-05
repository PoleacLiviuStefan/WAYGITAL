import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({sliderPercentage,showNavbar}) => {

  const [hoveredBtn,setHoveredBtn] = useState(-1)
  const sliderWidth="w-[" + String(Math.floor(sliderPercentage)) + "%]";
  const navigate=useNavigate();
  console.log(sliderWidth)
  return (
    <nav className={`${showNavbar ? "fixed animate-[slideNavbar_.5s_ease-in-out_forwards]":"absolute"} z-50 flex justify-center  left-0 text-[#5C5C5C]  bg-white h-[6rem] w-full `}>
        <div className='flex justify-between items-center h-full w-[80%]'>
            <div className='w-[48rem] hidden lg:flex items-center  justify-between'>
            <Link
            activeClass="active"
            to="Despre Noi"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            href="Despre Noi"
          >
              <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(0)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative px-2 flex ${(hoveredBtn!==0 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`} >  DESPRE NOI <sup className='absolute right-0'>1</sup></button>
            </Link> 
            <Link
            activeClass="active"
            to="Servicii"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            href="Servicii"
          >
              <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(1)} onMouseLeave={()=>setHoveredBtn(-1)} className={` px-2 ${(hoveredBtn!==1 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`} >SERVICII</button>
            </Link>
            <Link
            activeClass="active"
            to="Portofoliu"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            href="Portofoliu"
          >
                <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(2)} onMouseLeave={()=>setHoveredBtn(-1)} className={` px-2 ${(hoveredBtn!==2 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`}>PORTOFOLIU</button>
            </Link>
            <Link
            activeClass="active"
            to="Etape De Lucru"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            href="Etape De Lucru"
          >
                <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(3)} onMouseLeave={()=>setHoveredBtn(-1)} className={`px-2 ${(hoveredBtn!==3 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`}>ETAPE DE LUCRU</button>
            </Link>
            <Link
            activeClass="active"
            to="Intrebari Frecvente"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            href="Intrebari Frecvente"
          >
                <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(4)} onMouseLeave={()=>setHoveredBtn(-1)} className={`px-2 ${(hoveredBtn!==4 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`}> INTREBARI FRECVENTE</button>
            </Link>
            <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            href="Contact"
          >
                <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(5)} onMouseLeave={()=>setHoveredBtn(-1)} className={`px-2 ${(hoveredBtn!==5 && hoveredBtn!=-1) ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`}>CONTACT</button>
            </Link>
                
             </div>
             <div className='flex'>
                <div className='flex flex-col items-center'>
                    <h3>Ne poti suna la </h3>
                    <a href="tel:+40-753-616-640" className='text-[#6C35FF] font-semibold text-[20px] ' >0753616640</a>
                </div>
                <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            href="Contact"
          ><button className=' flex  bg-clip-padding bg-gradient-to-r from-[#6B34FF] to-[#B234FF] border-[3px] w-[10rem] h-[3.5rem] rounded-[21px] ml-[3rem] justify-center items-center font-semibold text-white '>CONTACT</button>
          </Link>
             </div>
        </div>
        <div className={`absolute bottom-0 bg-[#7D0088] left-0 ${sliderWidth}  h-[.7rem]`}>

        </div>
    </nav>
  )
}

export default Navbar