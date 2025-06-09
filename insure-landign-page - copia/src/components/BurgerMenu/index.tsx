interface BurgerMenuProps {
  isBurgerMenuOpen: boolean,
  setIsBurgerMenuOpen: (isBurgerMenuOpen: boolean) => void
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isBurgerMenuOpen, setIsBurgerMenuOpen }) => {
  return (
    <div
      onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
      className="grid place-items-center w-8 h-8 py-1.5 px-1 border-2 border-DarkPurple cursor-pointer"
    >
      <div className={`w-4 border-b-2 border-DarkPurple transition duration-300 ease-in-out ${isBurgerMenuOpen && "rotate-45 translate-x-[1px] translate-y-[5.5px]"}`}></div>
      <div className={`w-4 border-b-2 border-DarkPurple transition duration-300 ease-in-out ${isBurgerMenuOpen && "opacity-0"}`}></div>
      <div className={`w-4 border-b-2 border-DarkPurple transition duration-300 ease-in-out ${isBurgerMenuOpen && "-rotate-45 translate-x-[1px] -translate-y-[5.5px]"}`}></div>
    </div>
  )
}

export default BurgerMenu;
