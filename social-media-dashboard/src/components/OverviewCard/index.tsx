interface OverviewCard {
  title: string;
  num: string;
  icon: string;
  arrow: string;
  arrowColor: string;
  percent: string;
  theme: string
}

const OverviewCard: React.FC<OverviewCard> = ({ title, num, icon, arrow, arrowColor, percent, theme }) => {
  return (
    <div className={`flex justify-between py-7 px-6 rounded-[5px] cursor-pointer ${theme === "light" ? "bg-LightGrayishBlue hover:bg-HoverLight" : "bg-DarkDesaturatedBlue hover:bg-HoverDark"}`}>
      <div className="flex flex-col gap-6">
        <p className="font-bold text-[0.875rem] text-DarkGrayishBlue">{title}</p>
        <p className={`font-bold text-[2rem] ${theme === "light" ? "text-VeryDarkBlue" : "text-White"}`}>{num}</p>
      </div>

      <div className="flex flex-col items-end gap-10">
        <img src={icon} alt="social-icon" className="w-5 h-5" />
        <div className="flex items-center gap-1">
          <img src={arrow} alt="arrow-icon" />
          <p className={`font-bold text-[0.75rem] ${arrowColor}`}>{percent}</p>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard
