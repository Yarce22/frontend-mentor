"use client"
import { useEffect, useState } from "react";
import Links from "../Links";
import BurgerMenu from "../BurgerMenu";
import Logo from "../../assets/icons/Logo";
import pattern from "@assets/images/bg-pattern-mobile-nav.svg"

const Header: React.FC = () => {
  const [windowSize, setWindowSize] = useState<boolean>();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [])
  return (
    <header className="relative z-50 flex justify-between items-center p-6 lg:px-[165px] lg:py-5 bg-VeryLightGray">
      <div>
        <Logo />
      </div>

      <nav className="">
        {windowSize
          ? (
            <ul className="flex justify-center items-center gap-7 w-">
              <Links />
            </ul>
          )
          : (
            <>
              <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
              {isBurgerMenuOpen && 
                <ul className="absolute z-30 flex flex-col items-center gap-6 left-0 w-full mt-6 pt-10 px-6 pb-[300px] bg-VeryDarkPurple">
                  <Links />
                  <div className="absolute left-0 bottom-0 pt-20">
                    <img src={pattern} alt="pattern-nav" />
                  </div>
                </ul>
              }
            </>
          )
        }
      </nav>
    </header>
  )
}

export default Header;