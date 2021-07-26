import './index.css'

const EMOJI_GAME_LOGO =
  'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'

const NavBar = () => (
  <div className="navbar-container">
    <div className="navbar-containers">
      <img
        className="emoji-game-logo"
        src={EMOJI_GAME_LOGO}
        alt="emoji game logo"
      />
      <h1 className="emoji-game-navbar-heading">Emoji Game</h1>
    </div>
    <div className="navbar-containers">
      <p>Score</p>
      <p>Top Score</p>
    </div>
  </div>
)

export default NavBar
