import { Component } from 'react'
import PropTypes from 'prop-types'

export default class GetPosition extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = { position: null }

  onPosition = position => {
    const { latitude, longitude } = position.coords

    this.setState({ position: { latitude, longitude } })
  }

  onError = () => {
    this.setState({
      position: {
        latitude: null,
        longitude: null
      }
    })
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.onPosition, this.onError)
  }

  render () {
    return this.props.render({
      position: this.state.position
    })
  }
}
