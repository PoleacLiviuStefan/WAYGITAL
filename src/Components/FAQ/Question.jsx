import React from 'react'
import {BsChevronRight} from 'react-icons/bs'
import { useState } from 'react'
const Question = ({question,answer}) => {
    const [showAnswer,setShowAnswer]=useState(false)
  return (
    <div onClick={()=>setShowAnswer(prev=>!prev)} className={`relative flex flex-col  mt-[1rem] text-white w-[20rem] lg:w-[55rem] ${showAnswer?"animate-[showAnswer_.5s_ease-in-out_forwards]":"animate-[showAnswerReverse_.5s_ease-in-out_forwards]"} overflow-hidden cursor-pointer`} >
        <h3 className='text-[16px] lg:text-[28px] font-bold ' >{question}</h3>
        <span className='absolute bottom-0 bg-gradient-to-r h-[2px] w-full from-[#1A1A1A] via-[#9E00FF] to-[#1A1A1A]'></span>
        <p className='mt-[3rem]'>{answer}</p>
        <span className={`absolute ${showAnswer?"animate-[rotateArrow_.5s_ease-in-out_forwards]":"animate-[rotateArrowReverse_.5s_ease-in-out_forwards]"} right-0 text-[24px] lg:text-[32px] `}><BsChevronRight /></span>
    </div>
  )
}

export default Question