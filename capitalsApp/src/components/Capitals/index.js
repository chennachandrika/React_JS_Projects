import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapitalId: countryAndCapitalsList[0].id}

  onSelectOtherCapital = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  renderCountryName = () => {
    const {selectedCapitalId} = this.state
    const countryData = countryAndCapitalsList.find(
      eachData => eachData.id === selectedCapitalId,
    )
    return countryData.country
  }

  render() {
    return (
      <div className="app-container">
        <div className="question-card">
          <h1 className="question-card-heading">Countries And Capitals</h1>
          <div className="capital-block">
            <select className="drop-down" onChange={this.onSelectOtherCapital}>
              {countryAndCapitalsList.map(data => (
                <option key={data.id} value={data.id}>
                  {data.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <h1 className="country-name">{this.renderCountryName()}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
