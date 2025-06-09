import snappyIcon from "@assets/icons/icon-snappy-process.svg";
import affordableIcon from "@assets/icons/icon-affordable-prices.svg";
import peopleIcon from "@assets/icons/icon-people-first.svg";

const Infos = [
  {icon: snappyIcon, title: "Snappy Process", desc: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."},
  {icon: affordableIcon, title: "Affordable Prices", desc: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."},
  {icon: peopleIcon, title: "People First", desc: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."},
]

const HowWork:React.FC = () => {
  return (
    <section className="flex flex-col items-center lg:items-start py-[136px] lg:py-[305px] px-6 lg:px-[165px]">
      <hr className="w-[150px] border-[#C396C6]" />

      <h2 className="whitespace-nowrap mt-10 lg:mt-[63px] mb-20 lg:mb-24 font-DM text-5xl lg:text-7xl tracking-[-0.67px] lg:tracking-[1px]">We’re different</h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-14">
        {Infos.map((info, index) => (
          <div key={index} className="flex flex-col justify-center items-center lg:items-start">
            <div className="mb-8">
              <img src={info.icon} alt="" />
            </div>
            <h3 className="mb-4 font-DM text-[1.75rem] tracking-[-0.39px]">{info.title}</h3>
            <p className="font-Karla text-center lg:text-start text-DarkGray leading-[1.625rem]">{info.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowWork