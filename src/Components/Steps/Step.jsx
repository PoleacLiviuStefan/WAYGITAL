import React from 'react'

const Step = ({iconImg,stepNumber,stepTitle}) => {
  return (
    <div className='flex flex-col items-center items-center h-[360px]  cursor-pointer'>
        <div className='flex justify-center items-center w-[220px] h-[220px] bg-white shadow-xl rounded-[50%]' >
            <img src={iconImg} className="w-[130px] animate-[expandReverse_.5s_ease-in-out_forwards] hover:animate-[expand_.5s_ease-in-out_forwards]" />
            </div>
            <h3 className='relative mt-[1rem] text-[#A395FF] text-[18px]'>Pasul {stepNumber}</h3>
            <h3 className='relative  font-bold text-[20px] w-[12rem] text-center leading-[1.3rem]'>{stepTitle}</h3>
    </div>
  )
}

export default Step