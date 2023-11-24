import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const apiStatus = {
  initial: 'initial',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'failure',
}

class Home extends Component {
  state = {teamsList: [], status: apiStatus.initial}

  componentDidMount() {
    this.teamsApiUrl()
  }

  teamsApiUrl = async () => {
    this.setState({status: apiStatus.progress})

    try {
      const response = await fetch('https://apis.ccbp.in/ipl')
      const data = await response.json()
      //   const updateData = data.teams.map(eachTeam => this.changeCase(eachTeam))
      this.setState({teamsList: data.teams, status: apiStatus.success})
    } catch (error) {
      this.setState({status: apiStatus.failure})
    }
  }

  onSuccessView = () => {
    const {teamsList} = this.state
    return (
      <ul className="ipl-teams-container">
        {teamsList.map(eachTeam => (
          <TeamCard key={eachTeam.id} team={eachTeam} />
        ))}
      </ul>
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
    return (
      <div className="ipl-dash-board-container">
        <div className="ipl-title-container">
          <img
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {this.renderView()}
      </div>
    )
  }
}
export default Home
