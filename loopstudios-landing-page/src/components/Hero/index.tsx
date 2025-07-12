import heroImgMobile from "@assets/images/mobile/image-hero.jpg"

const Hero: React.FC = () => {
  return (
    <section className="h-[80%]">
      <picture className="absolute top-0 left-0 w-full h-screen -z-10">
        <img src={heroImgMobile} alt="hero-img" />
      </picture>

      <div className="mx-6 mt-[163px] px-6 py-4.5 text-White font-Josefin font-light text-[2.5rem] leading-[1] border-2 border-White">
        <h1>
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </section>
  )
}

export default Hero