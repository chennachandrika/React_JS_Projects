import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, teamImageUrl, name} = teamData
  return (
    <Link to={`/team-matches/${id}`} className="link-to-card">
      <li className="team-card">
        <img className="team-img" src={teamImageUrl} alt={name} />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
