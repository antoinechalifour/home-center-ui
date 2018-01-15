import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputRange from 'ui/InputRange'
import SwitchableLight from '../SwitchableLight'

export default function DimmableLight (props) {
  return (
    <div>
      <SwitchableLight {...props} />
      <InputWrapper>
        <InputRange value={props.bri} onChange={props.updateBrightness} />
      </InputWrapper>
    </div>
  )
}

DimmableLight.propTypes = {
  bri: PropTypes.number.isRequired,
  updateBrightness: PropTypes.func.isRequired
}

const InputWrapper = styled.div`
  padding-top: 12px;
  width: 100%;
  margin: auto;
`
