import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import OfferCard from './OfferCard'
import designIcon from './designicon.svg'
import developmentIcom from './developmentIcon.svg'
import registerIcon from './registericon.svg'
import paymentIcon from './paymentIcon.svg'
import messageIcon from './messageIcon.png'
import { useState } from 'react'

import {HiChevronRight} from 'react-icons/hi'

const Offers = () => {
  const [selectedm,setSelected]=useState([])
  const [totalPrice,setTotalPrice]=useState(0)
  const [optionSections,setOptionSection]=useState(0)
  return (
    <div className='relative flex justify-center w-full h-[84rem] lg:h-[50rem] bg-[#F2F2F7] '>
            <div className='relative items-center  flex lg:flex-row flex-col justify-center lg:justify-between w-[80%] lg:w-[75rem]'>
            
                <div className='relative w-[300px]  lg:w-[350px] h-[368px] lg:h-[430px] rounded-[16px] bg-white shadow-xl  '>
                    
                <div className='absolute top-[-3.5rem] right-[-1.5rem] flex justify-center items-center   w-[180px] h-[85px] bg-[#CFD3F0] rounded-[12px]'>
                    <h3 className='font-extrabold mt-[-1rem] text-[#4E568F]'>OFERTA LIMITATA</h3> </div>
                   <div className='bg-white flex flex-col items-center absolute  top-0 left-0 w-full h-full ' >
                    <h3 className='font-extrabold text-black text-[28px] py-[1.5rem]'> Pret <span className='font-outline-black-1 text-transparent'>Estimat</span></h3>
                    <h3 className='text-[34px] font-bold'>{totalPrice} RON</h3>
                    <ul className='relative mt-[3rem] flex flex-col items-left w-[90%]'>
                      {selectedm.map((obiect)=>{
                        return <li className='flex mt-4 text-[20px] font-bold'><span className='mt-1 text-green-400 text-[24px] mr-2'><BsFillPatchCheckFill /></span>
                        {
                          obiect===0 ?
                            "Design complet"
                            :obiect===1 ?
                            "Dezvoltarea site-iului" :
                            "Sistem de inregistrare / logare"
                          
                        }
                        </li>
                      })}
                    </ul>
                    </div>
                </div>
                <div className='relative flex flex-col lg:flex-row items-center h-[43rem] lg:h-[40rem] mt-[2rem] lg:mt-0 lg:ml-[2rem] w-full lg:w-[57rem] overflow-x-hidden overflow-y-scroll lg:overflow-hidden '>
                     <span onClick={()=>setOptionSection(0)} className='absolute hidden lg:inline z-20 rotate-[180deg]  left-[-2rem] text-[128px] cursor-pointer' ><HiChevronRight /></span>
                    <span onClick={()=>setOptionSection(1)} className='absolute hidden lg:inline z-20  right-[-2rem] text-[128px] cursor-pointer' ><HiChevronRight /></span>
                  
                    <div className={`flex lg:flex-row flex-col items-center lg:justify-between  w-[90%] ${optionSections!==0 && "lg:hidden"} `}>
                    <div onClick={()=>{if(!selectedm.includes(0))
                    {setSelected(oldarray =>[...oldarray,0])
                      setTotalPrice(prev=>prev+=400)
                    }
                      else 

                   {   setSelected(selectedm.filter(optiune=> optiune!==0))
                       setTotalPrice(prev=>prev-=400)
                  }
                      } }>
                        
                        <OfferCard  title="Design complet" iconImg={designIcon}  /></div>
                    <div onClick={()=>{if(!selectedm.includes(1))
                    {
                        setSelected(oldarray =>[...oldarray,1]) 
                        setTotalPrice(prev=>prev+=600)
                    }

                      else 
                    {   setSelected(selectedm.filter(optiune=> optiune!==1))
                        setTotalPrice(prev=>prev-=600)
                    }
                      
                      } }>
                        
                         <OfferCard title="Dezvoltarea site-ului" iconImg={developmentIcom} /></div>
                    <div onClick={()=>{if(!selectedm.includes(2)){
                        setSelected(oldarray =>[...oldarray,2]) 
                        setTotalPrice(prev=>prev+=300)
                    }
                      else 
                        {setSelected(selectedm.filter(optiune=> optiune!==2))
                        setTotalPrice(prev=>prev-=300)
                        }
                      } }>
                      
                      <OfferCard title="Sistem de inregistrare / logare" iconImg={registerIcon}  /></div>
                    </div>
                    <div className={`flex lg:flex-row flex-col items-center lg:justify-between w-[90%] ${optionSections!==1 && "lg:hidden"} `}>
                    <div onClick={()=>{if(!selectedm.includes(3))
                    {   setSelected(oldarray =>[...oldarray,3]) 
                        setTotalPrice(prev=>prev-=500)
                    }
                      else 
                    {   setSelected(selectedm.filter(optiune=> optiune!==3))
                        setTotalPrice(prev=>prev+=500)
                      }
                    } }
                    ><OfferCard title="Sistem de plati" iconImg={paymentIcon}  /></div>
                    <div onClick={()=>{if(!selectedm.includes(4))
                    {   setSelected(oldarray =>[...oldarray,4]) 
                        setTotalPrice(prev=>prev-=600) 
                    }
                      else 
                        setSelected(selectedm.filter(optiune=> optiune!==4))
                        setTotalPrice(prev=>prev+=600)  
                      } }>
                      <OfferCard title="Optimizare SEO (6 luni)" iconImg={developmentIcom} /></div>
                    <div onClick={()=>{if(!selectedm.includes(5))
                        {    setSelected(oldarray =>[...oldarray,5])
                             setTotalPrice(prev=>prev-=300)
                        }
                           else 
                        {    setSelected(selectedm.filter(optiune=> optiune!==2))
                             setTotalPrice(prev=>prev+=300)
                        }
                    } }>
                       <OfferCard title="Mesaje directe de pe site" iconImg={messageIcon}  /></div>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Offers