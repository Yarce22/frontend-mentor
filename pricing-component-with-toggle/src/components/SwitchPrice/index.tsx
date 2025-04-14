interface SwitchPriceProps {
  isMonthly: boolean,
  handlePrice: () => void
}


const SwitchPrice: React.FC<SwitchPriceProps> = ({ isMonthly, handlePrice }) => {
  return (
    <section className="relative">
      <h1 className="mb-10 text-center text-[32px] text-GrayishBlue">
        Our Pricing
      </h1>
      <div className="flex items-center justify-center gap-6 text-[15px] text-LightGrayishBlue">
        <span>Annually</span>
        <div className="relative w-14 h-8 py-1 px-[5px] rounded-full bg-linear-to-br from-LightPurple to-BluePurple before:content-[''] before:absolute before:inset-0 before:rounded-full active:before:bg-white active:before:opacity-20">
          <button
            className={`absolute mx-[5px] left-0 w-6 h-6 rounded-full bg-white cursor-pointer transition-transform duration-300 ease-in-out transform ${isMonthly ? 'translate-x-[90%]' : 'translate-x-0'}`}
            onClick={handlePrice}
          >
          </button>
        </div>
        <span>Monthly</span>
      </div> 
    </section>
  )
}

export { SwitchPrice }