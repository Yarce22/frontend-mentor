import { Form } from "../Form"
import { Logo } from "../Logo"
import { Title } from "../Title"

const Hero = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <Logo />
      <Title />
      <Form />
    </section>
  )
}

export { Hero }