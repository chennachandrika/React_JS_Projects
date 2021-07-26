import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    return (
      <div className="app-container">
        <NavBar />
      </div>
    )
  }
}

export default EmojiGame
