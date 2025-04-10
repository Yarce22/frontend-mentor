import { EarlyAccess } from './components/EarlyAccess'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TeamInfo } from './components/TeamInfo'
import { Testimonials } from './components/Testimonials'

function App() {

  return (
    <>
      <main className='relative grid text-white place-items-center bg-DarkBlue-bg'>
        <Header />
        <Hero />
        <Features />
        <TeamInfo />
        <Testimonials />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  )
}

export default App
