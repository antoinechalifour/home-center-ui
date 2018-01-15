import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from 'components/widgets/Welcome'
import Weather from 'components/widgets/Weather'
import Calendar from 'components/widgets/Calendar'
import Lists from 'components/widgets/Lists'
import Rss from 'components/widgets/Rss'
import Lights from 'components/widgets/Lights'

export default class Home extends Component {
  static defaultProps = {
    widgets: [['weather', 'lights'], ['calendar', 'rss'], ['lists']]
  }

  static widgetTypeToComponent = {
    notes: () => <div>This is the note widget</div>,
    weather: () => <Weather />,
    calendar: () => <Calendar />,
    lists: () => <Lists />,
    rss: () => <Rss />,
    lights: () => <Lights />
  }

  _renderWidgets (widgets) {
    const colNumber = widgets[0].length

    return (
      <Widgets>
        {Array(colNumber).fill(' ').map((_, col) => {
          return (
            <WidgetCol>
              {widgets.map(row => {
                const widget = row[col]

                return Home.widgetTypeToComponent[widget]
                  ? <Widget>{Home.widgetTypeToComponent[widget]()}</Widget>
                  : null
              })}
            </WidgetCol>
          )
        })}
      </Widgets>
    )
  }
  render () {
    return (
      <Container>
        <Welcome name='Antoine' />
        {this._renderWidgets(this.props.widgets)}
      </Container>
    )
  }
}

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
  }
`

const WidgetCol = styled.div`
  padding: 0 4px;
`

const Widget = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .13);

  + div {
    margin-top: 8px;
  }
`
