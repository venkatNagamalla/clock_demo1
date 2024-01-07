// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {isStarted: false, minutes: 25, seconds: 0}
  }

  onClickStart = () => {
    const {isStarted} = this.state

    this.setState({isStarted: !isStarted})
  }

  onReset = () => {
    console.log(':')
  }

  compunentDidMount() {
    const {seconds, minutes} = this.state
  }

  render() {
    const {isStarted, minutes} = this.state

    const startMess = isStarted ? 'Pause' : 'Start'
    const startImg = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const timeStatus = isStarted ? 'Running' : 'Paused'

    return (
      <div className="bg-container">
        <h1 className="digital-timer-heading">Digital Timer</h1>
        <div className="clock-container">
          <div className="clock-background">
            <div className="card-container">
              <p className="time">
                {minutes} : {0}
              </p>
              <p className="time-status">{timeStatus}</p>
            </div>
          </div>
          <div className="timer-container">
            <div className="two-btn-container">
              <div className="btn-container">
                <button className="play-button" type="button">
                  <img
                    onClick={this.onClickStart}
                    className="btn-status"
                    src={startImg}
                    alt="play icon"
                  />
                </button>
                <p className="btn-text">{startMess}</p>
              </div>
              <div className="btn-container">
                <button
                  onClick={this.onReset}
                  className="play-button"
                  type="button"
                >
                  <img
                    className="btn-status"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="play icon"
                  />
                </button>
                <p className="btn-text">Reset</p>
              </div>
            </div>
            <p className="set-timer-text">Set Timer Limit</p>
            <div className="setting-timer">
              <button
                onClick={() =>
                  this.setState(prevState => ({minutes: prevState.minutes - 1}))
                }
                className="set-btn"
                type="button"
              >
                -
              </button>
              <div className="timer">
                <p>{minutes}</p>
              </div>
              <button
                onClick={() =>
                  this.setState(prevState => ({minutes: prevState.minutes + 1}))
                }
                className="set-btn"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
