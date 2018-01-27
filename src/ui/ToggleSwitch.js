import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function ToggleSwitch ({ value, onChange }) {
  return (
    <Switch>
      <Toggle value={value} onClick={() => onChange(!value)} />
    </Switch>
  )
}

ToggleSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

const Switch = styled.div`
  display: inline-block;
  position: relative;
  height: 1.1rem;
  width: 2.2rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    height: 50%;
    background: #ddd;
    opacity: .23;
    width: 100%;
    transform: translateY(-50%);
    border-radius: 4px;
  }
`

const Toggle = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 50%;
  width: 1rem;
  height: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  transition: transform .1s ease, background .1s ease;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .23);

  ${({ value }) => (value ? `
    transform: translateY(-50%) translateX(115%);
  ` : `
    transform: translateY(-50%) translateX(5%);
    background: #ddd;
  `)}
  
`
