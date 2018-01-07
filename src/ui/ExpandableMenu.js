import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MenuIcon from 'react-icons/lib/md/more-vert'
import Row from 'ui/Row'

export default class ExpandableMenu extends Component {
  static propTypes = {
    renderItems: PropTypes.func.isRequired,
    className: PropTypes.string
  }

  state = {
    isExpanded: false
  }

  componentDidMount () {
    window.addEventListener('click', this.onWindowClick)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.onWindowClick)
  }

  onMenuClick = e => {
    e.stopPropagation()
    this.setState(ls => ({ isExpanded: !ls.isExpanded }))
  }

  onWindowClick = e => {
    if (this.state.isExpanded) {
      this.setState({ isExpanded: false })
    }
  }

  render () {
    return (
      <Menu className={this.props.className}>
        <MenuIcon onClick={this.onMenuClick} />
        {this.state.isExpanded &&
          <Items>
            {this.props.renderItems()}
          </Items>}
      </Menu>
    )
  }
}

const Menu = styled.div`
  position: relative;

  svg {
    cursor: pointer;
  }
`

const Items = styled.div`
  background: #fff;
  min-width: 200px;
  position: absolute;
  right: 30px;
  top: 4px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: -19px;
    top: 2px;
    width: 0;
    height: 0;
    opacity: .24;
    border-width: 9px;
    border-style: solid;
    border-left-color: ${({ theme }) => theme.colors.primary};
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
`

export const MenuItem = styled(Row)`
  align-items: center;
  padding: 12px;
  cursor: pointer;

  + * {
    border-top: 1px solid rgba(0, 0, 0, .15);
  }

  svg {
    opacity: .54;
    margin-right: 12px;
  }
`
