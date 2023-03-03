import React from 'react'
import Question from './Question'

const Faq = () => {
  return (
    <div className='relative flex flex-col items-center w-full h-[60rem] bg-[#1A1A1A]'>
        <h2 className='relative text-[26px] lg:text-[56px] mt-[5rem] font-extrabold font-outline-2    '>INTREBARI <span className='text-white' > FRECVENTE</span></h2>
    
              
              <div className='w-[80%] lg:w-full h-[40rem] flex flex-col items-center justify-center '>
                    <Question question="Cat timp dureaza crearea unui site ?" answer="Cat timp dureaza crearea unui site ?" />
                    <Question question="Prin ce metode este creat un site?" answer="Prin ce metode este creat un site?" />
                    <Question question="Se mai pot face modificari dupa finalizarea site-ului?" answer="Cat timp dureaza crearea unui site ?" />
                    <Question question="Cat timp dureaza crearea unui site ?" answer="Cat timp dureaza crearea unui site ?" />
                    <Question question="Cat timp dureaza crearea unui site ?" answer="Cat timp dureaza crearea unui site ?" />
                    
              </div>


        
    </div>
  )
}

export default Faq