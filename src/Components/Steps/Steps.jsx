import React, { useState,useRef } from 'react'
import Step from './Step'
import planificationIcon from './planificationIcon.svg'
import designIcon from './designIcon.svg'
import developmentIcon from './developmentIcon.svg'
import launchIcon from './launchIcon.svg'
import improvementsIcon from './improvementsIcon.svg'
import seoIcon from './seoIcon.png'

import { motion, useScroll} from "framer-motion"


import Fade from 'react-reveal/Fade';
const Steps = () => {
    const divHeight=useRef(null)
    const { scrollYProgress } =  useScroll({
        target: divHeight,
        offset: ["start start","end end"]
    });


    const [crossed,setCrossed]=useState(0);
    scrollYProgress.onChange(()=>{

        if(scrollYProgress.current>0.95)
            setCrossed(5)
        else
            if(scrollYProgress.current>0.74)
              setCrossed(4)
        else
             if(scrollYProgress.current>0.52)
             setCrossed(3)
        else
            if(scrollYProgress.current>0.3)
                setCrossed(2)
        else
            if(scrollYProgress.current>0.1)
                setCrossed(1);
        else
            setCrossed(0)
                        
        
    })
    
    const textDescription=['In prima etapa stabilim "planul de atac" prin construirea unei imagini clare a rezultatutui final. Aceasta este etapa in care imi descrieti ceea ce doriti cu ajutorul nostru de specialitate .','Etapa creativa a acestui proces . Construirea unui design complet de la zero . Pe parcursul construirii design-ului va cer mai multe pareri , astfel incat rezultatul final sa fie unul placut .' , 'Etapa de dezvoltare este cea in care transformam ideea si design-ul proiectului intr-un website functional si pregatit pentru etapa de testare . Aceasta este etapa care dureaza cel mai mult in functie de complexitatea proiectului . Pentru aceasta etapa folosim cele mai noi tehnologii pentru o performanta maxima.',"Aceasta este etapa in care ne asiguram ca totul functioneaza perfect si in care lansam site-ul online , astfel incat sa apara in randul cautarilor in motoarele de cautare. Practic aceasta este etapa in care avem un produs final , gata de utilizare .", 'In general un utilizator ar dori sa vada informatii de actualitate , astfel incat noi actualizam informatiile aflate pe site la cererea clientului . Pentru acest serviciu primele 3 luni le oferim GRATUIT .', 'Fara o strategie SEO site-ul nu poate concura sa fie prezent pe primele pozitii in randul cautarilor . Etapa de optimizare pentru motoarele de cautare ( SEO ) este una de lunga durata (in functie de concurenta intre 6-8 luni) .']
  return (
    <div   name="Etape De Lucru" className='relative flex flex-col items-center w-full h-full pb-[30rem] pt-[20rem] lg:pt-[40rem]  '>
  
         <Fade>
        <h2 className='relative text-[24px] lg:text-[56px] mb-[5rem]  font-extrabold font-outline-black-2 text-transparent font-roboto   '>PASII DE <span className='text-black' > LUCRU</span></h2>
        </Fade>
        <div   className='relative ml-[-10rem] lg:ml-0 mt-[0rem] h-[135rem] flex  flex-col  items-center  justify-center w-[65rem]  '>
     
            <div ref={divHeight}   className='absolute top-[5rem] lg:top-[5rem] z-20 w-[55rem] h-[137rem] justify-between flex flex-col '>
              
                
    
                    <div >  <Step   iconImg={planificationIcon} stepNumber="1" stepTitle="Planificarea Proiectului" textSide="left" description={textDescription[0]} cross={crossed>=0}/></div>
                
                
                    <div > <Step  iconImg={designIcon} stepNumber="2" stepTitle="Crearea Design-ului" textSide="right" description={textDescription[1]} cross={crossed>=1}/></div>
                
                    <div >  <Step   iconImg={developmentIcon} stepNumber="3" stepTitle="Dezvoltare " textSide="left" description={textDescription[2]} cross={crossed>=2}/></div>
                    <div ><Step  iconImg={launchIcon} stepNumber="4" stepTitle="Testare si Lansare" textSide="right" description={textDescription[3]} cross={crossed>=3}/> </div>
                    <div ><Step  iconImg={improvementsIcon} stepNumber="5" stepTitle="Schimbari Periodice" textSide="left" description={textDescription[4]} cross={crossed>=4}/> </div>
                    <div ><Step  iconImg={seoIcon} stepNumber="6" stepTitle="Optimizare pentru Motoarele de Cautare" textSide="right" description={textDescription[5]} cross={crossed>=5}/> </div>
              
            </div>
            
            <div className='relative w-[10px] h-[105rem] bg-gray-300   rounded-[8px]'>
            <motion.div  style={{ scaleY: scrollYProgress }} className={`absolute  origin-top w-[10px]  bg-gradient-to-b from-purple-400 to-purple-600 h-full  rounded-[8px] `} />
            </div>
        </div>
       

    </div>
  )
}

export default Steps