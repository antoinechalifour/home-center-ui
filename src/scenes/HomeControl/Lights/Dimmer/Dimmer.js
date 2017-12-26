import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import styled from 'styled-components'
import InputRange from 'ui/InputRange'
import Row from 'ui/Row'
import StatusIcon from '../StatusIcon'

export default class Dimmer extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    toggleLight: PropTypes.func.isRequired,
    updateLight: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      value: 0
    }

    this.updateLight = debounce(this.updateLight.bind(this), 500)
  }

  onChange = value => {
    this.setState({ value }, () => this.updateLight())
  }

  updateLight () {
    this.props.updateLight({
      variables: { lightId: this.props.id, bri: Math.round(this.state.value) }
    })
  }

  render () {
    const isOn = this.props.status === 'on'
    const variables = {
      lightId: this.props.id,
      isOn: !isOn
    }

    return (
      <Row align='center'>
        <StatusIcon
          isOn={isOn}
          onClick={() => this.props.toggleLight({ variables })}
        />
        <div flex>
          <Name>{this.props.name}</Name>
          <InputRange value={this.state.value} onChange={this.onChange} />
        </div>
      </Row>
    )
  }
}

const Name = styled.div`
  margin-bottom: 8px;
`
