import React from 'react'
import Question from './Question'
import Fade from 'react-reveal/Fade';

const Faq = () => {
  return (
    <div name="Intrebari Frecvente" className='relative z-30 flex flex-col items-center w-full h-full lg:h-screen  py-[20rem]  bg-transparent'>
  
              
              <div className='w-[80%] lg:w-full h-full py-[3rem] lg:py-[7rem] flex flex-col items-center lg:justify-center '>
              <Fade>
        <h2 className='relative text-[24px] lg:text-[56px] mb-[5rem] w-[80%] font-extrabold font-outline-1 lg:font-outline-2 text-center  font-kanit '>INTREBARI <span className='text-white' > FRECVENTE</span></h2>
      </Fade>
                <Fade bottom>
                    <Question question="Cat timp dureaza crearea unui site ?" answer="Un site dureaza in functi de dificultate intre 5-9 zile strict pentru site-uri de prezentare. Pentru aflarea duratei realizarii unui site mai complex nu ezitati sa ne contactati. " />
                </Fade>
                <Fade bottom>
                    <Question question="Prin ce metode este creat un site?" answer="Un site este creat 100% in cod cu tehnologii moderne , astfel incat utilizatorul sa se bucure de o experienta placuta datorita unui design si o performanta care ii intrec asteptarile." />
                </Fade>
                <Fade bottom>
                    <Question question="Se mai pot face modificari dupa finalizarea site-ului?" answer="In functie de numarul de modificari necesare evaluam pretul lunar. Acest pret se stabileste dupa prima luna pentru a vedea de cate ori este necesara interventia noastra" />
                </Fade>
                <Fade bottom>
                    <Question question="Mai exista si alte costuri suplimentare pentru postarea site-ului?" answer="Costul pentru lansarea site-ului online depinde de pachetul ales de la o firma terta pentru certificatul SSL , host si domeniu . La cerere , ne putem ocupa si de partea aceasta fara costuri suplimentare. " />
                </Fade>     
                    
              </div>


        
    </div>
  )
}

export default Faq