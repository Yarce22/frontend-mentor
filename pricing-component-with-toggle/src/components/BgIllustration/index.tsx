import bgTop from "../../assets/images/bg-top.svg"
import bgBottom from "../../assets/images/bg-bottom.svg"

const BgIllustration = () => {
  return (
    <div>
      <div className="absolute -top-[45px] -right-[245px] lg:top-0 lg:right-0 w-[472px] h-[760px]">
        <img src={bgTop} alt="bg-illustration" className="w-full h-full" />
      </div>
      <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] h-[300px]">
        <img src={bgBottom} alt="bg-illustration" className="w-full h-full" />
      </div>
    </div>
  )
}

export { BgIllustration }