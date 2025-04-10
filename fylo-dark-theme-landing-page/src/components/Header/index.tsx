import Logo from "public/images/logo.svg"

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Features', path: '#features' },
    { name: 'Team', path: '#team' },
    { name: 'Sign In', path: '#early-access' },
  ]
  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-screen h-12 lg:h-auto px-6 pt-6 pb-4 lg:px-20 lg:pt-[74px] font-light font-Raleway bg-DarkBlue-bg">
      <a href="#hero" className="w-20 h-6 lg:w-44 lg:h-[52px]">
        <img src={Logo} alt="logo" className="w-full h-full" />
      </a>
      <ul className="flex gap-6 text-white text-[0.75rem] lg:text-[1rem]">
        {
          navLinks.map((link) => (
            <li key={link.name} className="transition-all duration-200 ease-in-out hover:font-bold hover:underline">
              <a href={link.path}>{link.name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export { Header }