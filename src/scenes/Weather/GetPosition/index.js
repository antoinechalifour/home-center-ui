import { Component } from 'react'
import PropTypes from 'prop-types'

export default class GetPosition extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = { position: null, err: null }

  onPosition = position => {
    const { latitude, longitude } = position.coords

    this.setState({ position: { latitude, longitude } })
  }

  onError = err => {
    this.setState({ err })
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.onPosition, this.onError)
  }

  render () {
    return this.props.render({
      err: this.state.err,
      position: this.state.position
    })
  }
}
