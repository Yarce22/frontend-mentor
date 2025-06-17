import quotes from "../../assets/images/pattern-quotes.svg";

interface TextProps {
  text: string;
  author: string;
  job: string;
}

const Text: React.FC<TextProps> = ({ text, author, job }) => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:items-start mt-8 md:mt-16 px-8 md:px-16 lg:px-[165px] lg:z-20">
      <div className="absolute top-0 lg:left-[160px]">
        <img src={quotes} alt="quotes" className="w-[60px] h-[50px] md:w-[120px] md:h-[100px]" />
      </div>

      <p className="pt-6 lg:pt-[74px] text-center lg:text-start font-inter text-Blue text-[19px] md:text-[33px] leading-[135%] md:leading-[137%] font-light lg:w-[610px]">{text}</p>

      <div className="flex flex-col md:flex-row md:gap-2 mt-4 md:mt-8 items-center justify-center">
        <p className="font-inter text-Blue text-[15px] md:text-xl leading-[135%] font-bold">{author}</p>
        <p className="font-inter text-Gray400 text-[15px] md:text-xl leading-[135%] font-medium">{job}</p>
      </div>
    </div>
  )
}

export default Text
