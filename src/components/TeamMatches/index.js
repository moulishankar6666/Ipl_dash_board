import {Component} from 'react'
import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

import './index.css'

const apiStatus = {
  initial: 'initial',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'failure',
}

class TeamMatches extends Component {
  state = {teamDetails: {}, status: apiStatus.initial}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    this.setState({status: apiStatus.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    try {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()
      this.setState({teamDetails: data, status: apiStatus.success})
    } catch (error) {
      this.setState({status: apiStatus.failure})
    }
  }

  onSuccessView = () => {
    const {teamDetails} = this.state
    const goToHome = () => {
      const {history} = this.props
      history.push('/')
    }

    return (
      <>
        <div className="team-banner-container">
          <img alt="team banner" src={teamDetails.team_banner_url} />
        </div>
        <LatestMatch latestMatch={teamDetails.latest_match_details} />
        <ul className="match-card-list">
          {teamDetails.recent_matches.map(eachMatch => (
            <MatchCard key={eachMatch.id} match={eachMatch} />
          ))}
        </ul>
        <button onClick={goToHome} className="back-button" type="button">
          Back
        </button>
      </>
    )
  }

  onProgressView = () => (
    <div testid="loader" className="loader-spinner">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderView = () => {
    const {status} = this.state
    switch (status) {
      case apiStatus.success:
        return this.onSuccessView()
      case apiStatus.progress:
        return this.onProgressView()
      default:
        return null
    }
  }

  render() {
    return <div className="ipl-team-details-container">{this.renderView()}</div>
  }
}
export default TeamMatches
