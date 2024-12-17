import Question from './components/Question'
import starIcon from "./assets/images/icon-star.svg"
import questions from "./utils/questions/questions"
import './App.css'

const App = () => {
  return (
    <>
      <section className="main-container-accordion">
        <div className="icon-container">
          <img src={starIcon} alt="star-icon" />
          <h1>FAQs</h1>
        </div>
        {questions.map((question) => (
          <Question 
            key={question.title}
            title={question.title}
            answer={question.answer}
          />
        ))}
	    </section>
      <p className='footer'>Challenge by <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. Coded by <a href="https://www.frontendmentor.io/profile/Yarce22">Yarce22</a></p>
    </>
  )
}

export default App
