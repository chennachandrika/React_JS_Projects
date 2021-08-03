import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorText: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameInputUI = () => {
    const {username} = this.state
    return (
      <div className="input-field">
        <label htmlFor="username">USERNAME</label>
        <br />
        <input
          id="username"
          type="text"
          className="input"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="USERNAME"
        />
      </div>
    )
  }

  renderPasswordInputUI = () => {
    const {password} = this.state
    return (
      <div className="input-field">
        <label htmlFor="password">PASSWORD</label>
        <br />
        <input
          id="password"
          type="password"
          className="input"
          value={password}
          onChange={this.onChangePassword}
          placeholder="PASSWORD"
        />
      </div>
    )
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorText: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const requestObj = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(requestObj),
    }
    const promise = await fetch('https://apis.ccbp.in/login', options)
    const response = await promise.json()
    if (promise.ok === true) {
      this.onSuccess()
    } else {
      this.onFailure(response.error_msg)
    }
  }

  renderLoginForm = () => {
    const {errorText} = this.state
    return (
      <form className="login-form" onSubmit={this.onSubmitForm}>
        {this.renderUsernameInputUI()}
        {this.renderPasswordInputUI()}
        <button className="button" type="submit">
          Login
        </button>
        <p className="error-text">{errorText && errorText}</p>
      </form>
    )
  }

  render() {
    return (
      <div className="login-container">
        <img
          className="sm-website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="login-form-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          {this.renderLoginForm()}
        </div>
      </div>
    )
  }
}

export default LoginForm
