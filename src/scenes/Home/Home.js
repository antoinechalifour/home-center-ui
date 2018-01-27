import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import gqlLoaderHoc from 'components/GqlLoader'
import Welcome from 'components/widgets/Welcome'
import Weather from 'components/widgets/Weather'
import Calendar from 'components/widgets/Calendar'
import List from 'components/widgets/List'
import Rss from 'components/widgets/Rss'
import Lights from 'components/widgets/Lights'
import FabGroup from './FabGroup'
import AddList from './AddList'
import AddRssSource from './AddRssSource'

class Home extends Component {
  static propTypes = {
    data: PropTypes.shape({
      widgets: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          listId: PropTypes.number
        })
      )
    }).isRequired
  }

  static widgetTypeToComponent = {
    weather: Weather,
    calendar: Calendar,
    list: List,
    rss: Rss,
    lights: Lights
  }

  state = { columns: 3 }

  componentDidMount () {
    window.addEventListener('resize', this._onWindowResize)

    this._onWindowResize()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._onWindowResize)
  }

  _onWindowResize = () => {
    const width = document.documentElement.clientWidth

    if (width < 860) {
      this.setState({ columns: 1 })
    } else if (width < 1200) {
      this.setState({ columns: 2 })
    } else {
      this.setState({ columns: 3 })
    }
  }

  _renderWidgets (widgets) {
    const colNumber = this.state.columns
    const content = []

    widgets.forEach((widget, index) => {
      const col = index % colNumber
      const WidgetComponent = Home.widgetTypeToComponent[widget.type]

      if (!content[col]) {
        content[col] = []
      }

      if (WidgetComponent) {
        content[col].push(
          <Widget key={`${index}-${widget.type}`}>
            <WidgetComponent {...widget} />
          </Widget>
        )
      } else {
        console.warn(`No widget component for type "${widget.type}"`)
      }
    })

    return (
      <Widgets>
        {content.map((col, index) => (
          <WidgetCol key={`col-${index}`}>
            {col}
          </WidgetCol>
        ))}
      </Widgets>
    )
  }
  render () {
    return (
      <Container>
        <Welcome name='Antoine' />
        {this._renderWidgets(this.props.data.widgets)}
        <FabGroup />
        <Route path='/home/lists/new' component={AddList} />
        <Route path='/home/rss/new' component={AddRssSource} />
      </Container>
    )
  }
}

export default gqlLoaderHoc(Home)

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;

  > div {
    width: 95%;
    margin: auto;
  }
`

const Widgets = styled.div`
  display: flex;

  > * {
    flex: 1;
    box-sizing: border-box;
    max-width: 100%;
  }
`

const WidgetCol = styled.div`
  @media (min-width: 860px) {
    padding: 0 8px;
  }
`

const Widget = styled.div`
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .13);

  + div {
    margin-top: 16px;
  }
`
