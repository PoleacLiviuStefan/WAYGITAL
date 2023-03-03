import React from 'react'
import lineCreare from './lineCreare.svg'
import googleLogo from './GoogleLogo.svg'
import translateIcon from './googleTranslateLogo.svg'
import responsiveIcon from './responsiveIcon.svg'
const Services = () => {
  return (
    <div name="Servicii" className='flex flex-col bg-[#1A1A1A] items-center text-white  w-screen h-[70rem] lg:h-[65rem] '>
        <h2 className='text-[26px] lg:text-[56px]  font-extrabold font-outline-2    '>SERVICIILE <span className='text-transparent' > NOASTRE</span></h2>
        <div className='relative  lg:top-[8rem] flex flex-col items-left w-[55rem] '>
          <h3 className='text-[32px] leading-[35px] font-bold'>Creare Site <img className='w-[170px] mt-[-.5rem] ' src={lineCreare} /> de Prezentare</h3>
          <div className='flex lg:flex-row flex-col items-center   mt-[2rem]'>
            <div className='flex-col'>
              <div className='flex flex-col items-center justify-center w-[300px] lg:w-[400px] h-[170px] lg:h-[200px] rounded-[8px] bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <h3 className='flex flex-col items-center justify-center text-center font-extrabold  text-[20px] lg:text-[28px] '>100% <br/> <span className='text-transparent font-outline-2'>CUSTOMIZABIL</span></h3>
              </div>
              <div className='flex flex-col items-center justify-center  mt-[2rem] w-[300px] lg:w-[400px] h-[170px] lg:h-[200px] rounded-[8px]  bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <h3 className='flex flex-col items-center justify-center text-center font-extrabold  text-[20px] lg:text-[28px] '><span className=''>CREAREA SITE-ULUI</span>  <span className=' text-[14px] mt-[1rem] text-left px-[2rem] lg:px-[4rem]'>Folosim cele mai noi tehnologii
pentru realizarea unui site
complet in limbaje de programare</span></h3>
              </div>
            </div>
            <div className='flex flex-col items-center lg:ml-[2rem] mt-[2rem] lg:mt-0'>
              <div className='relative flex justify-between items-center px-[2rem] w-[300px] lg:w-[400px] h-[110px] rounded-[8px]  bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <img className='w-[64px]' src={googleLogo} />
                <h3 className='absolute left-[9rem] lg:left-[10rem] text-[16px] lg:text-[20px] font-extrabold text-center'>OPTIMIZARE SEO</h3>
                <span className='absolute left-[8rem] h-[80%] w-[1px] bg-white bg-opacity-[50%] ' />
              </div>
              <div className='relative flex justify-between items-center mt-[3rem] px-[2rem] w-[300px] lg:w-[400px] h-[110px] rounded-[8px]  bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <img className='w-[64px]' src={translateIcon} />
                <h3 className='absolute left-[9rem] lg:left-[10rem]  text-[16px] lg:text-[18px] font-extrabold text-center'>Traducere in mai <br /> multe limbi<br/>(RO / EN / FR / SP etc.)</h3>
                <span className='absolute left-[8rem] h-[80%] w-[1px] bg-white bg-opacity-[50%] ' />
              </div>
              <div className='relative flex justify-between items-center mt-[3rem] px-[2rem] w-[300px] lg:w-[400px] h-[110px] rounded-[8px]  bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <img className='w-[104px] ml-[-1rem]' src={responsiveIcon} />
                <h3 className='absolute left-[9rem] lg:left-[10rem] text-[20px] font-extrabold'>DESIGN RESPONSIVE</h3>
                <span className='absolute left-[8rem] h-[80%] w-[1px] bg-white bg-opacity-[50%] ' />
              </div>
            </div>
          </div>
        </div>
          
        </div>
  )
}

export default Services