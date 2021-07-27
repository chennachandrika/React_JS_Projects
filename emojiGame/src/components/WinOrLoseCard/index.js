import './index.css'

const WON_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {onClickPalyAgain, score, scoreToWin} = props
  const isWon = score === scoreToWin
  return (
    <div className="win-or-lose-display-container">
      <img
        className="win-or-lose-img"
        src={isWon ? WON_IMG : LOSE_IMG}
        alt="win or lose"
      />
      <h1 className="game-status">{isWon ? 'You Won' : 'You Lose'}</h1>
      <div className="score-details">
        <p className="score-heading">{isWon ? `Best Score` : `Score`}</p>
        <p className="score">{`${score}/12`}</p>
      </div>

      <button
        className="play-again-button"
        type="button"
        onClick={onClickPalyAgain}
      >
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
