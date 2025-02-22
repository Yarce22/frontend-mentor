import { Hero } from '../../components/Hero/Hero'
import { Nav } from '../../components/Nav/Nav'
import { Body } from '../../components/Body/Body'

const Card = () => {
  return (
    <section className='grid grid-cols-1 grid-rows-[84px_250px_auto] lg:grid-cols-[1fr_610px] lg:grid-rows-[244px_1fr] place-content-start max-w-[375px] lg:max-w-screen max-h-[800px] lg:max-h-screen h-screen bg-linear-135 from-[#FFFFFF] to-[#FFF4F4]'>
      <Nav />
      <Hero />
      <Body />
    </section>
  )
}

export { Card }