import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons/lib/md/lightbulb-outline'

export default function StatusIcon ({ isOn, onClick }) {
  return <LightBulb ison={isOn} onClick={onClick} />
}

StatusIcon.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

const LightBulb = styled(Icon)`
  cursor: pointer;
  font-size: 54px;
  margin-right: 12px;

  opacity: ${({ theme, ison }) => (ison ? 1 : 0.65)};
  color: ${({ theme, ison }) => (ison ? theme.colors.accent : theme.colors.text)};
`