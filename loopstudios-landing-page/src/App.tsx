import { Header } from "./components/Header"
import Hero from "./components/Hero"
import Description from "./components/Description"
import Creations from "./components/Creations"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Description />
      <Creations />
      <Footer />
    </main>
  )
}

export default App
