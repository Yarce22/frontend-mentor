import heroImgMobile from "@assets/images/mobile/image-hero.jpg"
import heroImgDesktop from "@assets/images/desktop/image-hero.jpg" 

const Hero: React.FC = () => {
  return (
    <section className="h-[80%]">
      <picture className="absolute top-0 left-0 w-full h-[650px] -z-10 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-Black/10 md:after:bg-Black/40">
        <source media="(min-width: 768px)" srcSet={heroImgDesktop} />
        <img src={heroImgMobile} alt="hero-img" className="w-full h-full object-cover" />
      </picture>

      <div className="mx-6 mt-[163px] px-6 py-4.5 md:mx-20 md:mt-32.5 md:p-10 lg:mx-41.5 max-w-[650px] text-White font-Josefin font-light text-[2.5rem] md:text-7xl leading-[1] border-3 border-White">
        <h1>
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </section>
  )
}

export default Hero