import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import debounce from 'debounce'
import { setBrightness, updateLightInformation } from 'queries/lights'
import DimmableLight from './DimmableLight'

export class DimmableLightContainer extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    bri: PropTypes.number.isRequired,
    setBrightness: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      value: this.props.bri
    }

    this._commitBrightness = debounce(this._commitBrightness.bind(this), 500)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.bri) {
      this.setState({ value: nextProps.bri })
    }
  }

  _onUpdateBrightness = value => {
    this.setState({ value }, this._commitBrightness)
  }

  _commitBrightness = () => {
    this.props.setBrightness({
      variables: {
        input: {
          id: this.props.id,
          bri: Math.round(this.state.value)
        }
      }
    })
  }

  render () {
    return (
      <DimmableLight
        {...this.props}
        bri={this.state.value}
        updateBrightness={this._onUpdateBrightness}
      />
    )
  }
}

const setBrightnessOptions = {
  name: 'setBrightness'
}

const updateLightInformationOptions = {
  name: 'updateLightInformation',
  options: {
    refetchQueries: ['GetLights']
  }
}

export default compose(
  graphql(setBrightness, setBrightnessOptions),
  graphql(updateLightInformation, updateLightInformationOptions)
)(DimmableLightContainer)
