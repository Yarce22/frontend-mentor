import LogoImg from '../../assets/desktop/logo.svg'

const Logo = () => {

  return (
    <div className='md:pb-[104px]'>
      <img src={LogoImg} alt="logo-img" />
    </div>
  )
}

export { Logo }