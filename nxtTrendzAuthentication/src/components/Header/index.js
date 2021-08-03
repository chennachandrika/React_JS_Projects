import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="header">
      <img
        className="site-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="links-to-other">
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/products">
          <li>Products</li>
        </Link>
        <Link className="link" to="/cart">
          <li>Cart</li>
        </Link>
        <button type="button" className="button">
          <li>Logout</li>
        </button>
      </ul>
      <Link className="sm-logout-button" to="/login">
        <img
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
          alt="nav logout"
        />
      </Link>
    </nav>
    <nav className="sm-nav-bar">
      <Link className="link" to="/">
        <img
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
        />
      </Link>
      <Link className="link" to="/products">
        <img
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
      </Link>
      <Link className="link" to="/cart">
        <img
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
      </Link>
    </nav>
  </>
)

export default Header
