import heroMobile from "@assets/images/image-intro-mobile.jpg";
import heroDesktop from "@assets/images/image-intro-desktop.jpg";
import patternTopMobile from "@assets/images/bg-pattern-intro-left-mobile.svg";
import patternTopDesktop from "@assets/images/bg-pattern-intro-left-desktop.svg";
import patternButtonMobile from "@assets/images/bg-pattern-intro-right-mobile.svg";
import patternButtonDesktop from "@assets/images/bg-pattern-intro-right-desktop.svg";

const Hero: React.FC = () => {
  return (
    <section className="relative lg:flex lg:px-[165px] bg-DarkPurple">
      <picture className="absolute top-[46.5%] lg:top-[71.3%] left-0">
        <source media="(min-width: 1024px)" srcSet={patternTopDesktop} />
        <img src={patternTopMobile} alt="patternTopMobile" />
      </picture>
      <picture className="absolute right-0 -bottom-44 z-10 lg:-bottom-0 lg:-top-20">
        <source media="(min-width: 1024px)" srcSet={patternButtonDesktop} />
        <img src={patternButtonMobile} alt="patternButtonMobile" />
      </picture>
      <picture className="lg:absolute lg:right-[165px] lg:top-[105px]">
        <source media="(min-width: 1024px)" srcSet={heroDesktop} />
        <img src={heroMobile} alt="hero-img" />
      </picture>

      <article className="relative flex flex-col items-center lg:items-start lg:w-1/2  py-24 px-6 lg:px-0 lg:pr-5 lg:pt-[105px] lg:pb-[125px]">
        <hr className="hidden lg:block lg:w-[150px] lg:border-b lg:border-VeryLightGray mb-16" />
        
        <h1 className="font-DM text-5xl lg:text-7xl text-center lg:text-start text-VeryLightGray leading-12 lg:leading-16 tracking-[-0.67px] lg:tracking-[-1px] lg:pr-3">
        Humanizing your insurance.
        </h1>

        <p className="pt-4 pb-8 font-Karla text-center lg:text-start text-VeryLightGray leading-[1.625rem] ">
          Get your life insurance coverage easier and faster. We blend our expertise and technology to help you fin d the plan that’s right for you. Ensure you and your loved ones are protected.
        </p>

        <button className="font-Karla font-bold tracking-[1.5px] border-2 border-VeryLightGray text-VeryLightGray text-[0.8125rem] px-7 py-3 cursor-pointer hover:bg-VeryLightGray hover:text-DarkPurple transition-colors duration-200 ease-in-out">
          VIEW PLANS
        </button>
      </article>
    </section>
  )
}

export default Hero
