import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Weather from 'scenes/Weather'
import Lights from 'scenes/Lights'
import Lists from 'scenes/Lists'
import Rss from 'scenes/Rss'
import Welcome from 'scenes/Welcome'
import Calendar from 'scenes/Calendar'
import Forecast from 'scenes/Forecast'
import Area from './Area'

export default function Main ({ name }) {
  return (
    <Grid>
      <Area area='hello' background={false} vAlign='center'>
        <Welcome name={name} date={new Date()} />
      </Area>

      <Area area='weather' vAlign='center'>
        <Weather />
      </Area>

      <Area area='forecast' vAlign='center'>
        <Forecast />
      </Area>

      <Area area='calendar' vAlign='center'>
        <Calendar />
      </Area>

      <Area area='headlines'>
        <Rss />
      </Area>

      <Area area='lists'>
        <Lists />
      </Area>

      <Area area='home'>
        <Lights />
      </Area>
    </Grid>
  )
}

Main.propTypes = {
  name: PropTypes.string.isRequired
}

const Grid = styled.main`
  height: 100vh;
  width: 100vw;
  overflow-x: auto;

  display: grid;
  grid-gap: 6px;
  grid-template-rows: repeat(3, 33%);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
   "hello calendar calendar lists"
   "weather headlines home lists"
   "forecast headlines home lists";

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  * {
    box-sizing: border-box;
  }
`
