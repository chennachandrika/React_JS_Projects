import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAns: false}

  changeShowAnsStatus = () => {
    this.setState(prevState => ({showAns: !prevState.showAns}))
  }

  render() {
    const {showAns} = this.state
    const {data} = this.props
    const {questionText, answerText} = data
    return (
      <li className="faq-item-container">
        <div className="question-container">
          <h1 className="faq-question">{questionText}</h1>
          {showAns ? (
            <button
              className="button"
              onClick={this.changeShowAnsStatus}
              type="button"
            >
              <img
                className="img-icon"
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            </button>
          ) : (
            <button
              className="button"
              onClick={this.changeShowAnsStatus}
              type="button"
            >
              <img
                className="img-icon"
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            </button>
          )}
        </div>
        {showAns && (
          <div>
            <hr className="hr-line" />
            <p className="faq-ans">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
