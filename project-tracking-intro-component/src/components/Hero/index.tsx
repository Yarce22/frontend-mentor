import HeroImg from "../../assets/images/illustration-devices.svg"

const Hero: React.FC = () => {
  return (
    <section className="relative lg:absolute lg:top-0 lg:-right-[405px] lg:order-2 w-[482px] h-[239px] lg:w-[916px] lg:h-[455px] pt-32">
      <img src={HeroImg} alt="illustration-devices" className="absolute w-full h-full -left-5 drop-shadow-xl/25" />
    </section>
  )
}

export { Hero }