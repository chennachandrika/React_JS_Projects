import {Component} from 'react'
import './index.css'

const BLUE_CUP =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
const WHITE_CUP =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'

class QuestionOption extends Component {
  onClickOption = () => {
    const {optionDetails, updateSelectedCoffeePlan, questionType} = this.props
    const {optionTitle} = optionDetails

    updateSelectedCoffeePlan(questionType, optionTitle)
  }

  render() {
    const {optionDetails, selectedOption} = this.props
    const {optionTitle, description} = optionDetails
    const isOptionSelected = optionTitle === selectedOption

    const optionClassName = isOptionSelected
      ? 'question-option-card active'
      : 'question-option-card'
    const optionTitleClassName = isOptionSelected
      ? 'option-title selected-option-title'
      : 'option-title'
    const optionDescriptionClassName = isOptionSelected
      ? 'option-description selected-option-description'
      : 'option-description'

    return (
      <li className={optionClassName}>
        <button className="button" type="button" onClick={this.onClickOption}>
          <div className="card-header">
            <h1 className={optionTitleClassName}>{optionTitle}</h1>
            <img
              className="cup-img"
              src={isOptionSelected ? WHITE_CUP : BLUE_CUP}
              alt={isOptionSelected ? `white cup` : `blue cup`}
            />
          </div>
          <p className={optionDescriptionClassName}>{description}</p>
        </button>
      </li>
    )
  }
}

export default QuestionOption
