import { Background } from './components/Background/Background'
import { Body } from './components/Body/Body'
import './App.css'

function App() {
  return (
    <main className="relative w-screen h-screen px-6 text-white -z-20 font-Poppins bg-Red">
      <Background />
      <Body />
    </main>
  )
}

export default App
