import { Image } from './components/Image'
import { Info } from './components/Info'
import { Logo } from './components/Logo'

function App() {

  return (
    <>
      <main className='relative w-full h-[100vh] font-Chivo'>
        <Image />
        <div className='absolute flex flex-col justify-center items-center w-full h-[100vh] p-9 z-10 bg-OpacityBlue950'>
          <Logo />
          <Info />
        </div>
      </main>
    </>
  )
}

export default App
