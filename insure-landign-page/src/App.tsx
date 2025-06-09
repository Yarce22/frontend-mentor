import FindOut from "./components/FindOut";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWork from "./components/HowWork";

const App: React.FC = () => {
  return(
    <main>
      <Header />
      <Hero />
      <HowWork />
      <FindOut />
      <Footer />
    </main>
  )
}

export default App;