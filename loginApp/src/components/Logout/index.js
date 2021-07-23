import './index.css'

const Logout = props => {
  const {onClickFunction} = props
  return (
    <button onClick={onClickFunction} type="button" className="button">
      Logout
    </button>
  )
}

export default Logout
