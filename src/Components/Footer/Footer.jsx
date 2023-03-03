import React from 'react'
import {AiOutlineInstagram,AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {CiFacebook,CiTwitter} from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='relative w-full h-[20rem] bg-[#EBECF8] '>
        <div className='absolute bottom-0 flex justify-center w-full h-[8rem]' >
            <span className='absolute top-0  w-full h-[2px] bg-[#CFD3F0]' />
            <div className='flex justify-between w-[35rem] mt-[1rem]'>
                 <button className=' flex  bg-clip-padding bg-gradient-to-r from-[#6B34FF] to-[#B234FF] border-[3px] w-[10rem] h-[3.5rem] rounded-[21px]  justify-center items-center font-semibold text-white '>CONTACT</button>
                 <div className='flex justify-between w-[20rem]  mt-[.5rem] text-[28px]'>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><AiOutlineInstagram /> </div>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><CiFacebook /></div>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><CiTwitter /></div>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><AiOutlinePhone /></div>
                        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-[16px] bg-white shadow-lg cursor-pointer'><AiOutlineMail /></div>
                 </div>
            </div>
            <h3 className='absolute bottom-2'>ⒸWAYGITAL VISIONARY COPYRIGHT 2023</h3>
        </div>


    </div>
  )
}

export default Footer
