import './index.css'

const Message = props => {
  const {isLogin} = props
  return (
    <h1 className="app-heading">{isLogin ? 'Welcome User' : 'Please Login'}</h1>
  )
}

export default Message
