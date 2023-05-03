import React from 'react'
import Fade from 'react-reveal/Fade';
const Step = ({iconImg,stepNumber,stepTitle,textSide,description,cross}) => {
  return (
    <div className='flex flex-col items-center items-center h-[360px]  cursor-pointer font-montSerrat '>
        <div className='flex'>
          <div className={`flex justify-center items-center w-[150px] lg:w-[200px] h-[150px] lg:h-[220px] ${cross ? "animate-[StepCrossed_.3s_ease-in-out_forwards]" :"animate-[StepCrossedReverse_.3s_ease-in-out_forwards]"} bg-white shadow-xl rounded-[50%]`} >
              <img src={iconImg} alt className={`${cross ? " w-[85px]  lg:w-[130px]": "w-[85px]  lg:w-[100px]"}  animate-[expandReverse_.5s_ease-in-out_forwards] hover:animate-[expand_.5s_ease-in-out_forwards]`} />
      
          </div> 
          <Fade offset={200} bottom>
          <div className={`absolute left-[33rem] ${textSide==="right" ? "lg:left-[35rem]" : "lg:left-0"} w-[9.5rem] lg:w-[20rem] mt-[2rem] flex flex-col items-center justify-center`}>
                  <h3 className='relative mt-[1rem] text-[#A395FF] text-[12px] lg:text-[20px]'>Pasul {stepNumber}</h3>
                 
                  <h3 className='relative  font-bold text-[13px] lg:text-[20px] w-[10rem] lg:w-[15rem] text-center leading-[1.3rem]'>{stepTitle}</h3>
                  <p className='mt-0 lg:mt-4 text-[11px] lg:text-[14px] text-justify'>
                    {description}
                    </p>
                  
          </div>
          </Fade>
        </div>    
    </div>
  )
}

export default Step