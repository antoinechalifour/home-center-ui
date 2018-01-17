import React from 'react'
import styled from 'styled-components'
import Feed from './Feed'

export default function Rss () {
  return (
    <div>
      <Title>Highlights</Title>
      <Content>
        <Feed />
      </Content>
    </div>
  )
}

const Title = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 12px;
  text-align: center;
  text-transform: uppercase;
`

const Content = styled.div`
  padding: 0 12px;
`
