import { useEffect, useState } from "react"
import Logo from "../../assets/images/logo.svg"
import "./styles.css"

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
			<div className="w-6 h-6">
				<img src={Logo} alt="logo-icon" className="w-full h-full" />
			</div>
			<ul className={`${!isMobile ? 'block' : 'hidden'}`}>
        <li><a href="/">PRODUCT</a></li>
        <li><a href="/">FEATURES</a></li>
        <li><a href="/">PRICING</a></li>
        <li><a href="/">LOGIN</a></li>
      </ul>
      {isMobile && (
        <div className="grid w-6 h-6 cursor-pointer" onClick={toggleMenu}>
          <div className={`${menuOpen ? "open" : ""} w-full h-[2px] bg-[#333] transition-all duration-400 ease-in-out`}></div>
          <div className={`${menuOpen ? "open" : ""} w-full h-[2px] bg-[#333] transition-all duration-400 ease-in-out`}></div>
          <div className={`${menuOpen ? "open" : ""} w-full h-[2px] bg-[#333] transition-all duration-400 ease-in-out`}></div>
        </div>
      )}
      {isMobile && menuOpen && (
        <ul className="absolute z-50 grid place-items-center right-0 left-0 -bottom-[271px] w-[311px] h-[233px] px-6 py-1 bg-white rounded-[3px]">
          <li><a href="/" className="text-[18px] text-VeryDarkBlue text font-bold font-BarlowCondensed cursor-pointer">PRODUCT</a></li>
          <li><a href="/" className="text-[18px] text-VeryDarkBlue text font-bold font-BarlowCondensed cursor-pointer">FEATURES</a></li>
          <li><a href="/" className="text-[18px] text-VeryDarkBlue text font-bold font-BarlowCondensed cursor-pointer">PRICING</a></li>
					<hr className="w-full my-4 border border-LightGrayishBlue" />
          <li><a href="/" className="text-[18px] text-GrayishBlue font-bold font-BarlowCondensed cursor-pointer">LOGIN</a></li>
        </ul>
      )}
		</nav>
	)
}

export { Header }