import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'
import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectedCoffeePlan: {
      DRINK_TYPE: '',
      COFFEE_TYPE: '',
      QUANTITY: '',
      GRIND_TYPE: '',
      DELIVER_TYPE: '',
    },
    showSummary: false,
  }

  setShowSummary = value => {
    this.setState({showSummary: value})
  }

  isAllOptionsSelected = () => {
    const {selectedCoffeePlan} = this.state
    const {
      DRINK_TYPE,
      COFFEE_TYPE,
      QUANTITY,
      GRIND_TYPE,
      DELIVER_TYPE,
    } = selectedCoffeePlan

    if (
      DRINK_TYPE !== '' &&
      COFFEE_TYPE !== '' &&
      QUANTITY !== '' &&
      GRIND_TYPE !== '' &&
      DELIVER_TYPE !== ''
    ) {
      return true
    }

    return false
  }

  renderSummarySection = () => {
    const {selectedCoffeePlan, showSummary} = this.state

    if (showSummary) {
      return (
        <div className="summary-container">
          {this.isAllOptionsSelected() ? (
            <p className="summary">
              I Drink my coffee as
              <span className="selected-value">
                {` ${selectedCoffeePlan.DRINK_TYPE}`}
              </span>
              , with a
              <span className="selected-value">
                {` ${selectedCoffeePlan.COFFEE_TYPE} `}
              </span>
              type of bean.
              <span className="selected-value">
                {` ${selectedCoffeePlan.QUANTITY} `}
              </span>
              of
              <span className="selected-value">
                {` ${selectedCoffeePlan.GRIND_TYPE} `}
              </span>
              ground, send to me
              <span className="selected-value">
                {` ${selectedCoffeePlan.DELIVER_TYPE}`}
              </span>
              .
            </p>
          ) : (
            <p className="summary">
              Kindly select options for all the questions.
            </p>
          )}
        </div>
      )
    }
    return null
  }

  onClickCreateMyPlan = () => {
    this.setShowSummary(true)
  }

  updateSelectedCoffeePlan = (questionType, optionTitle) => {
    const {selectedCoffeePlan} = this.state
    const newSelectedCoffeePlan = {...selectedCoffeePlan}
    newSelectedCoffeePlan[questionType] = optionTitle
    this.setState({selectedCoffeePlan: newSelectedCoffeePlan})
    this.setShowSummary(false)
  }

  getSelectedOption = questionType => {
    const {selectedCoffeePlan} = this.state

    return selectedCoffeePlan[questionType]
  }

  render() {
    const {coffeePlannerList} = this.props
    return (
      <div className="app-container">
        <div className="coffee-app-banner">
          <h1 className="banner-heading">Create a Plan</h1>
          <p className="banner-description">
            We offer the assortment of best artesian coffees from the globe
            delivered fresh to the door create your plan with this.
          </p>
        </div>
        <ul className="coffee-questions-lists">
          {coffeePlannerList.map(listItem => (
            <CoffeePlannerQuestion
              key={listItem.id}
              questionDetails={listItem}
              getSelectedOption={this.getSelectedOption}
              updateSelectedCoffeePlan={this.updateSelectedCoffeePlan}
            />
          ))}
        </ul>
        <button
          onClick={this.onClickCreateMyPlan}
          className="create-my-plan-button"
          type="button"
        >
          Create my plan
        </button>
        {this.renderSummarySection()}
      </div>
    )
  }
}

export default CoffeePlanner
