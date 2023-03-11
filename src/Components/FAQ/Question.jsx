import React from 'react'
import {BsChevronRight} from 'react-icons/bs'
import { useState } from 'react'
const Question = ({question,answer}) => {
    const [showAnswer,setShowAnswer]=useState(false)
  return (
    <div onClick={()=>setShowAnswer(prev=>!prev)} className={`relative flex py-[.5rem] flex-col h-[9rem]  mt-[1rem] text-white w-[17rem] lg:w-[58rem] ${showAnswer?"animate-[showAnswerMobile_.5s_ease-in-out_forwards] lg:animate-[showAnswer_.5s_ease-in-out_forwards]":"animate-[showAnswerMobileReverse_.5s_ease-in-out_forwards] lg:animate-[showAnswerReverse_.5s_ease-in-out_forwards]"} overflow-hidden cursor-pointer`} >
        <h3 className='text-[14px] lg:text-[28px] font-bold w-[94%] ' >{question}</h3>
        <span className='absolute text-[14px] lg:text-[15px] bottom-0 bg-gradient-to-r h-[2px] w-full from-[#1A1A1A] via-[#9E00FF] to-[#1A1A1A]'></span>
        <p className=' mt-[1.5rem] lg:mt-[3rem]'>{answer}</p>
        <span className={`absolute ${showAnswer?"animate-[rotateArrow_.5s_ease-in-out_forwards]":"animate-[rotateArrowReverse_.5s_ease-in-out_forwards]"} right-0 text-[24px] lg:text-[32px] `}><BsChevronRight /></span>
    </div>
  )
}

export default Question