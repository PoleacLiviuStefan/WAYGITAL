import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = ({showNavbar}) => {
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
              <button >DESPRE NOI</button>
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
              <button>SERVICII</button>
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
                <button>PORTOFOLIU</button>
            </Link>
            <Link
            activeClass="active"
            to="Preturi"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            href="Preturi"
          >
                <button>PRETURI</button>
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
                <button>INTREBARI FRECVENTE</button>
            </Link>
            <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            href="Contact"
          >
                <button>CONTACT</button>
            </Link>
                
             </div>
             <div className='flex'>
                <div className='flex flex-col items-center'>
                    <h3>Ne poti suna la </h3>
                    <a className='text-[#6C35FF] font-semibold text-[20px] ' >0753616640</a>
                </div>
                <button className=' flex  bg-clip-padding bg-gradient-to-r from-[#6B34FF] to-[#B234FF] border-[3px] w-[10rem] h-[3.5rem] rounded-[21px] ml-[3rem] justify-center items-center font-semibold text-white '>CONTACT</button>
             </div>
        </div>
        <div className='absolute bottom-0 bg-gradient-to-r from-[#7D0088] to-white w-full h-[.7rem]'>

        </div>
    </nav>
  )
}

export default Navbar