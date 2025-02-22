import HeroMobile from '../../../public/images/hero-mobile.jpg';
import HeroDesktop from '../../../public/images/hero-desktop.jpg';

const Hero = () => {
  return (
    <picture className='h-[250px] lg:h-screen'>
      <source srcSet={HeroDesktop} media="(min-width: 1024px)" />
      <img className='max-w-376px max-h-250px lg:w-full lg:h-full' src={HeroMobile} alt="Hero" />
    </picture>
  );
}

export { Hero }