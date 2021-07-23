import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {currentRandomNumber: 0}

  generateRandomNumber = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({currentRandomNumber: num})
  }

  render() {
    const {currentRandomNumber} = this.state
    return (
      <div className="app-container">
        <div className="random-generator-block">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{currentRandomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
