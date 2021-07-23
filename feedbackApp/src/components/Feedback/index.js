import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {selectedFeedback: false}

  onSelectFeedback = () => {
    this.setState(prevState => ({
      selectedFeedback: !prevState.selectedFeedback,
    }))
  }

  performanceImageComponent = emojiData => {
    const {id, name, imageUrl} = emojiData
    return (
      <li className="emoji" id={id} key={id} onClick={this.onSelectFeedback}>
        <img className="emoji-img" src={imageUrl} alt={name} />
        <p className="emoji-name">{name}</p>
      </li>
    )
  }

  responseForFeedback = loveEmojiUrl => (
    <div className="response-feedback">
      <img className="response-image" src={loveEmojiUrl} alt="loveEmoji" />
      <h1 className="response-heading">Thank You!</h1>
      <p className="feedback-response">
        We will use your feedback to improve our support customer performance.
      </p>
    </div>
  )

  render() {
    const {selectedFeedback} = this.state
    const {feedbackData} = this.props
    const {emojis} = feedbackData
    const {loveEmojiUrl} = feedbackData
    return (
      <div className="app-container">
        <div className="feedBack-container">
          {!selectedFeedback ? (
            <>
              <h1 className="feedBack-heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-container">
                {emojis.map(emojiData =>
                  this.performanceImageComponent(emojiData),
                )}
              </ul>
            </>
          ) : (
            this.responseForFeedback(loveEmojiUrl)
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
