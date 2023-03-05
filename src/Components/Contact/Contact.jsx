import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiFacebook,CiTwitter} from 'react-icons/ci'
import underLine from './underLine.svg'

const Contact = ({startAnimate}) => {
  return (
    <div name="Contact" className='relative flex justify-center items-center bg-[#1A1A1A] w-full h-[90rem] lg:h-[60rem]'>
        <div className='relative flex lg:flex-row flex-col items-center lg:items-start justify-center w-[90%] '>
        <div className='flex flex-col w-[18rem] lg:ml-[8rem] text-white  h-full lg:hidden'>
                <h3 className='font-bold text-[42px]  lg:text-[82px] text-white leading-[32px] lg:leading-[80px] '>HAIDE SA <br/> DISCUTAM   <img className='lg:mt-[-.9rem] w-[13.5rem] lg:w-[27rem]' src={underLine} /></h3>
                <p className='w-[18rem] lg:w-[25rem] mt-[3rem] '>Contacteaza-ne oricand si iti raspundem in 
                    maxim 8 ore sau ne poti apela telefonic
                    oricand intre 8:00 - 23:00<br/>
                    <span className='font-bold'>Lasa-ne sa iti transformam ideea in realitate</span></p>
                    <div className='flex flex-col lg:items-center '>
                        <div className='flex lg:justify-center text-black text-[28px] lg:text-[52px] mt-[4rem] lg:mt-[9rem] w-[25rem]'> 
                            <div className='flex justify-center items-center w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] rounded-[16px] bg-white shadow-lg cursor-pointer'><AiOutlineInstagram /> </div>
                            <div className='flex justify-center items-center w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] mx-6 rounded-[16px] bg-white shadow-lg cursor-pointer'><CiFacebook /></div>
                            <div className='flex justify-center items-center w-[50px] lg:w-[70px] h-[50px] lg:h-[70px]  rounded-[16px] bg-white shadow-lg cursor-pointer'><CiTwitter /></div>
                        </div>
                        <div className='mt-[1.5rem] text-white'>
                            <h3>Email : info@waygital.com</h3>
                            <a href='tel:+40-753-616-640'> Telefon : 0753616640</a>
                        </div>
                    </div>
            </div>
            <form onSubmit={e=>e.preventDefault} className='flex flex-col mr-[2rem] w-[16rem] mt-[3rem] lg:mt-0 lg:w-[30rem] h-[35rem] justify-between placeholder-gray-400 text-white'>
                <div className='flex flex-col  items-start h-[3rem] '>
                    <input type="text" className='w-full bg-transparent border-b-[1px] outline-none border-white  '  placeholder='Numele Complet' required />
                    
                </div>
                <div className='flex flex-col items-start h-[3rem] '>    <input type="email" className='w-full h-[2rem] bg-transparent border-b-[1px] outline-none border-white  '  placeholder='Email' required /></div>
                <div className='flex flex-col items-start h-[3rem] '>  <input minLength={10} type="text" className='w-full h-[2rem] bg-transparent border-b-[1px] outline-none border-white  '  placeholder='Telefon' required /></div>
                <div className='flex flex-col items-start h-[5rem] '> <textarea type="text" className='w-full h-full text-ellipsis  bg-transparent border-b-[1px] outline-none border-white  '  placeholder='Spune-ne mai mult despre cum ai vrea sa arate site-ul tau  ' required /></div>
                <button className='relative  w-full h-[3.5rem] text-[20px] text-[#8C61FF] font-bold border-[2px] bg-transparent border-[#8C61FF] rounded-[16px] shadow-[0px_0px_49px_5px_rgba(140,97,255,0.27)] '>
                    Trimite
                </button>
            </form>
            <div className='flex flex-col lg:ml-[8rem] text-white  h-full hidden lg:block'>
                <h3 className='font-bold text-[42px]  lg:text-[82px] text-white leading-[32px] lg:leading-[80px] w-[13.5rem] lg:w-[27rem] '>HAIDE SA <br/> DISCUTAM   <img className={`lg:mt-[-.9rem] ${startAnimate && "animate-[slideUnderLine_1s_ease-in-out_forwards]"}`} src={underLine} /></h3>
                <p className='w-[18rem] lg:w-[25rem] mt-[3rem] '>Contacteaza-ne oricand si iti raspundem in 
                    maxim 8 ore sau ne poti apela telefonic
                    oricand intre 8:00 - 23:00<br/>
                    <span className='font-bold'>Lasa-ne sa iti transformam ideea in realitate</span></p>
                    <div className='flex flex-col lg:items-center '>
                        <div className='flex lg:justify-center text-black text-[52px] mt-[4rem] lg:mt-[9rem] w-[25rem]'> 
                            <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[16px] bg-white shadow-lg cursor-pointer'><AiOutlineInstagram /> </div>
                            <div className='flex justify-center items-center w-[70px] h-[70px] mx-6 rounded-[16px] bg-white shadow-lg cursor-pointer'><CiFacebook /></div>
                            <div className='flex justify-center items-center w-[70px] h-[70px]  rounded-[16px] bg-white shadow-lg cursor-pointer'><CiTwitter /></div>
                        </div>
                        <div className='mt-[1.5rem] text-white'>
                            <h3>Email : info@waygital.com</h3>
                            <a href='tel:+40-753-616-640'> Telefon : 0753616640</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contact