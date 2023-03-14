import React from 'react'
import {AiOutlineInstagram,AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {CiFacebook,CiTwitter} from 'react-icons/ci'

const MiniInfo = () => {
  return (
    <div className='relative flex justify-center items-center text-black   w-full h-[6rem] bg-white mt-[4rem]'>
      <div className='flex justify-center items-center bg-gradient-to-r from-[#5034FF]/20 to-transparent w-full h-full'>
        <div className='flex justify-between w-[80%] lg:w-[45rem] text-[28px] '>
            <h3 className='text-[14px] lg:text-[24px] font-extrabold italic mt-2'>Ne poti gasi si pe platformele de socializare </h3>
                 <div className='flex items-center justify-between   w-[9rem] lg:w-[12rem]'>
                             <a target="_blank" href="https://www.instagram.com/waygital/" className='flex justify-center items-center w-[25px] lg:w-[50px] h-[25px] lg:h-[50px] rounded-[12px] bg-white shadow-lg cursor-pointer'><AiOutlineInstagram /> </a>
                            <div className='flex justify-center items-center w-[25px] lg:w-[50px] h-[25px] lg:h-[50px] rounded-[12px] bg-white shadow-lg cursor-pointer'><CiFacebook /></div>
                            <a target="_blank" href="https://twitter.com/WayGital" className='flex justify-center items-center w-[25px] lg:w-[50px] h-[25px] lg:h-[50px] rounded-[12px] bg-white shadow-lg cursor-pointer'><CiTwitter /></a>
                 </div>
        </div>  
        </div>             
    </div>
  )
}

export default MiniInfo