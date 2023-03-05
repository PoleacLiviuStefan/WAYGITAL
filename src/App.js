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

import WelcomeLoading from "./Components/Loading/WelcomeLoading";

import { Route, Routes } from "react-router-dom"
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
  const [scrollPercentage,setScrollPercentage]=useState(0)

  useEffect(() => {

    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
      let scroll = {
         x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
         y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
      };

       setScrollPercentage ((scroll.y / (document.documentElement.offsetHeight - window.innerHeight)) * 100);
      console.log(scrollPercentage)

      if(scrollValue>=2612 && scrollValue<=3480 || scrollValue>=4461 && scrollValue<=5476  )
          setSliderSecondColor("black")
        else
          setSliderSecondColor("white")
      if(scrollValue>=2894 && scrollValue<=3752 || scrollValue>=4720 && scrollValue<=5750   )
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
    <div className="bg-[#1A1A1A]">
       {
       showLoadingScreen
       ? <WelcomeLoading />
        :
        <><Navbar sliderPercentage={scrollPercentage} showNavbar={scrollValue>20 } /> 
        <LeftSlider firstColored={sliderFirstColor} secondColored={sliderSecondColor} />
        
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
