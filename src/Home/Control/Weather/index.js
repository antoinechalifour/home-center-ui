import React, { Component } from 'react'
import Weather from './Weather'

class GetPosition extends Component {
  state = { position: null }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.onPosition, this.onError)
  }

  onPosition = data => {
    const coords = data.coords
    const { latitude, longitude } = coords

    this.setState({
      position: { latitude, longitude }
    })
  }

  onError = err => {
    console.log(err)
  }

  render () {
    return this.state.position ? <Weather {...this.state.position} /> : null
  }
}

export default GetPosition
