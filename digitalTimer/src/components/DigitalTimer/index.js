import {Component} from 'react'
import './index.css'

const PLAY = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
const PAUSE = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
const RESET = 'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png'

class DigitalTimer extends Component {
  state = {
    minutesTimerCount: 25,
    secondsTimerCount: 0,
    isPaused: true,
    timeIntervalId: '',
    minutesTimeLimit: 25,
  }

  pauseTheTimer = () => {
    const {timeIntervalId} = this.state
    this.setState({timeIntervalId, isPaused: true})

    clearInterval(timeIntervalId)
  }

  startTheTimer = () => {
    this.setState({isPaused: false})
    this.initializationOfTimer()
  }

  initializationOfTimer = () => {
    const timeIntervalId = setInterval(() => {
      const {minutesTimerCount, secondsTimerCount} = this.state
      if (minutesTimerCount === 0 && secondsTimerCount === 0) {
        this.pauseTheTimer()
      } else if (secondsTimerCount === 0) {
        this.setState(prevState => ({
          minutesTimerCount: prevState.minutesTimerCount - 1,
          secondsTimerCount: 59,
        }))
      } else if (secondsTimerCount > 0) {
        this.setState(prevState => ({
          secondsTimerCount: prevState.secondsTimerCount - 1,
        }))
      }
    }, 1000)
    this.setState({timeIntervalId})
  }

  resetTimer = () => {
    this.pauseTheTimer()
    this.setState({
      minutesTimerCount: 25,
      secondsTimerCount: 0,
      isPaused: true,
    })
  }

  updateMinutesTimeCounter = () => {
    const {minutesTimeLimit} = this.state
    this.setState({
      minutesTimerCount: minutesTimeLimit,
    })
  }

  incrementTimer = () => {
    this.setState(
      prevState => ({
        minutesTimeLimit: prevState.minutesTimeLimit + 1,
      }),
      this.updateMinutesTimeCounter,
    )
  }

  decrementTimer = () => {
    const {minutesTimeLimit} = this.state
    if (minutesTimeLimit > 0) {
      this.setState(
        prevState => ({
          minutesTimeLimit: prevState.minutesTimeLimit - 1,
        }),
        this.updateMinutesTimeCounter,
      )
    }
  }

  render() {
    const {
      minutesTimerCount,
      secondsTimerCount,
      isPaused,
      minutesTimeLimit,
    } = this.state
    return (
      <div className="app-container">
        <h1>Digital Timer</h1>

        <div className="timer-container">
          <div className="timer-block">
            <div className="timer-bg">
              <h1 className="time-interval">
                {minutesTimerCount <= 9
                  ? `0${minutesTimerCount}`
                  : minutesTimerCount}
                :
                {secondsTimerCount <= 9
                  ? `0${secondsTimerCount}`
                  : secondsTimerCount}
              </h1>
              <p className="text">{isPaused ? 'Paused' : 'Running'}</p>
            </div>
          </div>

          <div>
            <div className="pause-start-reset-container">
              <button
                type="button"
                className="button button-container"
                onClick={isPaused ? this.startTheTimer : this.pauseTheTimer}
              >
                <img
                  className="icon"
                  src={isPaused ? PLAY : PAUSE}
                  alt={isPaused ? 'play icon' : 'pause icon'}
                />
                <p className="text">{isPaused ? 'Start' : 'Pause'}</p>
              </button>

              <button
                className="button button-container"
                type="button"
                onClick={this.resetTimer}
              >
                <img className="icon" src={RESET} alt="reset icon" />
                <p className="text">Reset</p>
              </button>
            </div>

            <div className="timer-limit-container">
              <p>Set Timer Limit</p>
              <div className="increment-decrement-timer">
                <button
                  className="button"
                  type="button"
                  onClick={this.decrementTimer}
                  disabled={!isPaused}
                >
                  -
                </button>
                <p className="timer-limit">{minutesTimeLimit}</p>
                <button
                  className="button"
                  type="button"
                  onClick={this.incrementTimer}
                  disabled={!isPaused}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
