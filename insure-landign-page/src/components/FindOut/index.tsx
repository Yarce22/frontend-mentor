import patternMobile from "@assets/images/bg-pattern-how-we-work-mobile.svg";
import patternDesktop from "@assets/images/bg-pattern-how-we-work-desktop.svg";

const FindOut: React.FC = () => {
  return (
    <section className="relative mx-6 mb-[140px] px-6 py-[72px] lg:px-[81px] lg:py-[69px] bg-DarkPurple">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10">
        <picture className="absolute top-0 right-0">
          <source media="(min-width: 1024px)" srcSet={patternDesktop} />
          <img src={patternMobile} alt="pattern" />
        </picture>
        <h2 className="lg:w-[475px] font-DM text-VeryLightGray text-center lg:text-start text-[2.5rem] lg:text-[3.5rem] tracking-[-0.56px] lg:tracking-[-0.78px] leading-[2.5rem] lg:leading-[3.5rem]">
          Find out more about how we work
        </h2>

        <button className="relative z-20 px-6 py-3 border-2 border-VeryLightGray font-Karla font-bold text-[0.8125rem] text-VeryLightGray cursor-pointer hover:bg-VeryLightGray hover:text-DarkPurple transition-colors duration-200 ease-in-out">
          HOW WE WORK
        </button>
      </div>
    </section>
  )
}

export default FindOut;
