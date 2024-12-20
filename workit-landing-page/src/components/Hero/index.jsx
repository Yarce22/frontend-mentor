import logoLight from '../../assets/images/logo-light.svg'
import pattern1 from '../../assets/images/bg-pattern-1.svg'
import pattern2 from '../../assets/images/bg-pattern-2.svg'
import Button from '../Button'

const Hero = () => {
  return (
    <>
    <section className="relative flex flex-col px-5 pt-8 md:px-11 lg:pt-14 lg:px-20 bg-Purple900 text-lg text-White font-Manrope font-bold">
      <nav className='flex justify-between'>
        <div className=''>
          <img src={logoLight} alt="logo" />
        </div>
        <a href="/" className='underline decoration-Green decoration-2 underline-offset-8 hover:text-Green'>Apply for access</a>
      </nav>
      <section className='flex flex-col gap-10 items-center mt-14 mx-5 mb-36'>
        <h1 className='md:mx-11 lg:mx-20 xl:mx-72  md:text-[60px] lg:text-[5rem] md:font-medium md:leading-[5rem] text-[40px] leading-[3rem] text-center font-semibold font-Frauces'>Data <span className='underline decoration-Green decoration-2 underline-offset-8'>tailored</span> to your needs.</h1>
        <Button 
          text='Learn more'
        />
      </section>
      <div className='w-full h-full'>
        <div className='hidden md:block absolute -left-56 lg:-left-28 top-16 lg:top-36'>
          <img src={pattern1} alt="pattern" />
        </div>
        <div className='hidden md:block absolute bottom-0 lg:bottom-24 -right-24 lg:-right-4'>
          <img src={pattern2} alt="pattern" />
        </div>
      </div>
    </section>
    <div className='absolute w-full z-10 fill-Purple900'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%"  height="100%" viewBox="0 0 375 23.7">
        <path
            d="M 0 0 A 250 70 0 0 0 375 0 Z"/>
      </svg>  
    </div>
    </>
  )
}

export default Hero