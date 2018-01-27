import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import Rooms from './Rooms'
import Settings from './Settings'
import NotFound from './NotFound'
import History from './History'

export default class Main extends Component {
  render () {
    return (
      <Container>
        <Header>
          <div>
            <Title>Home Center</Title>
            <Nav>
              <NavLink to='/home'>Dashboard</NavLink>
              <NavLink to='/rooms'>Rooms</NavLink>
              <NavLink to='/settings'>Settings</NavLink>
              <NavLink to='/history'>History</NavLink>
            </Nav>
          </div>
        </Header>
        <Body>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/rooms' component={Rooms} />
            <Route path='/settings' component={Settings} />
            <Route path='/history' component={History} />
            <Redirect exact from='/' to='/home' />
            <Route component={NotFound} />
          </Switch>
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
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textInverse};
  background: #f7f7f9;
`

const Header = styled.header`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
  position: relative;
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
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
  overflow-x: auto;

  a {
    padding: 12px;
    flex: 150px 0 0;
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
