import {Link} from 'react-router-dom'
import './index.css'

const WAVE_LOGO = 'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'

const Header = () => (
  <nav className="header">
    <div className="header-container">
      <img className="wave-logo" src={WAVE_LOGO} alt="wave" />
      <h1 className="logo-name">Wave</h1>
    </div>
    <div className="header-container">
      <Link className="link-to-component" to="/">
        Home
      </Link>

      <Link className="link-to-component" to="/about">
        About
      </Link>

      <Link className="link-to-component" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
