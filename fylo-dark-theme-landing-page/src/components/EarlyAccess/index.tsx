import { Form } from "../Form"

const EarlyAccess = () => {
  return (
    <section id="early-access" className="absolute lg:w-[863px] grid place-items-center -bottom-[4%] px-6 py-10 lg:px-20 lg:py-10 mx-5 lg:mx-0 bg-DarkBlue-bg rounded-[9px]">
      <h2 className="font-Raleway font-bold text-[18px] lg:text-[32px]">Get early access today</h2>
      <p className="mt-4 mb-8 lg:w-[673px] font-OpenSans text-[14px] text-center">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      <Form />
    </section>
  ) 
}

export { EarlyAccess }