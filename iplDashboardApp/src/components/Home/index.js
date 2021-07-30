import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

const IPL_LOGO = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount = () => {
    this.getTeamsDate()
  }

  setDataToLocalVariables = (formattedResponse, isLoading) => {
    this.setState({teamsData: formattedResponse, isLoading})
  }

  formateResponse = teamsData =>
    teamsData.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))

  getTeamsDate = async () => {
    const promise = await fetch('https://apis.ccbp.in/ipl')
    const response = await promise.json()
    const formattedResponse = this.formateResponse(response.teams)
    this.setDataToLocalVariables(formattedResponse, false)
  }

  renderLoaderUI = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderTeamCardsUI = () => {
    const {teamsData} = this.state
    return teamsData.map(team => <TeamCard key={team.id} teamData={team} />)
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-dashboard-heading">
          <img src={IPL_LOGO} className="ipl-logo" alt="ipl-logo" />{' '}
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-data">
          {isLoading ? this.renderLoaderUI() : this.renderTeamCardsUI()}
        </ul>
      </div>
    )
  }
}

export default Home
