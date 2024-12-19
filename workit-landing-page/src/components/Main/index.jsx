import MainInformation from "../MainInformation"
import { information } from "../../utils/information"

const Main = () => {
  return (
    <>
    <section className="flex flex-col items-center gap-8 pt-40 pb-16 px-5 font-Frauces bg-Purple100">
      {information.map((data) => {
        return (
        <MainInformation
          key={data.id}
          index={data.id}
          title={data.title}
          info={data.info}
        />)
      })}
    </section>
    <div className="fill-Purple100">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%"  height="100%" viewBox="0 0 375 23.7">
        <path
            d="M 0 0 A 250 70 0 0 0 375 0 Z"/>
      </svg> 
    </div>
    </>
  )
}
 
export default Main