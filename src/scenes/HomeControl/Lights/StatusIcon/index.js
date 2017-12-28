import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons/lib/md/lightbulb-outline'

export default function StatusIcon ({ isOn, onClick }) {
  return (
    <IconWrapper ison={isOn}>
      <Icon onClick={onClick} />
    </IconWrapper>
  )
}

StatusIcon.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

const IconWrapper = styled.span`
  svg {
    cursor: pointer;
    font-size: 50px;
    margin-right: 12px;

    opacity: ${({ theme, ison }) => (ison ? 1 : 0.24)};
    color: ${({ theme, ison }) => (ison ? theme.colors.primary : theme.colors.textInverse)};
  }
`
