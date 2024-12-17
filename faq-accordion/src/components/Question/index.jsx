import { useState } from 'react'
import PropTypes from 'prop-types'
import plusButton from '../../assets/images/icon-plus.svg'
import minusButton from '../../assets/images/icon-minus.svg'
import './style.css'

const Question = ({ title, answer }) => {
  const [isOpenButton, setIsOpenButton] = useState(false)

  const toggleAnswer = () => {
    setIsOpenButton(!isOpenButton)
  }

  return (
    <div className="main-question-container">
      <div className="title-container" onClick={toggleAnswer}>
        <p className="title-question">{title}</p>
        <div className="icons-container">
          {isOpenButton ? <img src={minusButton} alt="minus-icon" /> : <img src={plusButton} alt="minus-icon" />}
        </div>
      </div>
      <p className="answer-question" style={{ display: isOpenButton ? 'block' : 'none' }}>
        {answer}
      </p>
    </div>
  )
}

Question.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
};

export default Question