import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <li className="app-item-container">
      <img src={imageUrl} className="app-item-img" alt={appName} />
      <p className="app-item-name">{appName}</p>
    </li>
  )
}

export default AppItem
