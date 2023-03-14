import React from 'react'
import underLIne from './underLine.svg'
import Fade from 'react-reveal/Fade'; 

const WhyUs = ({transformBg}) => {
  return (
    <div name="Despre Noi" className={`relative text-white ${transformBg && "animate-[transformColor_1s_ease-in-out_forwards]"}  flex flex-col items-center justify-center  bg-transparent w-screen lg:h-screen h-full mt-[10rem] lg:mt-0 `}>
          <Fade>
            <h2 className=' text-[18px] lg:text-[38px] text-transparent font-outline-1 lg:font-outline-2 w-[18rem] lg:w-[50rem] font-bold' ><span className='text-white'>NOI NU </span> CREAM DOAR SITE-URI CONSTRUIM  <span className='text-white'> O CALE STABILA </span> PENTRU A ITI PROMOVA  <span className='text-white'>SERVIICILE / PRODUSELE </span> <img className='relative top-[-.4rem] lg:top-[-.8rem] lg:left-[16rem] w-[250px] lg:w-[500px]' src={underLIne} />  </h2>
          </Fade>
          <Fade>
            <p className='relative lg:text-[15px] text-[14px] mt-[1rem] w-[17rem] lg:w-[50rem] text-justify'>Din pacate multi antreprenori considera un website o simpla cheltuiala . Nu este doar atat ! Un website este o investitie care pe termen lung aduce o multime de beneficii , cum ar fi generarea de mai multi clienti , automatizarea anumitor procese , implicit reducerea cheltuielilor si construirea unui brand solid.  </p>
            </Fade>
            <span className='lg:absolute mt-[7rem] lg:mt-0 lg:bottom-[5rem] h-[9px] w-full opacity-[30%] bg-[#6B34FF] shadow-[0px_0px_50px_-3px_rgba(107,52,255,0.85)]' />
    </div>
  )
}

export default WhyUs