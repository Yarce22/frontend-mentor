import { Input } from "../Input/Input"

const Body = () => {
  return (
    <section className="flex flex-col justify-center items-center lg:justify-start lg:items-start px-8 lg:pl-[165px] lg:pr-[220px]">
      <h1 className="w-60 pt-16 lg:pt-0 mb-4 text-[40px] lg:text-[64px] text-center lg:text-start font-semibold text-dark-grayish-red tracking-[11px] lg:tracking-[17px] leading-[42px] lg:leading-[71px]"><span className=" font-light text-desaturated-red">WE'RE</span> COMING SOON</h1>

      <p className="text-[14px] lg:text-[16px] text-center lg:text-start text-desaturated-red">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>

      <Input />
    </section>

  )
}

export { Body }