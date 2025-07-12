interface BurgerMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div 
    className="w-6 h-4 flex flex-col justify-between"
    onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <div className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`}></div>
      <div className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}></div>
      <div className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`}></div>
    </div>
  )
}