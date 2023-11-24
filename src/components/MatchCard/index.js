import './index.css'

const MatchCard = props => {
  const {match} = props
  return (
    <li className="match-card-container">
      <img src={match.competing_team_logo} alt={match.competing_team} />
      <p>{match.competing_team}</p>
      <p>{match.result}</p>
      <p>{match.status}</p>
    </li>
  )
}
export default MatchCard
