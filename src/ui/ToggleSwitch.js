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
  border: 1px solid rgba(0, 0, 0, .25);

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    height: 50%;
  }

  &::before {
    background: rgba(0, 0, 0, .65);
    width: 1px;
    left: 25%;
    transform: translateY(-50%);
  }

  &::after {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, .65);
    right: 25%;
    transform: translateX(50%) translateY(-50%);
  }
`

const Toggle = styled.div`
  position: absolute;
  border-radius: 2px;
  top: 50%;
  width: 1rem;
  height: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  transition: transform .1s ease-in;
  cursor: pointer;
  z-index: 1;

  transform: translateY(-50%) translateX(${({ value }) => (value ? 115 : 0)}%);
`
