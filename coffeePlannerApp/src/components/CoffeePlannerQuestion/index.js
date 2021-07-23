import {Component} from 'react'
import QuestionOption from '../QuestionOption'
import './index.css'

class CoffeePlannerQuestion extends Component {
  render() {
    const {
      questionDetails,
      getSelectedOption,
      updateSelectedCoffeePlan,
    } = this.props
    const {questionTitle, optionsList, questionType} = questionDetails
    const selectedOption = getSelectedOption(questionType)
    return (
      <li>
        <h1 className="question-text">{questionTitle}</h1>
        <ul className="question-options-container">
          {optionsList.map(optionDetails => (
            <QuestionOption
              key={optionDetails.id}
              optionDetails={optionDetails}
              questionType={questionType}
              selectedOption={selectedOption}
              updateSelectedCoffeePlan={updateSelectedCoffeePlan}
            />
          ))}
        </ul>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
