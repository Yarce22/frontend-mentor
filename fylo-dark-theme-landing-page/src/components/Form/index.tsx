import { useState } from "react"
import { Button } from "../Button"

const Form = () => {
  const [email, setEmail] = useState("")
  const [validEmail, setValidEmail] = useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!emailRegex.test(email)) {
      setValidEmail(false)
      return
    }

    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col lg:flex-row w-full ${validEmail ? "gap-6" : "gap-2"}`}>
      <div>
        <input
          type="text"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full lg:w-[480px] h-12 lg:h-12 pl-8 font-OpenSans text-[12px] text-DarkBlue-FooterBg bg-white rounded-full placeholder-text-Gray"
        />
        {!validEmail && (
          <p className="pl-8 lg:mt-2 mb-4 text-LightRed font-OpenSans font-bold text-[10px]">Error, please check your email</p>
        )}
      </div>
      <Button label="Get Started For Free" width={(window.innerWidth < 1024) ? "0px" : "30px"} height={(window.innerWidth < 1024) ? "13.5px" : "8px"} FormButton={true} />
    </form>
  )
}

export { Form }