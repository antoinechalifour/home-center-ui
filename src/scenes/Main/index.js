import React, { Component } from 'react'
import styled from 'styled-components'
import Welcome from 'scenes/Welcome'
import Weather from 'scenes/Weather'
import Calendar from 'scenes/Calendar'
import Lists from 'scenes/Lists'
import Rss from 'scenes/Rss'
import Lights from 'scenes/Lights'

export default class Main extends Component {
  static defaultProps = {
    widgets: [['weather', 'calendar'], ['lights', 'rss'], ['lists']]
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

                return Main.widgetTypeToComponent[widget]
                  ? <Widget>{Main.widgetTypeToComponent[widget]()}</Widget>
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
        <Nav />
        <Body>
          <Header>Home</Header>
          <Content>
            <Welcome name='Antoine' />
            {this._renderWidgets(this.props.widgets)}
          </Content>
        </Body>
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  background: #f7f7f9;
  display: flex;
  color: ${({ theme }) => theme.colors.textInverse};
`

const Header = styled.header`
  padding: 12px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
`

const Body = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Nav = styled.nav`
  width: 256px;
  background: #fff;
`

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 12px 12px;
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
  max-height: 450px;
  overflow-y: auto;

  + div {
    margin-top: 8px;
  }
`
