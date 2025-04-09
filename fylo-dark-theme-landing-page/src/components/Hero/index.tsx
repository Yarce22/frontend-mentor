import React, { useState, useEffect } from 'react';
import { Button } from "../Button";
import IntroImg from "../../../public/images/illustration-intro.png";
import Path from "../../../public/images/bg-curvy-mobile.svg";

const Hero: React.FC = () => {
    const [position, setPosition] = useState<string>('0px');
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener('resize', () => setViewportWidth(window.innerWidth));
  
      const calculatedPosition = Math.floor((viewportWidth * 0.373333) + 1) + "px";
      setPosition(calculatedPosition);

      return () => {
        window.removeEventListener('resize', () => setViewportWidth(window.innerWidth));
      };
    }, [viewportWidth]);
  
  return ( 
    <section id="hero" className="flex flex-col items-center justify-center pt-24">
      <div className="relative z-40">
        <img src={IntroImg} alt="illustration-image" className="min-w-[304px] min-h-56 w-[304px] mx-9" />
      </div>
      <div className="relative mt-24 w-screen bg-DarkBlue-MainBg">
        <div className={`absolute w-full`} style={{top: `-${position}`}}>
          <img src={Path} alt="path-illustration" className="w-full h-full object-fill" />
        </div>
        <div className={`relative -top-16 flex flex-col items-center justify-center`}>
        <h1 className="font-bold font-Raleway text-2xl text-center mx-6">All your files in one secure location, accessible anywhere.</h1>
        <p className="font-OpenSans text-[14px] text-center mx-10 mt-4 mb-8">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <Button label={"Get Started"} width="240px" height="48px" />
        </div>
      </div>
    </section>
  ) 
}

export { Hero }