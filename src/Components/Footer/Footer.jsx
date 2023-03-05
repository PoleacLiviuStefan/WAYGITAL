import React from 'react'
import {AiOutlineInstagram,AiOutlinePhone,AiOutlineMail,AiOutlineClockCircle} from 'react-icons/ai'
import {CiFacebook,CiTwitter,CiLocationOn} from 'react-icons/ci'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import logo from './logoFullName.png'

const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className='relative flex justify-center  w-full h-[50rem] lg:h-[23rem] bg-[#EBECF8] '>
       <div className='flex flex-col  lg:flex-row   justify-between mt-[2rem]  w-[10rem] lg:w-[50rem] h-[70%] lg:h-[12rem]'>
                <div className='flex flex-col items-left w-[15rem]'>
                  <h5 className=''>NAVIGHEAZA</h5>
                    <ul className='flex flex-col justify-between mt-[.5rem] h-full text-[14px] text-gray-500'>
                    <Link
            activeClass="active"
            to="Despre Noi"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            href="Despre Noi"
          >
              <li >DESPRE NOI</li>
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
              <li>SERVICII</li>
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
                <li>PORTOFOLIU</li>
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
                <li>PRETURI</li>
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
                <li>INTREBARI FRECVENTE</li>
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
                <li>CONTACT</li>
            </Link>

                     
                    </ul>
                </div>
                <div className='flex flex-col items-left w-[15rem]'>
                  <h5 className=''>UTILE</h5>
                  <ul className='flex flex-col justify-between mt-[.5rem] h-[5rem] text-[14px] text-gray-500'>
                    <li onClick={()=>navigate("/politica-de-confidentialitate")} className='cursor-pointer'>Politica de confidentialitate</li>
                    <li onClick={()=>navigate("/politica-cookie")} className='cursor-pointer'>Politica Cookie</li>
                    <li onClick={()=>navigate("/termeni-si-conditii")} className='cursor-pointer'>Termeni si conditii</li>
                  </ul>
                </div>
                <div className='flex flex-col  w-[15rem] lg:w-[20rem]'>
                  
                  <img src={logo} className="w-[300px]" />
                 
                  <h5 className='flex flex-col items-left mt-[.5rem] text-[14px] text-gray-500 mt-[.5rem]'><span className=' flex '><span className='text-[20px] mr-2'><AiOutlineClockCircle /> </span>PROGRAM :</span> <span className='flex flex-col items-right ml-7'> 8:00 - 22:00 LUNI-VINERI <br /> 8:00 - 19:00 SAMBATA-DUMINICA</span></h5>
                  <h5 className='flex  text-[14px] text-gray-500 mt-[1rem]'><span className='text-[20px] mr-2'><CiLocationOn /> </span> Buzau, Aleea Craitelor nr. 1  </h5>
                </div>
            </div>
        <div className='absolute bottom-0 flex justify-center w-full h-[8rem]' >
            <span className='absolute top-0  w-full h-[2px] bg-[#CFD3F0]' />
            <div className='flex justify-center w-[40rem] mt-[1rem]'>
             
                 <div className='flex justify-between w-[20rem]  mt-[.5rem] text-[28px]'>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><AiOutlineInstagram /> </div>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><CiFacebook /></div>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><CiTwitter /></div>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><AiOutlinePhone /></div>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><AiOutlineMail /></div>
                 </div>
            </div>
           
            <h6 className='absolute bottom-2'>ⒸWAYGITAL VISIONARY COPYRIGHT 2023</h6>
        </div>


    </div>
  )
}

export default Footer
