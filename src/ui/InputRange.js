import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class InputRange extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  state = {
    isDragging: false
  }

  componentDidMount () {
    window.addEventListener('mouseup', this.onMouseUp)
    window.addEventListener('mousemove', this.onMouseMove)
  }

  componentWillUnmount () {
    window.removeEventListener('mouseup', this.onMouseUp)
    window.removeEventListener('mousemove', this.onMouseMove)
  }

  onMouseDown = () => {
    this.setState({ isDragging: true })
  }

  onMouseUp = () => {
    if (this.state.isDragging) {
      this.setState({ isDragging: false })
    }
  }

  onMouseMove = e => {
    if (!this.state.isDragging) {
      // Ignore event
      return
    }

    const { left, width } = this.getTrackRect()
    const right = left + width
    const mouseX = e.clientX

    let value = (mouseX - left) / (right - left)
    value = Math.max(0, value)
    value = Math.min(value, 1)

    this.props.onChange(value * 100)
  }

  getTrackRect () {
    return this.track.getBoundingClientRect()
  }

  render () {
    return (
      <Range>
        <Track innerRef={track => (this.track = track)} />
        <TrackActive style={{ width: `${this.props.value}%` }} />
        <Slider
          onMouseDown={this.onMouseDown}
          style={{ left: `${this.props.value}%` }}
        />
      </Range>
    )
  }
}

const Range = styled.div`
  width: 100%;
  height: 1rem;
  position: relative;
`

const Track = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  height: 0.3rem;
  background: #eee;
`

const TrackActive = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 0.3rem;
  opacity: .65;
  background: ${({ theme }) => theme.colors.accent};
`

const Slider = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 1.3rem;
  width: 1.3rem;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  cursor: pointer;
`
