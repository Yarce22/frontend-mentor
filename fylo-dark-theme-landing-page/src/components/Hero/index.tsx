import React, { useState, useEffect } from 'react';
import { Button } from "../Button";
import IntroImg from "public/images/illustration-intro.png";
import PathMobile from "public/images/bg-curvy-mobile.svg";
import PathDesktop from "public/images/bg-curvy-desktop.svg";

const Hero: React.FC = () => {
    const [position, setPosition] = useState<string>('0px');
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener('resize', () => setViewportWidth(window.innerWidth));

      if (viewportWidth >= 1024) {
        const calculatedPosition = Math.floor((viewportWidth * 0.31180555) - 1) + "px";
        setPosition(calculatedPosition);
        return
      }
  
      const calculatedPosition = Math.floor((viewportWidth * 0.373333) + 1) + "px";
      setPosition(calculatedPosition);

      return () => {
        window.removeEventListener('resize', () => setViewportWidth(window.innerWidth));
      };
    }, [viewportWidth]);

  return ( 
    <section id="hero" className="flex flex-col items-center justify-center pt-24 lg:pt-52">
      <div className="relative z-40 w-[304px] h-56 lg:w-[720px] lg:h-[534px] mx-9">
        <img src={IntroImg} alt="illustration-image" className="w-full h-full" />
      </div>
      <div className="relative w-screen mt-24 lg:mt-[524px] bg-DarkBlue-MainBg">
        <div className={`absolute w-full`} style={{top: `-${position}`}}>
          <img src={(viewportWidth < 1024) ? PathMobile : PathDesktop} alt="path-illustration" className="object-fill w-full h-full" />
        </div>
        <div className={`relative -top-16 lg:-top-[363px] lg:h-0 flex flex-col items-center justify-center`}>
        <h1 className="lg:w-[734px] mx-6 text-2xl lg:text-[40px] font-bold text-center font-Raleway">All your files in one secure location, accessible anywhere.</h1>
        <p className="lg:w-[589px] font-OpenSans text-[14px] lg:text-xl text-center mx-10 mt-4 mb-8">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <Button label={"Get Started"} width={(viewportWidth < 1024) ? "81.5px" : "101.5px"} height={(viewportWidth < 1024) ? "13.5px" : "17.5px"} />
        </div>
      </div>
    </section>
  ) 
}

export { Hero }