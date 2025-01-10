import { useContext } from "react"
import { Context } from "../../Provider"

const InputEmail = () => {
const { inputValue, setInputValue, validEmail, setValidEmail } = useContext(Context)

  const onChangeInput = (event) => (setInputValue(event.target.value))
  const onValidationEmail = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(inputValue)) {
      setValidEmail(false)
      event.preventDefault()
    } else {
      setValidEmail(true)
    }
  }

  console.log(validEmail)

  return (
    <>
      <form 
        className="md:relative flex flex-col gap-2 max-w-[448px] md:mb-[70px] md:order-3"
      >
        <input
          className={`bg-Blue900 ${validEmail ? 'border-none' : 'border-red-600 border-2'} text-White rounded-full py-3 md:py-4 pl-8 font-Chivo text-sm font-bold focus:outline-none`}
          type="email"
          value={inputValue}
          placeholder="Email address"
          onChange={onChangeInput}
          required
        />
        <button 
          className="md:absolute md:right-1 md:top-1/2 md:bottom-1/2 md:h-11 md:-translate-y-1/2 bg-Green border-none text-Blue950 rounded-full py-3 pl-8 md:px-8 font-Chivo text-sm font-bold hover:bg-GreenHover"
          type="submit"
          onClick={onValidationEmail}  
        >Request Access</button>
      </form>

      {!validEmail && (
        <p className="text-red-600 text-xs font-bold text-center m-2">Oops! please check your email</p>
      )}
    </>
  )
}

export { InputEmail }