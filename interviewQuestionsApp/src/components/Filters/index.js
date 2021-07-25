import {Component} from 'react'
import './index.css'

class Filters extends Component {
  onSelectLevel = event => {
    const {onSelectLevel} = this.props
    onSelectLevel(event.target.value)
  }

  onSelectLanguage = event => {
    const {onSelectLanguage} = this.props
    onSelectLanguage(event.target.value)
  }

  render() {
    const {levelsData, categoryData} = this.props
    return (
      <ul className="filter-bars-container">
        <li key="levels data">
          <select className="selector" onChange={this.onSelectLanguage}>
            {categoryData.map(languages => (
              <option value={languages.language}>{languages.language}</option>
            ))}
          </select>
        </li>
        <li key="category data">
          <select className="selector" onChange={this.onSelectLevel}>
            {levelsData.map(levels => (
              <option value={levels.level}>{levels.level}</option>
            ))}
          </select>
        </li>
      </ul>
    )
  }
}

export default Filters
