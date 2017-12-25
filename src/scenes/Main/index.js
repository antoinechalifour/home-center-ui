import React from 'react'
import styled from 'styled-components'
import Pane, * as pane from './Pane'
import Weather from 'scenes/Weather'
import HomeControl from 'scenes/HomeControl'
import Lists from 'scenes/Lists'
import Rss from 'scenes/Rss'

const Grid = styled.div`
  padding: 12px;
  box-sizing: border-box;
  display: grid;
  grid-column-gap: 12px;
  grid-template-areas:
    "weather"
    "home-control"
    "lists"
    "rss";

  @media (min-width: 860px) {
    height: 100vh;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "weather lists rss"
      "home-control lists rss";
  }
`

const Home = ({ name }) => (
  <Grid>
    <Pane area='weather'>
      <pane.Title>
        Weather
      </pane.Title>
      <pane.Content>
        <Weather />
      </pane.Content>
    </Pane>
    <Pane area='home-control'>
      <pane.Title>
        Home
      </pane.Title>
      <pane.Content>
        <HomeControl />
      </pane.Content>
    </Pane>
    <Pane area='lists'>
      <pane.Title>
        My Lists
      </pane.Title>
      <pane.Content>
        <Lists />
      </pane.Content>
    </Pane>
    <Pane area='rss'>
      <pane.Title>
        News
      </pane.Title>
      <pane.Content>
        <Rss />
      </pane.Content>
    </Pane>
  </Grid>
)

export default Home
