
import { Body } from './components/Body'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <>
      <main className="relative px-8 pb-24 overflow-hidden pt-9">
        <div className="absolute -z-50 top-0 -right-[35%] w-[319px] h-[425px] bg-LightGrayishBlue rounded-bl-[60px]"></div>
        <Header />
        <Hero />
        <Body />
      </main>
    </>
  )
}

export default App
