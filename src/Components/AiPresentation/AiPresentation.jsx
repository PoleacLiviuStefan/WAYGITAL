import React from "react";
import Aigif from './face-id-glitch.gif'
const AiPresentation = () => {
  return (
    <div
      name="AI"
      className="flex flex-col bg-transparent items-center justify-center text-white  w-screen h-full lg:mt-[20rem] lg:mb-[5rem] py-[5rem] lg:h-screen  font-kanit "
    >

<h2 className='text-[24px] lg:text-[56px]  font-extrabold    text-center '>AUTOMATIZARI CU AI <br /> ( INTELIGENTA ARTIFICIALA )</h2>
      <div className="relative  lg:top-[8rem] flex flex-col lg:items-start items-center w-[55rem] font-montSerrat">
       <img src={Aigif} />
      </div>
    </div>
  );
};

export default AiPresentation;
