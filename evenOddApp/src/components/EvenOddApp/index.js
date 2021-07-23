import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrementWithRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100)
    this.setState(
      prevState => ({count: prevState.count + randomNum}),
      this.isCountEven,
    )
  }

  isCountEven = () => {
    const {count} = this.state
    this.setState({isEven: count % 2 === 0})
  }

  render() {
    const {count, isEven} = this.state
    return (
      <div className="app-container">
        <div className="app-counter-card">
          <h1>{`Count ${count}`}</h1>
          <p>{`Count is ${isEven ? 'Even' : 'Odd'}`}</p>
          <button
            className="button"
            type="button"
            onClick={this.onIncrementWithRandomNum}
          >
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
