import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AddIcon from 'react-icons/lib/md/add'
import Row from 'ui/Row'

export default class Title extends Component {
  static propTypes = {
    addSource: PropTypes.func.isRequired
  }

  state = {
    input: ''
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addSource(this.state.input)
    this.setState({ input: '' })
  }

  onInputChange = e => this.setState({ input: e.target.value })

  render () {
    return (
      <Wrapper onSubmit={this.onSubmit}>
        <Row align='center'>
          <input
            value={this.state.input}
            onKeyUp={this.onKeyUp}
            onChange={this.onInputChange}
            placeholder='http://source.url/...'
          />
          <button type='submit'>
            <AddIcon />
          </button>
        </Row>
      </Wrapper>
    )
  }
}

const Wrapper = styled.form`
  border-top: 1px solid rgba(0, 0, 0, .15);
  padding: 12px;
  margin-top: 12px;
  margin-left: -12px;
  margin-right: -12px;
  margin-bottom: -12px;

  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    border: none;
    outline: none;
  }

  button {
    font-size: inherit;
    font-family: inherit;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
  }

  svg {
    opacity: .54;
  }
`
