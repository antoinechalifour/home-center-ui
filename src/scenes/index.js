import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import Rooms from './Rooms'
import Settings from './Settings'
import NotFound from './NotFound'

export default class Main extends Component {
  render () {
    return (
      <Container>
        <Body>
          <Header>
            <div>
              <Title>Home Center</Title>
              <Nav>
                <NavLink exact to='/'>Dashboard</NavLink>
                <NavLink to='/rooms'>Rooms</NavLink>
                <NavLink to='/settings'>Settings</NavLink>
              </Nav>
            </div>
          </Header>
          <Content>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/rooms' component={Rooms} />
              <Route path='/settings' component={Settings} />
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Body>
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size};
  line-height: ${({ theme }) => theme.font.lineHeight};
  letter-spacing: 0.04rem;
  display: flex;
  color: ${({ theme }) => theme.colors.textInverse};
  background: #f7f7f9;
`

const Header = styled.header`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, .25);

  > div {
    width: 95%;
    margin: auto;
  }
`

const Body = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  padding: 12px;
  text-align: center;
  opacity: .54;
`

const Nav = styled.nav`
  display: flex;
  text-transform: uppercase;

  a {
    padding: 12px;
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: inherit;
    opacity: .75;
    transition: all .2s ease-in;
    border-bottom: 2px solid transparent;
  }

  a.active {
    opacity: 1;
    border-bottom: 2px solid #fff;
  }
`

const Content = styled.div`
  width: 95%;
  margin: auto;
  flex: 1;
  overflow-y: auto;
`
