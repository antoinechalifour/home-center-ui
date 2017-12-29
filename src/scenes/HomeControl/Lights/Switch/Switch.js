import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Row from 'ui/Row'
import Editable from 'components/Editable'
import StatusIcon from '../StatusIcon'

export default class Switch extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    switchLight: PropTypes.func.isRequired,
    updateLightInformation: PropTypes.func.isRequired
  }

  switchLight = () => {
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

  updateName = value =>
    this.props.updateLightInformation({
      variables: {
        input: {
          id: this.props.id,
          name: value
        }
      }
    })

  render () {
    const isOn = this.props.status === 'on'

    return (
      <Row align='center'>
        <StatusIcon isOn={isOn} onClick={this.switchLight} />
        <div flex>
          <Editable onChange={this.updateName}>
            {this.props.name}
          </Editable>
        </div>
      </Row>
    )
  }
}
