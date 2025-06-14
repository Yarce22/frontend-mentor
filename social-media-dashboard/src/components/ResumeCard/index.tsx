interface ResumeCard {
  iconMedia: string;
  nickname: string;
  numFollows: string;
  numToday: string;
  arrow: string;
  arrowColor: string;
  topColor: string;
  theme: string;
}

const ResumeCard: React.FC<ResumeCard> = ({ iconMedia, nickname, numFollows, numToday, arrow, arrowColor, topColor, theme }) => {
  return (
    <div className={`relative grid place-content-center pt-8 pb-6 ${theme === "light" ? "bg-LightGrayishBlue hover:bg-HoverLight" : "bg-DarkDesaturatedBlue hover:bg-HoverDark"} rounded-[5px] overflow-hidden cursor-pointer`}>
      <div
        className={`absolute top-0 left-0 w-full h-[4px] ${topColor === "bg-instagram" ? "bg-linear-to-r from-instagram to-instagram2" : `${topColor}`}`}></div>
      <div className="flex items-center justify-center gap-2 mb-7">
        <img src={iconMedia} alt="icon-media" className="w-5 h-5"  />
        <span className="font-bold text-[0.75rem] text-DarkGrayishBlue text-center">{nickname}</span>
      </div>

      <div className="flex flex-col justify-center items-center mb-6">
        <p className={`font-bold text-[3.5rem] text-VeryDarkBlue tracking-[-2px] ${theme === "light" ? "text-VeryDarkBlue" : "text-White"}`}>{numFollows}</p>
        <p className="text-[0.75rem] text-DarkGrayishBlue tracking-[5px] text-center">FOLLOWERS</p>
      </div>

      <div className={`${arrowColor} flex items-center justify-center gap-1`}>
        <img src={arrow} alt="arrow" />
        <p className="text-[0.75rem] text-center font-bold">{numToday} Today</p>
      </div>
    </div>
  )
}

export default ResumeCard