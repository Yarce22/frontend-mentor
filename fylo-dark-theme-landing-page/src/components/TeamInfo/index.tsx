import TeamImg from "public/images/illustration-stay-productive.png"
import ArrowBtn from "public/icons/icon-arrow.svg"

const TeamInfo = () => {
  return (
    <section id="team" className="flex flex-col pt-20 lg:px-[105px] lg:flex-row bg-DarkBlue-MainBg px-7">
      <div className="lg:w-[615px] lg:h-[463px]">
        <img src={TeamImg} alt="team-illustration" className="lg:w-full lg:h-full" />
      </div>
      <div className="lg:ml-14 lg:w-[563px]">
        <h2 className="lg:w-[400px] mt-12 mb-4 font-Raleway font-bold text-[18px] lg:text-[40px] text-center lg:text-start">Stay productive, wherever you are</h2>
        <p className="font-OpenSans text-[14px] lg:text-[16px]">
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
        </p>
        <p className="font-OpenSans text-[14px] lg:text-[16px] my-4">
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </p>
        <button className=" flex w-fit text-Cyan text-[12px] lg:text-[16px] font-OpenSans pb-1.5 border-b-2 hover:text-white hover:border-white">
          <a href="" className="flex items-center gap-1.5">
            See how Fylo works <img className="w-4 h-4" src={ArrowBtn} alt="arrow-button" />
          </a>
        </button>
      </div>
    </section>
  )
}

export { TeamInfo }