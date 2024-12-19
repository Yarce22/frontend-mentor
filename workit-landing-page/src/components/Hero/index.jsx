import logoLight from '../../assets/images/logo-light.svg'
import imageHero from '../../assets/images/image-hero.webp'
import Button from '../Button'

const Hero = () => {
  return (
    <>
    <section className="hero-container relative flex flex-col px-5 pt-8 bg-Purple900 text-lg text-White font-Manrope font-bold">
      <nav className='flex justify-between'>
        <div className=''>
          <img src={logoLight} alt="logo" />
        </div>
        <a href="/" className='underline decoration-Green decoration-2 underline-offset-8'>Apply for access</a>
      </nav>
      <section className='flex flex-col gap-10 items-center mt-14 mx-5 mb-36'>
        <h1 className='text-[40px] leading-[3rem] text-center font-semibold font-Frauces'>Data <span className='underline decoration-Green decoration-2 underline-offset-8'>tailored</span> to your needs.</h1>
        <Button 
          text='Learn more'
        />
      </section>
      <div className='w-80 absolute z-10 -bottom-28 left-0 right-0 m-auto'>
        <img src={imageHero} alt="phone-image" />
      </div>
    </section>
    <div className='absolute w-full z-0 fill-Purple900'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%"  height="100%" viewBox="0 0 375 23.7">
        <path
            d="M 0 0 A 250 70 0 0 0 375 0 Z"/>
      </svg>  
    </div>
    </>
  )
}

export default Hero