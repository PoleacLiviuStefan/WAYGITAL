import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { useState } from 'react'
const OfferCard = ({title,iconImg}) => {
    const [selected,setSelected]=useState(false)
  return (
    <div onClick={()=>setSelected(prev=>!prev)} className={`relative my-6  lg:m-4 flex flex-col justify-center items-center w-[150px] w-[250px] h-[183px] lg:h-[306px] ${selected ? "animate-[selectOption_.5s_ease-in-out_forwards]":"animate-[selectOptionReverse_.5s_ease-in-out_forwards]"} rounded-[16px] px-[1.5rem] shadow-xl cursor-pointer hover:scale-[1.1] hover:mt-[-.5rem]`}>
           <h3 className={`absolute ${!selected && "hidden"} flex text-[14px] font-bold left-4 top-4`}> <span className=' text-[20px] text-green-400 mr-2'><BsFillPatchCheckFill /></span>SELECTAT</h3>
            <h3 className='text-[16px] lg:text-[18px]  font-bold text-center'>{title}</h3>
            <div className={`relative mt-[1rem] flex justify-center items-center text-center w-[100px] h-[100px] rounded-[50%] ${selected ? "animate-[centerOption_.5s_ease-in-out_forwards] ":"animate-[centerOptionReverse_.5s_ease-in-out_forwards]"}  shadow-lg`}>
                <img src={iconImg} />

            </div>
    </div>
  )
}

export default OfferCard