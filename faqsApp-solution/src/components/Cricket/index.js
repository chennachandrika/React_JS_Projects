import {Component} from 'react'

class CricketComponent extends Component {
  state = {
    score: 194,
  }

  onHitSix = () => {
    this.state.score += 6
  }

  show = () => {
    this.setState(prevState => ({score: prevState.score + 6}))
  }

  render() {
    const {score} = this.state
    console.log(score)
    return (
      <>
        <h1>Total score: {score}</h1>
        <button type="button" onClick={this.onHitSix}>
          Hit Six
        </button>
        <button type="button" onClick={this.show}>
          show
        </button>
      </>
    )
  }
}

export default CricketComponent
