import React from 'react'
import styled from 'styled-components'
import Pane, * as pane from './Pane'
import Weather from 'scenes/Weather'
import HomeControl from 'scenes/HomeControl'
import Lists from 'scenes/Lists'
import Rss from 'scenes/Rss'
import Welcome from 'scenes/Welcome'

const Grid = styled.div`
  padding: 12px;
  min-height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  grid-template-areas:
    "welcome"
    "weather"
    "home-control"
    "lists"
    "rss";

  @media (min-width: 860px) {
    height: 100vh;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "welcome lists rss"
      "weather lists rss"
      "home-control lists rss";
  }
`

const Home = ({ name }) => (
  <Grid>
    <Pane area='welcome'>
      <Welcome name='Antoine' date={new Date()} />
    </Pane>
    <Pane area='weather'>
      <pane.Content>
        <Weather />
      </pane.Content>
    </Pane>
    <Pane area='home-control'>
      <pane.Content>
        <HomeControl />
      </pane.Content>
    </Pane>
    <Pane area='lists'>
      <pane.Content>
        <Lists />
      </pane.Content>
    </Pane>
    <Pane area='rss'>
      <pane.Content>
        <Rss />
      </pane.Content>
    </Pane>
  </Grid>
)

export default Home
