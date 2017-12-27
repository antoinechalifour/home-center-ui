import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AddIcon from 'react-icons/lib/md/add-circle-outline'
import Row from 'ui/Row'

export default class Title extends Component {
  static propTypes = {
    addSource: PropTypes.func.isRequired
  }

  state = {
    showInput: false,
    input: ''
  }

  showInput = () => this.setState({ showInput: true })

  onKeyUp = e => {
    if (e.keyCode === 13) {
      // ENTER
      this.props.addSource({ variables: { url: this.state.input } })
      this.setState({ showInput: false, input: '' })
    }
  }

  onInputChange = e => this.setState({ input: e.target.value })

  render () {
    return (
      <div>
        <Row align='center'>
          <TitleText flex>News</TitleText>
          {!this.state.showInput && <Icon onClick={this.showInput} />}
        </Row>
        {this.state.showInput &&
          <Input
            value={this.state.input}
            onKeyUp={this.onKeyUp}
            onChange={this.onInputChange}
            placeholder='http://source.url/...'
          />}
      </div>
    )
  }
}

const Icon = styled(AddIcon)`
  font-size: 32px;
  opacity: .54;
  cursor: pointer;
`

const TitleText = styled.div`
  text-transform: uppercase;
`

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, .15);
  margin-top: 12px;
`
