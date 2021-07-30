import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamMatchesData()
  }

  setDataToLocalVariables = (formattedResponse, isLoading) => {
    this.setState({teamMatchesData: formattedResponse, isLoading})
  }

  formateMatchData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  formateLatestMatchData = data => this.formateMatchData(data)

  formateRecentMatchesData = recentTeamMatches =>
    recentTeamMatches.map(matchesData => this.formateMatchData(matchesData))

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const promise = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const response = await promise.json()
    const formattedResponse = {
      teamBannerUrl: response.team_banner_url,
      latestMatchDetails: this.formateLatestMatchData(
        response.latest_match_details,
      ),
      recentMatches: this.formateRecentMatchesData(response.recent_matches),
    }

    this.setDataToLocalVariables(formattedResponse, false)
  }

  renderLoaderUI = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderLatestMatchUI = () => {
    const {teamMatchesData} = this.state
    const {latestMatchDetails} = teamMatchesData
    return <LatestMatch matchData={latestMatchDetails} />
  }

  renderRecentMatchesUI = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData
    return (
      <ul className="recent-match-details">
        {recentMatches.map(match => (
          <MatchCard key={match.id} matchDetails={match} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, teamMatchesData} = this.state
    const {teamBannerUrl, id} = teamMatchesData
    return (
      <div className="team-matches-details-container">
        {isLoading ? (
          this.renderLoaderUI()
        ) : (
          <>
            <img className="team-banner" src={teamBannerUrl} alt={id} />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            {this.renderLatestMatchUI()}
            {this.renderRecentMatchesUI()}
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
