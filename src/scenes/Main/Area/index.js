import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Area extends Component {
  static propTypes = {
    background: PropTypes.bool,
    vAlign: PropTypes.string
  }

  static defaultProps = {
    background: true,
    vAlign: 'flex-start'
  }

  state = { err: null }

  componentDidCatch (err) {
    this.setState({ err })
  }

  render () {
    const { children, ...props } = this.props

    return (
      <Container {...props}>
        {this.state.err ? <div>{this.state.err}</div> : children}
      </Container>
    )
  }
}

const Container = styled.div`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-direction: column;
  justify-content: ${({ vAlign }) => vAlign};

  ${({ background }) => background && 'background-color: rgba(0, 0, 0, .15);'}

  > div {
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }
`
