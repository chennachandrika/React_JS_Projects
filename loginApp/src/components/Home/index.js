import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  onClickIsLoginStatusChange = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="app-container">
        <Message isLogin={isLogin} />
        {isLogin ? (
          <Logout onClickFunction={this.onClickIsLoginStatusChange} />
        ) : (
          <Login onClickFunction={this.onClickIsLoginStatusChange} />
        )}
      </div>
    )
  }
}

export default Home
