import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = props => {
  const onClickLogin = async () => {
    const {history} = props
    const options = {
      method: 'POST',
      body: JSON.stringify({username: 'rahul', password: 'rahul@2021'}),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const jwtToken = await response.json()

    if (response.ok === true) {
      Cookies.set('jwt_token', jwtToken.jwt_token, {
        expires: 30,
      })
      history.replace('/')
    }
  }
  if (Cookies.get('jwt_token')) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button onClick={onClickLogin} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
