import { useState } from "react"
import { BgIllustration } from "./components/BgIllustration"
import { SwitchPrice } from "./components/SwitchPrice"
import { PricingCards } from "./components/PricingCards"


function App() {
  const [isMonthly, setIsMonthly] = useState(false)

  const handlePrice = () => {
    setIsMonthly(!isMonthly)
  }

  return (
    <main className="relative flex flex-col items-center pt-16 pb-[71px] px-6 lg:pt-[71px] lg:pb-[103px] lg:px-[195px] bg-VeryLightGrayishBlue font-bold font-Montserrat overflow-hidden">
      <BgIllustration />
      <div className="relative z-10 w-full">
        <SwitchPrice isMonthly={isMonthly} handlePrice={handlePrice} />
        <PricingCards isMonthly={isMonthly} />
      </div>
    </main>
  )
}

export default App
