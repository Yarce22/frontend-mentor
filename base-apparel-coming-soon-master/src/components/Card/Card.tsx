import { Hero } from '../../components/Hero/Hero'
import { Nav } from '../../components/Nav/Nav'
import { Body } from '../../components/Body/Body'

const Card = () => {
  return (
    <section className='max-w-[375px] max-h-[800px] h-screen bg-linear-135 from-[#FFFFFF] to-[#FFF4F4]'>
      <Nav />
      <Hero />
      <Body />
    </section>
  )
}

export { Card }