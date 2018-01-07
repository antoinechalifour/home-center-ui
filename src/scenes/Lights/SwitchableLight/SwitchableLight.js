import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-icons/lib/md/lightbulb-outline'
import styled from 'styled-components'
import Editable from 'components/Editable'
import Switch from './Switch'

export default class SwitchableLight extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    toggleLight: PropTypes.func.isRequired,
    updateName: PropTypes.func.isRequired
  }

  render () {
    const isOn = this.props.status === 'on'

    return (
      <Container>
        <Icon />
        <Name>
          <Editable onChange={this.props.updateName}>
            {this.props.name}
          </Editable>
        </Name>
        <Switch isOn={isOn} onClick={this.props.toggleLight} />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 32px;
    opacity: .24;
  }
`

const Name = styled.div`
  flex: 1;
  margin: 0 12px;
`
