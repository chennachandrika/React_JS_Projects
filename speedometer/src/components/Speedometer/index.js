import {Component} from 'react'
import './index.css'

const imgResource =
  'https://assets.ccbp.in/frontend/react-js/speedometer-img.png'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  increaseSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (speed >= 1) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speed-meter-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer-img"
          src={imgResource}
          alt="speedometerImg"
        />
        <h1 className="speed-display">{`Speed is ${speed}mph`}</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            onClick={this.increaseSpeed}
            className="accelerate-button"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.decreaseSpeed}
            className="apply-break-button"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
