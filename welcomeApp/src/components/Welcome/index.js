import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onChangeSubscriptionStatus = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button
          type="button"
          className="button"
          onClick={this.onChangeSubscriptionStatus}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
