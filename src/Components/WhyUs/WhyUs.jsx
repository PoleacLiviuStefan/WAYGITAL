import React from 'react'
import underLIne from './underLine.svg'
const WhyUs = ({transformBg}) => {
  return (
    <div name="Despre Noi" className={`relative text-white ${transformBg && "animate-[transformColor_1s_ease-in-out_forwards]"}  flex flex-col items-center justify-center  bg-[#1A1A1A] w-screen h-full mt-[10rem] lg:mt-[15rem] mb-[5rem]`}>
            <h2 className=' text-[22px] lg:text-[38px] text-transparent font-outline-2 w-[80%] lg:w-[50rem] font-bold' ><span className='text-white'>NOI NU </span> CREAM DOAR SITE-URI CONSTRUIM  <span className='text-white'> O CALE STABILA </span> PENTRU A ITI PROMOVA  <span className='text-white'>SERVIICILE / PRODUSELE </span> <img className='relative top-[-.4rem] lg:top-[-.8rem] lg:left-[16rem] w-[150px] lg:w-[500px]' src={underLIne} />  </h2>
            <p className='relative mt-[1rem] w-[18rem] lg:w-[50rem]'>Din pacate multi antreprenori considera un website o simpla cheltuiala . Nu este doar atat ! Un website este o investitie care pe termen lung aduce o multime de beneficii , cum ar fi generarea de mai multi clienti , automatizarea anumitor procese , implicit reducerea cheltuielilor si construirea unui brand solid.  </p>
            <span className='relative  mt-[7rem] h-[9px] w-full opacity-[30%] bg-[#6B34FF] shadow-[0px_0px_50px_-3px_ rgba(107,52,255,0.85)]' />
    </div>
  )
}

export default WhyUs