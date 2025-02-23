import backgroundDesktop from "../../../public/images/bg-intro-desktop.png"
import backgroundMobile from "../../../public/images/bg-intro-mobile.png"

const Background = () => {
  return (
    <picture>
      <source srcSet={backgroundDesktop} media={"min-width: 1024px"} />
      <img className="absolute object-cover w-full h-full -z-10 not-required:" src={backgroundMobile} alt="background" />
    </picture>
  )
}

export { Background }