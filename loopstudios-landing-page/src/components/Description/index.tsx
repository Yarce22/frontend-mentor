import DescriptionImgMobile from "@assets/images/mobile/image-interactive.jpg";
import DescriptionImgDesktop from "@assets/images/desktop/image-interactive.jpg";

const Description: React.FC = () => {
  return (
    <section className="pt-[323px] px-6 md:pt-[242px] md:px-20">
      <picture>
        <source media="(min-width: 1024px)" srcSet={DescriptionImgMobile} />
        <source media="(min-width: 768px)" srcSet={DescriptionImgDesktop} />
        <img src={DescriptionImgMobile} alt="interactive-vr-img" />
      </picture>

      <article className="pt-12 px-6 md:px-0">
        <h2 className="font-Josefin font-light text-[2rem] md:text-5xl text-center leading-[1]">
          THE LEADER IN INTERACTIVE VR
        </h2>

        <p className="pt-4 md:pt-6 text-Black opacity-50 font-Alata font-regular text-[0.9375rem] text-center leading-[165%]">
        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </article>
    </section>
  )
}

export default Description;
