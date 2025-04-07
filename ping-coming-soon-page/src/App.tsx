import { Dashboard } from "./components/Dashboard"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"

const App = () => {
  return (
    <main className="flex flex-col items-center justify-between h-screen px-7 pt-20 pb-9 lg:px-[400px] lg:pt-20 lg:pb-12 font-Main text-Dark-Blue text-xl">
      <Hero />
      <Dashboard />
      <Footer />
    </main>
  )
}

export default App