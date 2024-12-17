import Question from './components/Question'
import starIcon from "./assets/images/icon-star.svg"
import './App.css'

const App = () => {
  return (
    <>
      <section className="main-container-accordion">
        <div className="icon-container">
          <img src={starIcon} alt="star-icon" />
          <h1>FAQs</h1>
        </div>
        <Question />
	    </section>
    </>
  )
}

export default App
