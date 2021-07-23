import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  onChangeMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const activeClass = isLightMode ? 'light-mode-styles' : 'dark-mode-styles'
    let classes = ['main-container']
    classes.push(activeClass)
    classes = classes.join(' ')
    return (
      <div className="bg-container">
        <div className={classes}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onChangeMode}>
            {isLightMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
