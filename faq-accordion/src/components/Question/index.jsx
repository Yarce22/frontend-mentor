import { useState } from 'react'
import plusButton from './assets/images/icon-plus.svg'
import minusButton from './assets/images/icon-minus.svg'
import './style.css'

const Question = () => {
  const [isOpenButton, setIsOpenButton] = useState

  const toggleAnswer = () => {
    setIsOpenButton(!isOpenButton)
  }

  return (
    <div class="main-question-container">
      <div class="title-container" onClick={toggleAnswer}>
        <p class="title-question">What is Frontend Mentor, and how will it help me?</p>
        <div class="icons-container">
          {isOpenButton ? <img src={minusButton} alt="minus-icon" /> : <img src={plusButton} alt="minus-icon" />}
        </div>
      </div>
      <p class="answer-question" style={isOpenButton ? 'block' : 'none'}>
        Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.
      </p>
    </div>
  )
}

export default Question