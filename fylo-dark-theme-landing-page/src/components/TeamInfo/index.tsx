import TeamImg from "public/images/illustration-stay-productive.png"
import ArrowBtn from "public/icons/icon-arrow.svg"

const TeamInfo = () => {
  return (
    <section id="team" className="flex flex-col pt-20 bg-DarkBlue-MainBg px-7">
      <div>
        <img src={TeamImg} alt="team-illustration" />
      </div>
      <h2 className="mt-12 mb-4 font-Raleway font-bold text-[18px] text-center">Stay productive, wherever you are</h2>
      <p className="font-OpenSans text-[14px]">
        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
      </p>
      <p className="font-OpenSans text-[14px] my-4">
        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
      </p>
      <button className=" flex w-fit text-Cyan text-[12px] font-OpenSans pb-1.5 border-b-2 hover:text-white hover:border-white">
        <a href="" className="flex gap-1.5">
          See how Fylo works <img className="" src={ArrowBtn} alt="arrow-button" />
        </a>
      </button>
    </section>
  )
}

export { TeamInfo }