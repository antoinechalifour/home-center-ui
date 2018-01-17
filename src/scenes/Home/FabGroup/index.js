import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import MdAdd from 'react-icons/lib/md/add'
import MdClose from 'react-icons/lib/md/close'
import ListIcon from 'react-icons/lib/md/format-list-bulleted'
import SourceIcon from 'react-icons/lib/md/book'
import Overlay from 'components/Overlay'

export default class FabGroup extends Component {
  state = { isOpen: false }

  _toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  _renderOpen () {
    return (
      <Overlay>
        <Group>
          <LabelAndFab>
            <span>List</span>
            <Fab onClick={this._toggleOpen}>
              <Link to='/home/lists/new'><ListIcon /></Link>
            </Fab>
          </LabelAndFab>
          <LabelAndFab>
            <span>RSS source</span>
            <Fab>
              <SourceIcon />
            </Fab>
          </LabelAndFab>
          <CloseFab onClick={this._toggleOpen}>
            <MdClose />
          </CloseFab>
        </Group>
      </Overlay>
    )
  }

  _renderClosed () {
    return (
      <OpenFab onClick={this._toggleOpen}>
        <MdAdd />
      </OpenFab>
    )
  }

  render () {
    return this.state.isOpen ? this._renderOpen() : this._renderClosed()
  }
}

const enterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const Fab = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 32px;
  font-family: monospace;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .45);

  a {
    text-decoration: none;
    color: inherit;
    line-height: 1;
  }
`

const OpenFab = styled(Fab)`
  position: fixed;
  right: 24px;
  bottom: 24px;
`

const Group = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const CloseFab = styled(Fab)`
  background: #373d3f;
  position: relative;
`

const LabelAndFab = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 24px;
  margin: 12px 0;
  animation: ${enterAnimation} .2s ease-in;

  span {
    margin-right: 12px;
    position: relative;
    color: #fff;
  }

  button {
    position: relative;
  }

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    height: 50%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.accent};
    opacity: .65;
  }
`
