import { useState, useEffect } from "react"
import Logo from "@assets/images/logo.svg"
import { BurgerMenu } from "../BurgerMenu"
import Links from "../Links"

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sizeViewport, setSizeViewport] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSizeViewport(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sizeViewport]);

  return( 
    <header className={`relative flex justify-between items-center pt-10 px-6 md:pt-16 md:px-20 lg:pt-16 lg:px-41.5 ${isMenuOpen ? "bg-Black" : "bg-transparent"}`}>
      <div className="w-36 h-6 md:w-48 md:h-8">
        <img src={Logo} alt="Logo" className="w-full h-full"/>
      </div>

      {sizeViewport < 768
        ? <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        : <ul className="flex gap-8 text-White text-center font-Alata font-regular text-[0.9375rem]">
            <Links />
          </ul>}

      {isMenuOpen && (
        <div className="absolute top-15.5 md:top-23.5 -left-0 w-full h-screen bg-Black">
          <ul className="flex flex-col gap-5 pt-[159px] px-6 md:px-20 text-white font-Josefin font-light text-2xl">
            <Links isInMobileMenu={true} />
          </ul>
        </div>
      )}
    </header>
  )
}
