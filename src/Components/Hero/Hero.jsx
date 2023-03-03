import React from 'react'
import logoText from './logoText.png'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='w-screen h-[40rem] lg:h-screen flex flex-col justify-center  items-center text-white bg-gradient-to-r from-[#6B34FF] to-[#B234FF] background-animate'>
            <img src={logoText} className=" w-[300px] 2xl:w-[1250px] xl:w-[1000px] lg:w-[700px] animate-[logoLoadingAnim_2s_ease-in-out_forwards] " />
            <div className="mt-[1rem] lg:mt-[3rem] flex justify-center text-[14px] lg:text-[24px] font-extrabold italic w-[24rem] lg:w-[40rem]">
                      <TypeAnimation
                sequence={[
                  2000,
                  'Te ajutam in digitalizarea ', // Types 'One'
                  2000,
                  'Te ajutam in extinderea ',
                  2000,
                  'Te ajutam in cresterea ',
                  
                  () => {
                        
                  }
                ]}
                
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                
              />
            
            propriei tale afaceri
            </div>
    </div>
  )
}

export default Hero