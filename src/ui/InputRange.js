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
    window.addEventListener('touchmove', this.onTouchMove)
    window.addEventListener('touchend', this.onTouchEnd)
  }

  componentWillUnmount () {
    window.removeEventListener('mouseup', this.onMouseUp)
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('touchmove', this.onTouchMove)
    window.removeEventListener('touchend', this.onTouchEnd)
  }

  onTouchStart = () => {
    this.setState({ isDragging: true })
  }

  onTouchMove = e => {
    if (!this.state.isDragging) {
      return
    }

    const [touch] = e.changedTouches
    const value = this.getEventValue(touch.screenX)

    this.props.onChange(value * 100)
  }

  onTouchEnd = () => {
    if (this.state.isDragging) {
      this.setState({ isDragging: false })
    }
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

    const value = this.getEventValue(e.clientX)

    this.props.onChange(value * 100)
  }

  getEventValue (positionX) {
    const { left, width } = this.getTrackRect()
    const right = left + width

    let value = (positionX - left) / (right - left)
    value = Math.max(0, value)
    value = Math.min(value, 1)

    return value
  }

  getTrackRect () {
    return this.track.getBoundingClientRect()
  }

  render () {
    return (
      <Range>
        <Track innerRef={track => (this.track = track)} />
        <TrackActive
          animate={!this.state.isDragging}
          style={{ width: `${this.props.value}%` }}
        />
        <Slider
          animate={!this.state.isDragging}
          onTouchStart={this.onTouchStart}
          onMouseDown={this.onMouseDown}
          style={{ left: `${this.props.value}%` }}
        />
      </Range>
    )
  }
}

const Range = styled.div`
  width: 100%;
  height: 0.8rem;
  position: relative;
`

const Track = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #eee;
`

const TrackActive = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  opacity: .33;
  background: ${({ theme }) => theme.colors.primary};
  
  ${({ animate }) => animate && 'transition: width .2s ease-in;'}
`

const Slider = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(-50%) scale(1.3);
  width: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  ${({ animate }) => animate && 'transition: left .2s ease-in;'}
`
