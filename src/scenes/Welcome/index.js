import React, { Component } from 'react'
import Welcome from './Welcome'

export default class WelcomeContainer extends Component {
  state = {
    date: new Date()
  }

  componentDidMount () {
    this._interval = window.setInterval(this._updateDate, 360000)
  }

  componentWillUnmount () {
    window.clearInterval(this._interval)
  }

  _updateDate = () => {
    this.setState({ date: new Date() })
  }

  render () {
    return <Welcome {...this.props} date={this.state.date} />
  }
}
