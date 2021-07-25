import {Component} from 'react'
import './index.css'

const UP_ARROW = 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
const DOWN_ARROW = 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'

class InterviewQuestion extends Component {
  state = {isAnswerVisible: false}

  toggleTheAnswerVisibility = () => {
    this.setState(prevState => ({isAnswerVisible: !prevState.isAnswerVisible}))
  }

  render() {
    const {questionData} = this.props
    const {isAnswerVisible} = this.state
    const {questionText, answerText, language, difficultyLevel} = questionData
    return (
      <li className="question-card">
        <p className="text">
          <span className="span-ele">{difficultyLevel}</span>
          <span className="span-ele">{language}</span>
        </p>

        <h1 className="question-text">{questionText}</h1>
        <button
          className="button"
          type="button"
          onClick={this.toggleTheAnswerVisibility}
        >
          <p className="text">{isAnswerVisible ? 'Hide' : 'Show'}</p>
          <img
            className="drop-down-cap"
            src={isAnswerVisible ? UP_ARROW : DOWN_ARROW}
            alt={isAnswerVisible ? 'up arrow' : 'down arrow'}
          />
        </button>
        {isAnswerVisible && <p>{answerText}</p>}
      </li>
    )
  }
}

export default InterviewQuestion
