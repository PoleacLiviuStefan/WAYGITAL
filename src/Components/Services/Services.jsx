import React from 'react'
import lineCreare from './lineCreare.svg'
import googleLogo from './GoogleLogo.svg'
import translateIcon from './googleTranslateLogo.svg'
import responsiveIcon from './responsiveIcon.svg'
import Fade from 'react-reveal/Fade';
import MiniInfo from '../MiniInfo/MiniInfo'


const Services = () => {
  return (
    <div name="Servicii" className='flex flex-col bg-transparent items-center justify-center text-white  w-screen h-full lg:mt-[20rem] lg:mb-[5rem] py-[5rem] lg:h-screen  font-kanit'>
      <Fade>
        <h2 className='text-[24px] lg:text-[56px]  font-extrabold font-outline-1 lg:font-outline-2    '>SERVICIILE <span className='text-transparent' > NOASTRE</span></h2>
      </Fade>
      
        <div className='relative  lg:top-[8rem] flex flex-col lg:items-start items-center w-[55rem] font-montSerrat'>
        <Fade bottom>
          <h3 className='text-[18px] lg:text-[32px] lg:leading-[35px] font-bold mt-[2rem] ml-[-9rem] lg:ml-0 lg:mt-0'>Creare Site <img className=' w-[110px] lg:w-[190px] mt-[-.5rem] ' src={lineCreare} alt /> de Prezentare</h3>
        </Fade>
          <div className='flex lg:flex-row flex-col items-center  mt-[.5rem] lg:mt-[2rem]'>
            <div className='flex-col'>
        <Fade left>
              <div className='flex flex-col items-center justify-center  w-[300px] lg:w-[400px] h-[170px] lg:h-[200px] rounded-[8px]  bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <h3 className='flex flex-col items-center justify-center text-center font-extrabold  text-[18px] lg:text-[28px] '><span className=''>CREAREA SITE-ULUI</span>  <span className=' text-[13px] mt-[1rem] text-left px-[2rem] lg:px-[4rem]'>Folosim cele mai noi tehnologii
pentru realizarea unui site
complet</span></h3>
              </div>
        
              <div className='flex flex-col items-center justify-center mt-[2rem]  w-[300px] lg:w-[400px] h-[170px] lg:h-[200px] rounded-[8px] bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <h3 className='flex flex-col items-center justify-center text-center font-extrabold  text-[18px] lg:text-[28px] '>100% <br/> <span className='text-transparent font-outline-1 lg:font-outline-2 font-sans'>CUSTOMIZABIL</span></h3>
              </div>
        </Fade>
            </div>
          <Fade right>
            <div className='flex flex-col items-center lg:ml-[2rem] mt-[2rem] lg:mt-0'>
              <div className='relative flex justify-between items-center px-[2rem] w-[300px] lg:w-[400px] h-[110px] rounded-[8px]  bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <img className='w-[64px]' src={googleLogo} alt= "Optimizare SEO Waygital"/>
                <h3 className='absolute left-[9rem] lg:left-[10rem] text-[14px] lg:text-[20px] font-extrabold text-center mr-2'>OPTIMIZARE SEO</h3>
                <span className='absolute left-[8rem] h-[80%] w-[1px] bg-white bg-opacity-[50%] ' />
              </div>
              <div className='relative flex justify-between items-center mt-[3rem] px-[2rem] w-[300px] lg:w-[400px] h-[110px] rounded-[8px]  bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <img className='w-[104px] ml-[-1.2rem]' src={responsiveIcon} alt="design responsive" />
                <h3 className='absolute left-[9rem] lg:left-[9rem] text-[14px] lg:text-[20px] text-center font-extrabold mr-2'>DESIGN RESPONSIVE</h3>
                <span className='absolute left-[8rem] h-[80%] w-[1px] bg-white bg-opacity-[50%] ' />
              </div>
              <div className='relative flex justify-between items-center mt-[3rem] px-[2rem] w-[300px] lg:w-[400px] h-[110px] rounded-[8px]  bg-white bg-opacity-[4%] shadow-[0px_0px_15px_14px_rgba(0,0,0,0.30)] ' >
                <img className='w-[64px]' src={translateIcon} alt />
                <h3 className='absolute left-[9rem] lg:left-[10rem]  text-[14px] lg:text-[18px] font-extrabold text-center mr-2'>Traducere in mai <br /> multe limbi<br/>(RO / EN / FR / SP etc.)</h3>
                <span className='absolute left-[8rem] h-[80%] w-[1px] bg-white bg-opacity-[50%] ' />
              </div>
     
            </div>
          </Fade>
          </div>
        </div>
          <div  className='relative my-[15rem] w-screen'>
          <MiniInfo />
          </div>
        </div>
  )
}

export default Services