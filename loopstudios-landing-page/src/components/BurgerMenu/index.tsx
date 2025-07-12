interface BurgerMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div 
    className="w-6 h-4 md:w-8 md:h-5.5 flex flex-col justify-between"
    onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <div className={`w-full h-0.5 md:h-[2.5px] bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-[7.5px] md:translate-y-[10px]" : ""}`}></div>
      <div className={`w-full h-0.5 md:h-[2.5px] bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}></div>
      <div className={`w-full h-0.5 md:h-[2.5px] bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-[7.5px] md:-translate-y-[10px]" : ""}`}></div>
    </div>
  )
}