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
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col w-full ${validEmail ? "gap-6" : "gap-2"}`}>
      <input
        type="text"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-12 pl-8 font-OpenSans text-[12px] text-DarkBlue-FooterBg bg-white rounded-full placeholder-text-Gray"
      />
      {!validEmail && (
        <p className="pl-8 mb-4 text-LightRed font-OpenSans font-bold text-[10px]">Error, please check your email</p>
      )}
      <Button label="Get Started For Free" width="100%" height="48px" />
    </form>
  )
}

export { Form }