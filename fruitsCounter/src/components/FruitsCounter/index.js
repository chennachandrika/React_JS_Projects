import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  incrementMangoesCount = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  incrementBananasCount = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="count">{` ${mangoesCount} `}</span> mangoes{' '}
            <span className="count">{` ${bananasCount} `}</span>bananas
          </h1>
          <div className="fruits-container">
            <div className="card">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.incrementMangoesCount}
                className="button"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.incrementBananasCount}
                className="button"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
