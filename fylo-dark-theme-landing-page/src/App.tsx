import { Features } from './components/Features'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TeamInfo } from './components/TeamInfo'
import { Testimonials } from './components/Testimonials'

function App() {

  return (
    <main className='text-white bg-DarkBlue-bg'>
      <Header />
      <Hero />
      <Features />
      <TeamInfo />
      <Testimonials />
    </main>
  )
}

export default App
