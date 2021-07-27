import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {score: 0, totalScore: 0, isPlaying: true}
    this.selectedEmoji = []
  }

  onClickPalyAgain = () => {
    this.selectedEmoji = []
    this.setState({isPlaying: true, score: 0})
  }

  onSelectEmoji = id => () => {
    const {emojisList} = this.props
    const {score, totalScore} = this.state
    if (this.selectedEmoji.includes(id)) {
      if (score > totalScore) {
        this.setState({totalScore: score, isPlaying: false})
      }
    } else {
      this.selectedEmoji = [...this.selectedEmoji, id]
      this.setState(prevState => ({score: prevState.score + 1}))
      if (this.selectedEmoji.length === emojisList.length) {
        this.setState({isPlaying: false, totalScore: this.selectedEmoji.length})
      }
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    emojisList.sort(() => Math.random() - 0.5)
    return emojisList.map(emoji => (
      <EmojiCard
        key={emoji.id}
        emojiDetails={emoji}
        onSelectEmoji={this.onSelectEmoji}
      />
    ))
  }

  render() {
    const {isPlaying, score, totalScore} = this.state
    const {emojisList} = this.props
    return (
      <div className="app-container">
        <NavBar isPlaying={isPlaying} score={score} totalScore={totalScore} />
        <div className="emoji-game-container">
          {isPlaying ? (
            <ul className="shuffled-emoji">{this.shuffledEmojisList()}</ul>
          ) : (
            <WinOrLoseCard
              onClickPalyAgain={this.onClickPalyAgain}
              score={score}
              scoreToWin={emojisList.length}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
