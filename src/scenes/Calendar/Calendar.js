import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import LeftArrow from 'react-icons/lib/md/chevron-left'
import RightArrow from 'react-icons/lib/md/chevron-right'
import gqlLoaderHoc from 'components/GqlLoader'

export class Calendar extends Component {
  static propTypes = {
    data: PropTypes.shape({
      calendar: PropTypes.shape({
        events: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            start: PropTypes.string.isRequired,
            end: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            attendees: PropTypes.arrayOf(
              PropTypes.shape({
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired
              })
            ).isRequired,
            organizer: PropTypes.shape({
              name: PropTypes.string.isRequired,
              email: PropTypes.string.isRequired
            }).isRequired
          })
        ).isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    offset: 0
  }

  _addDays (date, no) {
    const newDate = new Date()
    newDate.setTime(date.getTime() + no * 24 * 60 * 60 * 1000)

    return newDate
  }

  _getEvents (day, hour) {
    const date = new Date(day)

    date.setHours(hour)
    date.setMinutes(30)
    date.setSeconds(0)
    date.setMilliseconds(0)

    const events = this.props.data.calendar.events.filter(event => {
      const startDate = new Date(event.start)
      const endDate = new Date(event.end)

      return date >= startDate && date <= endDate
    })

    return (
      <ul>
        {events.map(x => <li>{x.title}</li>)}
      </ul>
    )
  }

  _isToday (date) {
    const today = new Date()

    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  _isNow (day, hour) {
    const today = new Date()

    return this._isToday(day) && today.getHours() === hour
  }

  render () {
    const date = this._addDays(new Date(), this.state.offset * 7)
    const days = Array(7).fill(0).map((_, index) => {
      return this._addDays(date, index)
    })
    const hours = Array(24).fill(0).map((_, index) => index)

    return (
      <Container>
        <CalendarWrapper>
          <button
            onClick={() => this.setState({ offset: this.state.offset - 1 })}
          >
            <LeftArrow />
          </button>
          <Table>
            <Thead>
              <Tr>
                <Th first />
                {days.map(day => (
                  <Th active={this._isToday(day)}>
                    {day.getDate()}/{day.getMonth() + 1}/{day.getFullYear()}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {hours.map(hour => (
                <Tr>
                  <Td first>{hour}h</Td>
                  {days.map(day => (
                    <Td active={this._isNow(day, hour)}>
                      {this._getEvents(day, hour)}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
          <button
            onClick={() => this.setState({ offset: this.state.offset + 1 })}
          >
            <RightArrow />
          </button>
        </CalendarWrapper>
      </Container>
    )
  }
}

export default gqlLoaderHoc(Calendar)

const Container = styled.div`
  position: relative;
  height: 100%;
`

const CalendarWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 12px;
  right: 12px;
  bottom: 12px;
  left: 12px;

  button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    color: inherit;
    font-size: inherit;
  }
`

const Table = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Thead = styled.div`
  background: rgba(0, 0, 0, .25);
`

const Tbody = styled.div`
  height: 100%;
  flex: 1;
  overflow-y: auto;
`

const Tr = styled.div`
  display: flex;

  :nth-child(even) {
    background: rgba(0, 0, 0, .1);
  }
`

const Td = styled.div`
  border: 1px solid rgba(255, 255, 255, .15);
  min-height: 24px;
  font-size: 10px;
  word-break: break-all;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ first }) => (first ? `
    width: 40px;
    padding: 6px;
  ` : `
    padding: 6px 12px;
    flex: 1;
  `)}
  ${({ active }) => active && 'background: rgba(255, 255, 255, .24);'}
`

const Th = Td.extend`
  font-size: 9px;
`
