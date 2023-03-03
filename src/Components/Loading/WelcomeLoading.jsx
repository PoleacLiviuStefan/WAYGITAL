import React from 'react'
import { useEffect,useState } from 'react'
import img1 from './Images/Bineaivenit_3d.png'
import img2 from './Images/NoiSuntem_3d.png'
import img3 from './Images/logoText.png'
import Fade from 'react-reveal'
const WelcomeLoading = () => {
    const [showTextIndex,setShowTextIndex]=useState(0)
    const images=[img1,img2,img3]

    useEffect(() => {
        if (showTextIndex<3)
            {const timer = setInterval(() => {
                setShowTextIndex(prev=>prev+1)
               
                    
            }, 2000);
            return () => clearTimeout(timer);
        }
        }, []);

  return (
    <div className='absolute flex justify-center items-center bg-[#1A1A1A] w-screen h-screen '>
            <Fade left><img src={images[showTextIndex]} className={`${showTextIndex!=0 && "hidden"} w-[300px] lg:w-[900px]`} /></Fade>
            <Fade right><img src={images[showTextIndex]} className={`${showTextIndex!=1 && "hidden"} w-[300px] lg:w-[900px]`} /></Fade>
            <Fade bottom><img src={images[showTextIndex]} className={`${showTextIndex!=2 && "hidden"} animate-[showAnswerReverse_.5s_ease-in-out_forwards] w-[300px] 2xl:w-[1250px] xl:w-[1000px] lg:w-[700px]`} /></Fade>
    </div>
  )
}

export default WelcomeLoading