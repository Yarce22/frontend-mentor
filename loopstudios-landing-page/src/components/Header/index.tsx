import Logo from "@assets/images/logo.svg"
import { BurgerMenu } from "../BurgerMenu"
import { useState } from "react"
import Links from "../Links"

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return( 
    <header className={`relative flex justify-between items-center pt-10 px-6 ${isMenuOpen ? "bg-Black" : "bg-transparent"}`}>
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {isMenuOpen && (
        <div className="absolute top-18 -left-0 w-full h-screen bg-Black">
          <ul className="flex flex-col gap-5 pt-[159px] px-6 text-white font-Josefin font-light text-2xl">
            <Links isInMobileMenu={true} />
          </ul>
        </div>
      )}
    </header>
  )
}
