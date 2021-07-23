import './index.css'

const DestinationItem = props => {
  const {data} = props
  const {name, imgUrl} = data
  return (
    <li className="destination-card">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
