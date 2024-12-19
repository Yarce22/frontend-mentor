import darkLogo from '../../assets/images/logo-dark.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import twitter from '../../assets/images/icon-twitter.svg'

const socialIcons = [facebook, twitter, instagram]

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-14 p-20'>
      <div>
        <img src={darkLogo} alt="logo-image" />
      </div>
      <div className='flex gap-7'>
        {socialIcons.map((icon) => (
          <a href="/" key={icon}>
            <img src={icon} alt='social-icon' />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer