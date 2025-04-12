
import { Body } from './components/Body'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <>
      <main className="relative px-8 pb-24 overflow-hidden pt-9 lg:px-[165px] lg:pt-16">
        <div className="absolute -z-50 top-0 -right-[35%] lg:right-0 w-[319px] h-[425px] lg:w-[705px] lg:h-[427px] bg-LightGrayishBlue rounded-bl-[60px]"></div>
        <Header />
        <div className="relative lg:flex lg:items-center lg:gap-[154px] lg:pt-[124px]">
          <Hero />
          <Body />
        </div>
      </main>
    </>
  )
}

export default App
