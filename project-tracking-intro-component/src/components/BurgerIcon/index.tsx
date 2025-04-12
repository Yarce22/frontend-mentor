interface BurgerIconProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="grid w-6 h-6 cursor-pointer" onClick={toggleMenu}>
      <div className={`${menuOpen ? "open" : ""} w-full h-[2px] bg-[#333] transition-all duration-400 ease-in-out`}></div>
      <div className={`${menuOpen ? "open" : ""} w-full h-[2px] bg-[#333] transition-all duration-400 ease-in-out`}></div>
      <div className={`${menuOpen ? "open" : ""} w-full h-[2px] bg-[#333] transition-all duration-400 ease-in-out`}></div>
    </div>
  )
}

export { BurgerIcon }