import { Image } from './components/Image'
import { Info } from './components/Info'
import { Logo } from './components/Logo'
import pointsImg from './assets/desktop/bg-pattern-dots.svg'

function App() {

  return (
    <>
      <main className='relative w-full h-[100vh] font-Chivo md:bg-Blue950 md:pb-[156px]'>
        <Image />
        <div className='absolute flex flex-col justify-center items-center md:items-start w-full h-[100vh] p-9 md:px-11 z-10 bg-OpacityBlue950 md:bg-transparent lg:ml-40'>
          <Logo />
          <Info />
        </div>
        <div className='hidden md:block md:absolute md:bottom-32 md:-right-32 lg:right-0 lg:bottom-[6.5rem]'>
          <img src={pointsImg} alt="pattern" />
        </div>
      </main>
    </>
  )
}

export default App
