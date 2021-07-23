import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

const SEARCH_ICON =
  'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png'
class DestinationSearch extends Component {
  state = {value: '', currentData: []}

  componentDidMount = () => {
    const {initialDestinationsList} = this.props
    this.setState({currentData: initialDestinationsList})
  }

  updateSearchValue = event => {
    console.log(event.target.value)
    this.setState({value: event.target.value}, this.onSearchItems)
  }

  onSearchItems = () => {
    const {value} = this.state
    const {initialDestinationsList} = this.props
    const listOfData = initialDestinationsList.filter(listItem =>
      listItem.name.toLowerCase().includes(value),
    )
    this.setState({currentData: listOfData})
  }

  render() {
    const {value, currentData} = this.state
    return (
      <div className="app-container">
        <h1 className="app-heading">Destination Search</h1>
        <div className="search-box">
          <input
            className="input-field"
            type="search"
            value={value}
            onChange={this.updateSearchValue}
          />
          <img className="search-icon" src={SEARCH_ICON} alt="search icon" />
        </div>

        <ul className="search-results">
          {currentData.map(item => (
            <DestinationItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
