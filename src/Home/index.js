import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Search from 'Home/Search'
import Control from 'Home/Control'
import Rss from 'Home/Rss'
import Lists from 'Home/Lists'

const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "header header header"
    "col1 col2 col3";
`

const Header = styled.div`
  grid-area: header;
`

const BaseColumn = styled.div`
  overflow: hidden;
`

const Col1 = BaseColumn.extend`
  grid-area: col1;
`

const Col2 = BaseColumn.extend`
  grid-area: col2;
`

const Col3 = BaseColumn.extend`
  grid-area: col3;
`

const Home = ({ name }) => (
  <Switch>
    <Route path='/search' render={() => <div>Search</div>} />
    <Route
      render={() => (
        <Grid>
          <Header><Search /></Header>
          <Col1>
            <Control />
          </Col1>
          <Col2>
            <Lists />
          </Col2>
          <Col3>
            <Rss />
          </Col3>
        </Grid>
      )}
    />
  </Switch>
)

export default Home
