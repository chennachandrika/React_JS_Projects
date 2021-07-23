import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    this.setState({timeElapsedInSeconds: 0})
    clearInterval(this.timeInterval)
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    return (
      <div className="app-container">
        <h1>Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="stopwatch-sub-heading">
            <img
              className="time-icon"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch timer"
            />
            <p className="text">Timer</p>
          </div>
          <h1 testid="timer">
            {this.renderMinutes()}:{this.renderSeconds()}
          </h1>
          <div className="timer-functionality-container">
            <button
              onClick={this.onStartTimer}
              className="button start-button"
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.onStopTimer}
              className="button stop-button"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.onResetTimer}
              className="button reset-button"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
