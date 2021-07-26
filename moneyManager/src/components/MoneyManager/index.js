import {Component} from 'react'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  renderAppHeading = () => (
    <div>
      <h1>Hi, Richard</h1>
      <p>
        Welcome back to your <span>Money Manager</span>
      </p>
    </div>
  )

  render() {
    return <div className="app-container">{this.renderAppHeading()}</div>
  }
}

export default MoneyManager
