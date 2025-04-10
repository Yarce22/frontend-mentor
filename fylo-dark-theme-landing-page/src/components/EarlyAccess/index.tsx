import { Form } from "../Form"

const EarlyAccess = () => {
  return (
    <section id="early-access" className="absolute grid place-items-center -bottom-[5%] px-6 py-10 mx-5 bg-DarkBlue-bg rounded-[9px]">
      <h2 className="font-Raleway font-bold text-[18px]">Get early access today</h2>
      <p className="mt-4 mb-8 font-OpenSans text-[14px] text-center">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      <Form />
    </section>
  ) 
}

export { EarlyAccess }