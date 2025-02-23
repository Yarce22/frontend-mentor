import { Form } from "../Form/Form"
import { Title } from "../Title/Title"


const Body = () => {
  return (
    <article className="grid place-items-center grid-rows-[378px_1fr]">
      <Title />
      <Form />
    </article>
  )
}

export { Body }