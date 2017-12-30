import React from 'react'
import styled from 'styled-components'
import Weather from 'scenes/Weather'
import HomeControl from 'scenes/HomeControl'
import Lists from 'scenes/Lists'
import Rss from 'scenes/Rss'
import Welcome from 'scenes/Welcome'

export default function Home ({ name }) {
  return (
    <div>
      <HeaderWrapper>
        <Welcome name='Antoine' date={new Date()} />
        <Weather />
      </HeaderWrapper>

      <Main>
        <Section>
          <HomeControl />
        </Section>
        <Section>
          <Lists />
        </Section>
        <Section>
          <Rss />
        </Section>
      </Main>
    </div>
  )
}

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.backgroundInverse};
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
  color: ${({ theme }) => theme.colors.textInverse};
  padding: 16px;
  position: sticky;
  top: 0;
`

const Main = styled.main`
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.colors.background};
  padding: 48px 0;
`

const Section = styled.section`
  width: 95%;
  max-width: 900px;
  margin: auto;

  + section {
    margin-top: 48px;
  }
`
