import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import OfferCard from './OfferCard'
import designIcon from './designicon.svg'
import designIconSelected from './designiconSelected.svg'
import developmentIcon from './developmentIcon.svg'
import developmentIconSelected from './developmentIconSelected.svg'
import registerIcon from './registericon.svg'
import registerIconSelected from './registericonSelected.svg'
import paymentIcon from './paymentIcon.svg'
import paymentIconSelected from './paymentIconSelected.svg'
import seoIcon from './seoIcon.png'
import seoIconSelected from './seoIconSelected.png'
import messageIcon from './messageIcon.png'
import messageIconSelected from './messageIconSelected.png'

import { useState } from 'react'
import Fade from 'react-reveal/Fade';

import {HiChevronRight} from 'react-icons/hi'

const Offers = () => {
  const [selectedm,setSelected]=useState([])
  const [totalPrice,setTotalPrice]=useState(0)
  const [optionSections,setOptionSection]=useState(0)
  return (
    <Fade>
    <div className='relative flex justify-center w-screen h-full lg:h-screen  lg:py-[25rem]  '>

            <div className='relative  items-center  flex lg:flex-row flex-col justify-center lg:justify-between w-[80%] lg:w-[75rem]'>

                <div className='relative w-[300px]  lg:w-[350px] h-[368px] lg:h-[430px] rounded-[16px] bg-white shadow-xl  '>
                    
                <div className='absolute top-[-3.5rem] right-[-1.5rem] flex justify-center items-center   w-[180px] h-[85px] bg-[#CFD3F0] rounded-[12px]'>
                    <h3 className='font-extrabold mt-[-1rem] text-[#4E568F]'>OFERTA LIMITATA</h3> </div>
                   <div className='bg-white flex flex-col items-center absolute  top-0 left-0 w-full h-full ' >
                    <h3 className='font-extrabold text-black text-[22px] lg:text-[28px] py-[.5rem] lg:py-[1.5rem]'> Pret <span className='font-outline-black-1 text-transparent'>Estimat</span></h3>
                    <h3 className='top-2 text-[26px] lg:text-[34px] font-bold'>{totalPrice} RON</h3>
                    <ul className='relative  flex flex-col items-left w-[90%] oveflow-hidden'>
                      {selectedm.map((obiect)=>{
                        return <li className='flex mt-2 lg:mt-4 text-[15px] lg:text-[18px] font-bold'><span className='lg:mt-1 text-green-400 text-[24px] mr-2'><BsFillPatchCheckFill /></span>
                        {
                          obiect===0 ?
                            "Design complet"
                            :obiect===1 ?
                            "Dezvoltarea site-iului" 
                            :obiect===2 ?
                            "Sistem de inregistrare / logare"
                            :obiect===3 ?
                            "Sistem de plati"
                            :obiect===4 ?
                            "Optimizare SEO ( 6 luni )"
                            : "Mesaje directe de pe site"
                          
                        }
                        </li>
                      })}
                    </ul>
                    </div>
                </div>
                <div className='relative  flex flex-col lg:flex-row items-center lg:justify-center  h-[43rem]  lg:h-[40rem] mt-[2rem] lg:mt-0  w-full lg:w-[54rem]  overflow-y-scroll overflow-x-hidden lg:overflow-hidden '>
                 
                     <span onClick={()=>setOptionSection(0)} className='absolute hidden lg:inline z-20  left-[-2rem] rotate-[180deg]   text-[128px] cursor-pointer' ><HiChevronRight /></span>
                    <span onClick={()=>setOptionSection(1)} className='absolute hidden lg:inline z-20   right-[-2rem] text-[128px] cursor-pointer' ><HiChevronRight /></span>
                  
                    <div className={`flex lg:flex-row flex-col items-center lg:justify-between  w-[85%] ${optionSections!==0 && "lg:hidden"} `}>
                    <div onClick={()=>{if(!selectedm.includes(0))
                    {setSelected(oldarray =>[...oldarray,0])
                      setTotalPrice(prev=>prev+=400)
                    }
                      else 

                   {   setSelected(selectedm.filter(optiune=> optiune!==0))
                       setTotalPrice(prev=>prev-=400)
                  }
                      } } className="w-[220px] h-[215px] lg:h-[306px] my-6">
                        
                        <OfferCard  title="Design complet" iconImg={selectedm.includes(0) ?designIconSelected:designIcon}  /></div>
                    <div onClick={()=>{if(!selectedm.includes(1))
                    {
                        setSelected(oldarray =>[...oldarray,1]) 
                        setTotalPrice(prev=>prev+=600)
                    }

                      else 
                    {   setSelected(selectedm.filter(optiune=> optiune!==1))
                        setTotalPrice(prev=>prev-=600)
                    }
                      
                      } } className="w-[220px] h-[215px] lg:h-[306px] my-6">
                         
                         <OfferCard title="Dezvoltarea site-ului" iconImg={selectedm.includes(1) ?developmentIconSelected:developmentIcon} /></div>
                    <div onClick={()=>{if(!selectedm.includes(2)){
                        setSelected(oldarray =>[...oldarray,2]) 
                        setTotalPrice(prev=>prev+=300)
                    }
                      else 
                        {setSelected(selectedm.filter(optiune=> optiune!==2))
                        setTotalPrice(prev=>prev-=300)
                        }
                      } } className="w-[220px] h-[215px] lg:h-[306px] my-6">
                      
                      <OfferCard title="Sistem de inregistrare / logare" iconImg={selectedm.includes(2) ? registerIconSelected:registerIcon}  /></div>
                    </div>
                    <div className={`flex lg:flex-row flex-col items-center lg:justify-between w-[85%] ${optionSections!==1 && "lg:hidden"} `}>
                    <div onClick={()=>{if(!selectedm.includes(3))
                    {   setSelected(oldarray =>[...oldarray,3]) 
                        setTotalPrice(prev=>prev+=500)
                    }
                      else 
                    {   setSelected(selectedm.filter(optiune=> optiune!==3))
                        setTotalPrice(prev=>prev-=500)
                      }
                    }  }
                    className="w-[220px] h-[215px] lg:h-[306px] my-6"><OfferCard title="Sistem de plati" iconImg={selectedm.includes(3) ? paymentIconSelected:paymentIcon}  /></div>
                <div onClick={()=>{if(!selectedm.includes(4))
                    {   setSelected(oldarray =>[...oldarray,4]) 
                        setTotalPrice(prev=>prev+=600)
                    }
                      else 
                    {   setSelected(selectedm.filter(optiune=> optiune!==4))
                        setTotalPrice(prev=>prev-=600)
                      }
                    }  }
                    className="w-[220px] h-[200px] lg:h-[306px] my-6"><OfferCard title="Optimizare SEO (6 luni)" iconImg={selectedm.includes(4) ? seoIconSelected:seoIcon}  /></div>
                    <div onClick={()=>{if(!selectedm.includes(5))
                        {    setSelected(oldarray =>[...oldarray,5])
                             setTotalPrice(prev=>prev+=300)
                        }
                           else 
                        {    setSelected(selectedm.filter(optiune=> optiune!==5))
                             setTotalPrice(prev=>prev-=300)
                        }
                    } } className="w-[220px] h-[215px] z-30 lg:h-[306px] my-6">
                       <OfferCard title="Mesaje directe de pe site" iconImg={selectedm.includes(5)? messageIconSelected:messageIcon}  />
                       </div>
                    </div>
                    
                </div>
                <div className='h-[15rem] lg:hidden w-full '>
                <div className='absolute lg:hidden bottom-[15rem] z-20   bg-gradient-to-t from-[#F2F2F7] to-transparent bg-opacity-[50%] h-[10rem] w-full   ' />
        </div> 
            </div>
    </div>
    </Fade>
  )
}

export default Offers