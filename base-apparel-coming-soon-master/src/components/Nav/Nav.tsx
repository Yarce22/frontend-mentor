import Logo from '../../../public/images/logo.svg'

const Nav = () => {
  return (
    <nav className='p-8 lg:p-0 lg:pt-[75px] lg:pl-[165px]'>
      <div className='w-26 h-5 lg:w-40 lg:h-8'>
        <img src={Logo} alt="Logo" className='w-full h-full object-cover' />
      </div>
    </nav>
  )
}

export { Nav }