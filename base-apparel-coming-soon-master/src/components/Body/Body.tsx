import { Input } from "../Input/Input"

const Body = () => {
  return (
    <section className="flex flex-col justify-center items-center px-8">
      <h1 className="w-60 pt-16 mb-4 text-[40px] text-center font-semibold text-dark-grayish-red tracking-[11px] leading-[42px]"><span className="text-[40px] font-light text-desaturated-red">WE'RE</span> COMING SOON</h1>

      <p className="text-[14px] text-center text-desaturated-red">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>

      <Input />
    </section>

  )
}

export { Body }