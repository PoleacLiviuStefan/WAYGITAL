import React from 'react'
import {AiOutlineInstagram,AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {CiFacebook,CiTwitter} from 'react-icons/ci'

const MiniInfo = () => {
  return (
    <div className='relative flex justify-center items-center   w-full h-[6rem] bg-white'>
      <div className='flex justify-center items-center bg-gradient-to-r from-[#5034FF]/20 to-transparent w-full h-full'>
        <div className='flex justify-between w-[80%] lg:w-[45rem] text-[28px] '>
            <h3 className='text-[16px] lg:text-[24px] font-extrabold italic mt-2'>Ne poti gasi si pe platformele de socializare </h3>
                 <div className='flex items-center justify-between   w-[10rem] lg:w-[12rem]'>
                             <div className='flex justify-center items-center w-[25px] lg:w-[50px] h-[25px] lg:h-[50px] rounded-[12px] bg-white shadow-lg cursor-pointer'><AiOutlineInstagram /> </div>
                            <div className='flex justify-center items-center w-[25px] lg:w-[50px] h-[25px] lg:h-[50px] rounded-[12px] bg-white shadow-lg cursor-pointer'><CiFacebook /></div>
                            <div className='flex justify-center items-center w-[25px] lg:w-[50px] h-[25px] lg:h-[50px] rounded-[12px] bg-white shadow-lg cursor-pointer'><CiTwitter /></div>
                 </div>
        </div>  
        </div>             
    </div>
  )
}

export default MiniInfo