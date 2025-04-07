import { useState } from "react"

const Form = () => {
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(true)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    if (emailPattern.test(email)) {
      setIsValid(true)
      setEmail("")
    } else {
      setIsValid(false)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setIsValid(true)
  }

  return (
    <form className="flex flex-col lg:flex-row items-center w-[90%]" onSubmit={handleSubmit}>
      <div className="lg:relative flex flex-col items-center lg:items-start w-full">
        <input
          type="text"
          value={email}
          onChange={handleInputChange}
          placeholder="Your email address..."
          className={`w-full h-10 lg:h-14 text-Dark-Blue border rounded-full pl-8 text-[12px] placeholder-Pale-Blue focus:border-Blue outline-none ${!isValid ? "border-Light-Red" : "border-Pale-Blue"}`}
        />
        {!isValid && (
          <p className="lg:absolute lg:-bottom-5 text-Light-Red text-[10px] mt-0.5 lg:pl-8">
            Please provide a valid email address
          </p>
        )}
      </div>
      <button type="submit" className="w-full lg:w-[37%] h-10 lg:h-14 mt-2.5 lg:mt-0 lg:ml-4 text-white rounded-full text-center text-[12px] bg-Blue cursor-pointer hover:bg-Button-Hover"> Notify Me</button>
    </form>
  )
}

export { Form }