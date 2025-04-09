const Header: React.FC = () => {
  const navLinks = [
    { name: 'Features', path: '#features' },
    { name: 'Team', path: '#team' },
    { name: 'Sign In', path: '#sign-in' },
  ]
  return (
    <nav className="fixed z-50 top-0 flex justify-between items-center w-screen h-12 px-6 pt-6 font-Raleway font-light bg-DarkBlue-bg">
      <a href="#hero" className="w-20 h-6">
        <img src="../../../public/images/logo.svg" alt="logo" className="w-full h-full" />
      </a>
      <ul className="flex gap-6 text-white text-[0.75rem]">
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