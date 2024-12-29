import { Provider } from './assets/Providers'
import RatingCard from './components/RatingCard'
import ThanksCard from './components/ThanksCard'
import './App.css'

function App() {
  return (
    <Provider>
      <section className='grid place-items-center h-[100vh] px-6 bg-VeryDarkBlue text-[15px] font-Overpass'>
        <RatingCard />
        <ThanksCard />
      </section>
    </Provider>
  )
}

export default App
