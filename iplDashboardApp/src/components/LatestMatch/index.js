import './index.css'

const LatestMatch = props => {
  const {matchData} = props
  const {
    umpires,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    result,
  } = matchData
  return (
    <div className="latest-match-details">
      <div className="details-part1">
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="completing-team-logo"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <hr className="horizontal-line" />
      <div className="details-part2">
        <div className="in-detailed-details">
          <h1>First Inning</h1>
          <p>{firstInnings}</p>
        </div>
        <div className="in-detailed-details">
          <h1>Second Inning</h1>
          <p>{secondInnings}</p>
        </div>
        <div className="in-detailed-details">
          <h1>Man Of The Match</h1>
          <p>{manOfTheMatch}</p>
        </div>
        <div className="in-detailed-details">
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
