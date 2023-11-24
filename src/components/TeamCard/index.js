import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {team} = props
  const {name, id} = team
  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img src={team.team_image_url} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
