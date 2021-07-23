import './index.css'

const Login = props => {
  const {onClickFunction} = props
  return (
    <button onClick={onClickFunction} type="button" className="button">
      Login
    </button>
  )
}

export default Login
