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
import { useState,useEffect } from "react";
import WelcomeLoading from "./Components/Loading/WelcomeLoading";


function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const [sliderFirstColor,setSliderFirstColor] = useState("white")
  const [sliderSecondColor,setSliderSecondColor] = useState("white")
  const [showLoadingScreen,setShowLoadingScreen]=useState(true)

  useEffect(() => {

    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
      console.log(scrollValue)
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
        <><Navbar showNavbar={scrollValue>20 } /> 
        <LeftSlider firstColored={sliderFirstColor} secondColored={sliderSecondColor} />
        <Hero />
        <WhyUs  />
        <Services />
        <Portofoliu />
        <MiniInfo />
        <Offers />
        <Faq />     
        <Steps />
        <Contact />
        <Footer />
        </>
}
    </div>
  );
}

export default App;
