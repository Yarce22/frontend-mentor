import { useEffect, useState } from "react"
import { Links } from "../Links"
import Logo from "../../assets/images/logo.svg"
import "./styles.css"
import { BurgerIcon } from "../BurgerIcon"

const Header: React.FC = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

	return (
		<nav className="relative flex items-center justify-between">
			<div className="w-6 h-6 lg:w-8 lg:h-8">
				<img src={Logo} alt="logo-icon" className="w-full h-full" />
			</div>
			<ul className={`${!isMobile ? 'flex items-center gap-11' : 'hidden'}`}>
        <Links isMobile={!!isMobile} />
      </ul>
      {isMobile && (
        <BurgerIcon  menuOpen={menuOpen} toggleMenu={toggleMenu} />
      )}
      {isMobile && menuOpen && (
        <ul className="absolute z-50 grid place-items-center right-0 left-0 -bottom-[271px] w-[311px] h-[233px] px-6 py-1 bg-white rounded-[3px]">
          <Links isMobile={!!isMobile} />
        </ul>
      )}
		</nav>
	)
}

export { Header }