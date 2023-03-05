import React from 'react'

const LeftSlider = ({firstColored,secondColored}) => {
  return (
    <div className='fixed z-40 text-white left-[1rem] lg:left-[2rem] w-[2px] text-[14px] h-full flex flex-col justify-center '>
        <div className='relative  flex flex-col justify-center h-[40rem] w-[2px]'>
                 
                <div className={`flex flex-col h-[120px] w-[1px]    ${secondColored==="black" ?"bg-black": "bg-white" } `} >
                    <span></span>
                <a className= {`flex whitespace-nowrap rotate-[-90deg] mt-[-1.5rem] cursor-pointer  ${firstColored==="black" ?"text-black": "text-white" }`} >Spre Inceput</a>
                <a className={` flex rotate-[-90deg] mt-[18.5rem] cursor-pointer ${secondColored==="black" ?"text-black": "text-white" } `} >stefan.liviu286@gmail.com</a>
            </div>
        </div>

    </div>
  )
}

export default LeftSlider