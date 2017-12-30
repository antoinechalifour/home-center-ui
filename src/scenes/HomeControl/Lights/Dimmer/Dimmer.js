import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import styled from 'styled-components'
import InputRange from 'ui/InputRange'
import Col from 'ui/Col'
import Editable from 'components/Editable'

export default class Dimmer extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bri: PropTypes.number.isRequired,
    setBrightness: PropTypes.func.isRequired,
    updateLightInformation: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      value: this.props.bri
    }

    this.updateBrightness = debounce(this.updateBrightness.bind(this), 500)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.bri) {
      this.setState({
        value: nextProps.bri
      })
    }
  }

  onNameChange = value => {
    this.props.updateLightInformation({
      variables: {
        input: {
          id: this.props.id,
          name: value
        }
      }
    })
  }

  onBrightnessChange = value => {
    this.setState({ value }, () => this.updateBrightness())
  }

  updateBrightness () {
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
      <Col align='center'>
        <InputWrapper>
          <InputRange
            value={this.state.value}
            onChange={this.onBrightnessChange}
          />
        </InputWrapper>
        <Name>
          <Editable onChange={this.onNameChange}>
            {this.props.name}
          </Editable>
        </Name>
      </Col>
    )
  }
}

const Name = styled.div`
`

const InputWrapper = styled.div`
  flex: 1;
  width: 80%;
  margin: auto;
`
