import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import LightIcon from 'react-icons/lib/md/lightbulb-outline'

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;

  svg {
    opacity: ${({ theme, isOn }) => (isOn ? 1 : 0.65)};
    color: ${({ theme, isOn }) => (isOn ? theme.colors.accent : theme.colors.text)};
    font-size: 54px;
  }
`

const Information = styled.div`
  padding-left: 12px;

  span {
    display: block;
  }

  span:last-child {
    font-size: 80%;
    opacity: .54;
  }
`

const LightSwitch = ({ id, name, type, status, mutate }) => {
  const isOn = status === 'on'
  const variables = {
    lightId: id,
    isOn: !isOn
  }

  return (
    <Wrapper isOn={isOn} onClick={() => mutate({ variables })}>
      <LightIcon />
      <Information>
        <span>{name}</span>
        <span>{type} • is currently "{status}"</span>
      </Information>
    </Wrapper>
  )
}

LightSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired
}

export default graphql(
  gql`
  mutation toggleLight ($lightId: String, $isOn: Boolean) {
    toggleLight(lightId: $lightId, isOn: $isOn) { id }
  }
`,
  {
    options: {
      refetchQueries: ['LightsQuerry']
    }
  }
)(LightSwitch)
