import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameVisible: false,
    isLastNameVisible: false,
  }

  onChangeStatusOfFirstName = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  onChangeStatusOfLastName = () => {
    this.setState(prevState => ({
      isLastNameVisible: !prevState.isLastNameVisible,
    }))
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state
    return (
      <div className="app-container">
        <h1 className="app-heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-block">
            <button
              type="button"
              className="button"
              onClick={this.onChangeStatusOfFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameVisible && <p className="description name">Joe</p>}
          </div>
          <div className="name-block">
            <button
              type="button"
              className="button"
              onClick={this.onChangeStatusOfLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastNameVisible && <p className="description name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
