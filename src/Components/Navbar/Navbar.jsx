import React, { useRef } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import underLine from './underLine.svg'
import { motion, useScroll,useTransform } from "framer-motion"
import logo from './logoText.png'
import {BsPhone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Navbar = ({sliderPercentage,showNavbar}) => {
  const targetRef= useRef();
  const [hoveredBtn,setHoveredBtn] = useState(-1)
  const { scrollYProgress } = useScroll();
  const [showMobileMenu,setShowMobileMenu]=useState(false)
  const navigate=useNavigate(); 


  const scaleWidth=useTransform(scrollYProgress,[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1])

  return (
    <nav className={`${showNavbar ? "fixed animate-[slideNavbar_.5s_ease-in-out_forwards]":"absolute"} z-50 flex justify-center  left-0 text-[#5C5C5C]  bg-white h-[4rem] lg:h-[6rem] w-full `}>
        <div className='flex justify-between items-center h-full w-[80%]'>
            <div className='w-[50rem] hidden lg:flex text-[14px] items-center  justify-between'>
            <Link
            activeClass="active"
            to="Despre Noi"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            href="Despre Noi"
          >
              <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(0)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative px-2 flex ${(hoveredBtn!==0 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`} >  DESPRE NOI
              <span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===0 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
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
              <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(1)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative px-2 ${(hoveredBtn!==1 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`} >SERVICII <span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===1 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"}`} /> </button>
            </Link>
            <Link
            activeClass="active"
            to="Portofoliu"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
            href="Portofoliu"
          >
                <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(2)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative px-2 ${(hoveredBtn!==2 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards] "}`}>PORTOFOLIU <span className={`absolute left-0 bottom-0 bg-underLine bg-cover  h-[2px] ${hoveredBtn ===2 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
            </Link>
            <Link
            activeClass="active"
            to="Intrebari Frecvente"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            href="Intrebari Frecvente"
          >
                <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(4)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative px-2 ${(hoveredBtn!==4 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`}> INTREBARI FRECVENTE<span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===4 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
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
                <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(3)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative px-2 ${(hoveredBtn!==3 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`}>ETAPE DE LUCRU <span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===3 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
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
                <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(5)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative px-2 ${(hoveredBtn!==5 && hoveredBtn!=-1) ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`}>CONTACT <span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===5 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
            </Link>
                
             </div>
             <div onClick={()=>setShowMobileMenu(prev=>!prev)} className='absolute lg:hidden top-[.2rem] left-[1.5rem]  flex flex-col items-left justify-center h-[2rem]  w-[1.5rem]'>
              <span className={`relative ${showMobileMenu ? " animate-[topLine_.5s_ease-in-out_forwards]" :" animate-[topLineReverse_.5s_ease-in-out_forwards]"} top-[.3rem] w-[1.3rem] h-[2px] bg-black`} />
              <span className={`relative ${showMobileMenu ? " animate-[disappear_.5s_ease-in-out_forwards]" :" animate-[appear_.5s_ease-in-out_forwards]"}  top-[.6rem] w-[1rem] h-[2px] bg-black`} />
              <span className={`relative ${showMobileMenu ? " animate-[bottomLine_.5s_ease-in-out_forwards]" :"animate-[bottomLineReverse_.5s_ease-in-out_forwards]"} top-[.9rem] w-[1.3rem] h-[2px] bg-black`} />
             </div>
        
             <div  className='w-full h-full lg:hidden flex justify-center items-center'>
             <Link
            activeClass="active"
            to="Hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href="Hero"
          >
              <img src={logo} className="relative w-[130px]" />
          </Link>
             </div>
             <div className='lg:flex hidden  w-[20rem] ml-[2rem] lg:ml-0'>
                <div className='flex flex-col items-center'>
                    <h3 className='text-[14px] '>Ne poti suna la </h3>
                    <a href="tel:+40-753-616-640" className='text-[#6C35FF] font-semibold text-[18px] px-10 hover:animate-[phoneAnim_.3s_ease-in-out_forwards]' >0753616640</a>
                </div>
                <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            href="Contact"
          ><button className=' flex    bg-gradient-to-r from-[#6B34FF] to-[#B234FF]  w-[7rem] lg:w-[8rem] h-[3rem] lg:h-[3rem] rounded-[21px] left-[.5rem] lg:left-[3rem] justify-center items-center font-semibold text-white text-[14px] lg:text-[15px] animate-[reverseHoverContactBtn_.3s_ease-in-out_forwards] hover:animate-[hoverContactBtn_.3s_ease-in-out_forwards]'>CONTACT</button>
          </Link>
             </div>
        </div>
        <motion.div  style={{ scaleX: scrollYProgress }} className={`absolute left-0 bottom-0 origin-left w-full  bg-gradient-to-r from-purple-400 to-purple-600 h-[.4rem] lg:h-[.7rem]  `} />

        <div className={`absolute lg:hidden  flex flex-col items-center justify-center  overflow-hidden  top-[4rem] w-full ${showMobileMenu ? "animate-[expandMenu_.3s_ease-in-out_forwards]" : "animate-[expandMenuReverse_.3s_ease-in-out_forwards]"} bg-white`}>
          <div className='flex flex-col items-left py-6 text-[12px] font-bold justify-between h-full w-[17rem] overflow-hidden '>
            <Link
                activeClass="active"
                to="Despre Noi"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
                href="Despre Noi"
              >
                  <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(0)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative  px-2 flex ${(hoveredBtn!==0 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`} >  DESPRE NOI
                  <span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===0 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
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
              <div className='flex'>
                  <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(1)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative  px-2 ${(hoveredBtn!==1 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`} >SERVICII <span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===1 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"}`} /> </button>
                  <div className='flex justify-center items-center ml-4 rounded-[8px] bg-gray-100 shadow-md text-[12px] font-thin  w-[6rem]  '>
                    Oferta Speciala
                  </div>
              </div>
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
                    <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(2)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative  px-2 ${(hoveredBtn!==2 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards] "}`}>PORTOFOLIU <span className={`absolute left-0 bottom-0 bg-underLine bg-cover  h-[2px] ${hoveredBtn ===2 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
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
                    <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(4)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative  px-2 ${(hoveredBtn!==4 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`}> INTREBARI FRECVENTE<span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===4 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
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
                    <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(3)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative  px-2 ${(hoveredBtn!==3 && hoveredBtn!=-1)  ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards]"}`}>ETAPE DE LUCRU <span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===3 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
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
                    <button onClick={()=>navigate("/")} onMouseEnter={()=>setHoveredBtn(5)} onMouseLeave={()=>setHoveredBtn(-1)} className={`relative  px-2 ${(hoveredBtn!==5 && hoveredBtn!=-1) ? "animate-[unselectedBtn_.3s_ease-in-out_forwards]" : "animate-[unselectedBtnReverse_.3s_ease-in-out_forwards] hover:"}`}>CONTACT <span className={`absolute left-0 bottom-0 bg-underLine bg-cover w-full h-[2px] ${hoveredBtn ===5 ? "animate-[slideUnderLine_.3s_ease-in-out_forwards]":"hidden"} `} /></button>
                </Link>
                <a href='tel:+40-753-616-640' className='flex px-2 text-[14px]'><span className='text-[15px] mr-2'><BsPhone /></span>Telefon : <span className='hover:animate-[phoneAnim_.3s_ease-in-out_forwards]'>0753616640</span></a>
                <a className='flex px-2 '><span className='text-[15px] mr-2'><AiOutlineMail /></span>E-mail: info@waygital.ro</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar