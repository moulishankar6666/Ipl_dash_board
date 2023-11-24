import './index.css'

const MatchCard = props => {
  const {match} = props
  console.log(match)
  return (
    <li className="match-card-container">
      <img src={match.competing_team_logo} alt={match.competing_team} />
      <p>{match.competing_team}</p>
      <p>{match.result}</p>
      <p style={{color: match.match_status === 'Won' ? 'green' : 'red'}}>
        {match.match_status}
      </p>
    </li>
  )
}
export default MatchCard
