import React from 'react'
import { useEffect,useState } from 'react'
import img1 from './Images/Bineaivenit_3d.webp'
import img2 from './Images/NoiSuntem_3d.webp'
import img3 from './Images/logoText.webp'
import Fade from 'react-reveal'
const WelcomeLoading = () => {
    const [showTextIndex,setShowTextIndex]=useState(0)
    const images=[img1,img2,img3]
    const [activateAnim,setActivateAnim]=useState(-1)
    useEffect(() => {
        if (showTextIndex<3)
            {const timer = setInterval(() => {
                setShowTextIndex(prev=>prev+1)
               
                    
            }, 1500);
            const timerAnim = setInterval(() => {
              setActivateAnim(prev=>prev+1)
             
                  
          }, 1500);
            return () => (clearTimeout(timer),clearTimeout(timerAnim));
        }
        }, []);

  return (
    <div className='absolute flex justify-center items-center bg-[#1A1A1A] w-screen h-screen '>
            <Fade left><img src={images[showTextIndex]} alt className={`${showTextIndex!==0 && "hidden"} ${activateAnim===0 && "animate-[disappear_.5s_ease-in-out_forwards]"} w-[300px] lg:w-[900px]`} /></Fade>
            <Fade right><img src={images[showTextIndex]} alt className={`${showTextIndex!==1 && "hidden"} ${activateAnim===1 && "animate-[disappear_.5s_ease-in-out_forwards]"} w-[300px] lg:w-[900px]`} /></Fade>
            <Fade bottom><img src={images[showTextIndex]} alt className={`${showTextIndex!==2 && "hidden"} ${activateAnim===2 && "animate-[disappear_.5s_ease-in-out_forwards]"} animate-[showAnswerReverse_.5s_ease-in-out_forwards] w-[300px] 2xl:w-[1250px] xl:w-[1000px] lg:w-[700px]`} /></Fade>
    </div>
  )
}

export default WelcomeLoading