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

  render () {
    const getTranslate = index => 56 * index + 12 * index

    return (
      <React.Fragment>
        {this.state.isOpen && <Overlay />}

        <ButtonGroup>
          <TranslateFab translate={this.state.isOpen ? 0 : getTranslate(2)}>
            <Link to='/home/lists/new'><ListIcon /></Link>
          </TranslateFab>
          <TranslateFab translate={this.state.isOpen ? 0 : getTranslate(1)}>
            <Link to='/home/rss/new'><SourceIcon /></Link>
          </TranslateFab>
          <OpenFab open={this.state.isOpen} onClick={this._toggleOpen}>
            <MdAdd />
          </OpenFab>
        </ButtonGroup>
      </React.Fragment>
    )
  }
}

const ButtonGroup = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  margin: 0 !important;
  width: auto !important;

  > * {
    margin: 12px 0;
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
  transition: background .2s ease-in, color .2s ease-in;
  color: #fff;
  position: relative;

  svg {
    transform: rotate(0deg);
    transition: transform .2s ease-in;
  }

  ${({ open, theme }) => open && `
    background: #373d3f;
    
    svg {
      transform: rotate(45deg);
    }
  `}
`

const TranslateFab = styled(Fab)`
  transition: transform .2s ease, box-shadow .2s ease-in;
  transform: translateY(${({ translate }) => translate}px);

  ${({ translate }) => translate !== 0 && 'box-shadow: none;'}
`
