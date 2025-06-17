import bgImg from "../../assets/images/pattern-bg.svg";
import leftArrow from "../../assets/images/icon-prev.svg";
import rightArrow from "../../assets/images/icon-next.svg";

interface ImageProps {
  photo: string;
  testimonial: number;
  setTestimonial: (testimonial: number) => void;
}

const Image: React.FC<ImageProps> = ({ photo, testimonial, setTestimonial }) => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:order-2 mx-6 mt-6 lg:absolute lg:right-20">
      <div className="md:w-[520px] md:h-[490px] lg:w-[697px] lg:h-[657px]">
        <img src={bgImg} alt="background" />
      </div>

      <div className="absolute inset w-3xs h-3xs md:w-[403px] md:h-[403px] lg:w-[540px] lg:h-[540px] shadow-2xl">
        <img src={photo} alt="photo-testimonial" />
      </div>

      <div className="absolute bottom-0 md:bottom-5 flex items-center justify-between px-[18px] md:px-6 w-20 h-10 md:w-28 md:h-14 rounded-full bg-White shadow-2xl">
        <button className="w-full flex items-center justify-start cursor-pointer" onClick={() => setTestimonial(testimonial === 0 ? testimonial : testimonial - 1)}>
          <img src={leftArrow} alt="left-arrow" className="w-2 h-3 md:w-2 md:h-4" />
        </button>
        <button className="w-full flex items-center justify-end cursor-pointer" onClick={() => setTestimonial(testimonial === 1 ? testimonial : testimonial + 1)}>
          <img src={rightArrow} alt="right-arrow" className="w-2 h-3 md:w-2 md:h-4" />
        </button>
      </div>
    </div>
  )
}

export default Image
