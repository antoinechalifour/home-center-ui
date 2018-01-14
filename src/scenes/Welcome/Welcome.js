import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// From: http://www.english-test.net/forum/sutra289476.html
const allConfigurations = {
  morning: {
    message: 'Good morning'
  },
  afternoon: {
    message: 'Good afternoon'
  },
  evening: {
    message: 'Good evening'
  },
  night: {
    message: 'Good night'
  }
}

export default function Welcome ({ name, date }) {
  const hours = date.getHours()
  let configuration

  if (hours < 4) {
    configuration = allConfigurations.night
  } else if (hours <= 12) {
    configuration = allConfigurations.morning
  } else if (hours <= 17) {
    configuration = allConfigurations.afternoon
  } else if (hours <= 22) {
    configuration = allConfigurations.evening
  } else {
    configuration = allConfigurations.night
  }

  return <Message>{configuration.message}, {name}</Message>
}

Welcome.proptypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
}

const Message = styled.div`
  text-align: center;
  font-size: 32px;
  padding: 24px;
`
