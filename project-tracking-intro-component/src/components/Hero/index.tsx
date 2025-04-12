import HeroImg from "../../assets/images/illustration-devices.svg"

const Hero: React.FC = () => {
  return (
    <section className="relative w-[482px] h-[239px] pt-16">
      <img src={HeroImg} alt="illustration-devices" className="absolute w-full h-full object-5 contain -left-5 drop-shadow-xl/25" />
    </section>
  )
}

export { Hero }