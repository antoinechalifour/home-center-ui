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

  return (
    <Container>
      <Message>{configuration.message}, {name}</Message>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  font-size: 32px;
  padding: 39px 0;
`

const Message = styled.div`
  position: relative;
  padding: 12px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 25%;
    width: 50%;
    height: 1px;
    background: #fff;
    opacity: .15;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`
