import { useContext } from "react"
import { Context } from "../../assets/Providers"
import Illustration from "../../assets/images/illustration-thank-you.svg"


const ThanksCard = () => {
  const {isQualified, qualification} = useContext(Context)

  return (
    <main className={`p-6 rounded-2xl bg-gradient-to-b from-[#232A34] to-[#181E27] text-White ${isQualified ? 'block' : 'hidden'}`}>
      <div className="grid place-content-center">
        <img src={Illustration} alt="illustration-thanks" />
      </div>

      <div className="grid place-content-center my-7">
        <p className="py-1 px-3 bg-DarkBlue text-Orange rounded-3xl">You selected <span>{qualification}</span> out of 5</p>
      </div>

      <div className="grid place-items-center text-center">
        <h2 className="text-2xl font-bold">Thank you!</h2>
        <p className="text-LightGrey mt-4 text-sm">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </main>
  )
}

export default ThanksCard 