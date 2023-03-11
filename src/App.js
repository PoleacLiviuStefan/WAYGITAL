import Contact from "./Components/Contact/Contact";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import LeftSlider from "./Components/LeftSlider/LeftSlider";
import MiniInfo from "./Components/MiniInfo/MiniInfo";
import Navbar from "./Components/Navbar/Navbar";
import Offers from "./Components/Offers/Offers";
import Portofoliu from "./Components/Portofoliu/Portofoliu";
import Services from "./Components/Services/Services";
import Steps from "./Components/Steps/Steps";
import WhyUs from "./Components/WhyUs/WhyUs";
import { useState,useEffect,useRef } from "react";
import { motion, useScroll,useTransform } from "framer-motion"
import WelcomeLoading from "./Components/Loading/WelcomeLoading";

import { Route, Routes } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import PoliticaDeConfidentialitate from "./Components/Conditions/PoliticaDeConfidentialitate";
import PoliticaCookie from "./Components/Conditions/PoliticaCookie";
import TermeniSiConditii from "./Components/Conditions/TermeniSiConditii";

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const [sliderFirstColor,setSliderFirstColor] = useState("white")
  const [sliderSecondColor,setSliderSecondColor] = useState("white")
  const [showLoadingScreen,setShowLoadingScreen]=useState(true)
  const windowHeight = useRef(window.innerHeight);
  let maxY = window.scrollMaxY;
  const { scrollYProgress } = useScroll();
  const [scrollPercentage,setScrollPercentage]=useState(0)
  const location = useLocation();

  useEffect(() => {
    console.log(scrollYProgress.current)
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);

      
     
      if(scrollYProgress.current>=0.33 && scrollYProgress.current<=0.43 ||  scrollYProgress.current>=0.73 && scrollYProgress.current<=0.87)
      setSliderFirstColor("black")
        else
          
          setSliderFirstColor("white")
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollValue]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingScreen(false)
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={` ${showLoadingScreen && "w-screen h-screen "} ${ (scrollYProgress.current>=0.30 && scrollYProgress.current<=0.45 ||  scrollYProgress.current>=0.57 && scrollYProgress.current<=0.75 ) ? "animate-[animateBackgroundWhite_.3s_ease-in-out_forwards]" :"animate-[animateBackgroundBlack_.3s_ease-in-out_forwards]"}  ${ (scrollYProgress.current>=0.33 && scrollYProgress.current<=0.43 ||  scrollYProgress.current>=0.73 && scrollYProgress.current<=0.87 ) ? "lg:animate-[animateBackgroundWhite_.3s_ease-in-out_forwards]" :"lg:animate-[animateBackgroundBlack_.3s_ease-in-out_forwards]"}`}>
       {
       showLoadingScreen
       ? <WelcomeLoading />
        :
        <><Navbar sliderPercentage={scrollPercentage} showNavbar={scrollValue>20 } /> 
        <LeftSlider firstColored={(location.pathname!="/politica-de-confidentialitate" && location.pathname!="/termeni-si-conditii" && location.pathname!="/politica-cookie" ) ? sliderFirstColor : "black"} secondColored={(location.pathname!="/politica-de-confidentialitate" && location.pathname!="/termeni-si-conditii" && location.pathname!="/politica-cookie" ) ? sliderSecondColor : "black"} />
        
          <Routes>
            <Route path="/" element={<>
              <main>
                <Hero />
                <WhyUs  />
                <Services />
                <MiniInfo />
                <Offers />
                <Portofoliu />
                <Faq />     
                <Steps />
                <Contact startAnimate={scrollValue>5916} />
              </main>
          </>} />
          <Route path="/politica-de-confidentialitate" element={<PoliticaDeConfidentialitate />}  />
          <Route path="/politica-cookie" element={<PoliticaCookie />}  />
          <Route path="/termeni-si-conditii" element={<TermeniSiConditii />}  />
          </Routes>
        
        <Footer />
        </>
}
    </div>
  );
}

export default App;
