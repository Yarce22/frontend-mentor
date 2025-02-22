import Logo from '../../../public/images/logo.svg'

const Nav = () => {
  return (
    <nav className='p-8'>
      <div className='w-26 h-5'>
        <img src={Logo} alt="Logo" className='w-full h-full object-cover' />
      </div>
    </nav>
  )
}

export { Nav }