import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCounter = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="heading">
          The Button has been clicked
          <br />
          <span className="counter"> {` ${count} `} </span>
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.increaseCounter}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
