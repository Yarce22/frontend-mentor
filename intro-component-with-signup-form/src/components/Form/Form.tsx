import { Input } from "../Input/Input"

const Form = () => {
  interface InputsType {
    type: string,
    placeholder: string,
  }

  const inputs: InputsType[] = [
    {type: "text", placeholder: "First Name"},
    {type: "text", placeholder: "Last Name"},
    {type: "email", placeholder: "Email Address"},
    {type: "password", placeholder: "Password"},
  ]

  return (
    <section>
      <div className="text-center px-[66px] py-[18px] mb-6 bg-Blue rounded-[10px]">
        <p><span className="font-bold">Try it free 7 days</span> then $20/mo. there after</p>
      </div>

      <form className="p-6 bg-white rounded-[10px]">
        {
          inputs.map((input, index) => (
            <Input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))
        }
        <button
          type="submit"
          className="w-[279px] h-14 bg-Green rounded-[5px] text-[15px] font-semibold tracking-[1px]">CLAIM YOUR FREE TRIAL</button>
        <p className="text-[11px] text-Grayish-blue text-center px-4 mt-2 font-medium">By clicking the button, you are agreeing to our <span className="font-bold text-red-400 cursor-pointer">Terms and Services</span></p>
      </form>
    </section>
  )
}

export { Form }