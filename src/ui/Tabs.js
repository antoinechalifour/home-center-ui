import { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Tabs extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    inititalActiveTab: PropTypes.any
  }

  constructor (props) {
    super(props)

    this.state = {
      activeTab: typeof this.props.inititalActiveTab !== 'undefined'
        ? this.props.inititalActiveTab
        : 0
    }
  }

  changeTab = tab => this.setState({ activeTab: tab })

  render () {
    return this.props.render({
      activeTab: this.state.activeTab,
      changeTab: this.changeTab
    })
  }
}

export const Header = styled.ul`
  display: flex;

  > li {
    flex: 1;
  }
`

export const Tab = styled.li`
  padding: 12px 0;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, .15);
`
