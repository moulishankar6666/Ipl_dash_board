import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  return (
    <div className="latest-Matches-container">
      <p>Latest Matches</p>
      <div className="latest-match-info-top">
        <div className="competing-team-details-and-logo">
          <div className="competing-team-details">
            <p className="competing-team-imp-details">
              {latestMatch.competing_team}
            </p>
            <p className="competing-team-imp-details">{latestMatch.date}</p>
            <p>{latestMatch.venue}</p>
            <p>{latestMatch.result}</p>
          </div>
          <img
            alt={`latest match ${latestMatch.competing_team}`}
            src={latestMatch.competing_team_logo}
          />
        </div>
        <hr className="hr-line" />
        <div className="latest-match-info-bottom">
          <p>First Innings</p>
          <p>{latestMatch.first_innings}</p>
          <p>Second Innings</p>
          <p>{latestMatch.second_innings}</p>
          <p>Man of The Match</p>
          <p>{latestMatch.man_of_the_match}</p>
          <p>Umpires</p>
          <p>{latestMatch.umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
