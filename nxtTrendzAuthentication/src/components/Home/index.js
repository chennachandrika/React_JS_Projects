import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="app-container">
    <Header />
    <div className="app-content-container">
      <div className="content">
        <h1>Clothes That Get You Noticed</h1>
        <img
          className="sm-clothes"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the times. Clothes always have been a marker of era and we
          are in a revolution. Your fashion makes you seen and heard that way
          you are. So, celebrate the season and new excitment fashion in your
          own way.
        </p>
        <button type="button" className="shop-button">
          Shop Now
        </button>
      </div>
      <img
        className="clothes"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)
export default Home
