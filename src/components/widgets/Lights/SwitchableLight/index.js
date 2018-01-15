import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import { switchLight, updateLightInformation } from 'queries/lights'
import SwitchableLight from './SwitchableLight'

export class SwitchableLightContainer extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    switchLight: PropTypes.func.isRequired,
    updateLightInformation: PropTypes.func.isRequired
  }

  _onToggleLight = () => {
    const isOn = this.props.status === 'on'

    this.props.switchLight({
      variables: {
        input: {
          id: this.props.id,
          isOn: !isOn
        }
      }
    })
  }

  _onUpdateName = name => {
    this.props.updateLightInformation({
      variables: {
        input: {
          id: this.props.id,
          name
        }
      }
    })
  }

  render () {
    return (
      <SwitchableLight
        {...this.props}
        toggleLight={this._onToggleLight}
        updateName={this._onUpdateName}
      />
    )
  }
}

const switchLightOptions = {
  name: 'switchLight',
  options: {
    refetchQueries: ['GetLights']
  }
}

const updateLightInformationOptions = {
  name: 'updateLightInformation',
  options: {
    refetchQueries: ['GetLights']
  }
}

export default compose(
  graphql(switchLight, switchLightOptions),
  graphql(updateLightInformation, updateLightInformationOptions)
)(SwitchableLightContainer)
