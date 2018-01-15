import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CalendarIcon from 'react-icons/lib/md/date-range'
import OrganizerIcon from 'react-icons/lib/md/account-circle'
import AttendeesIcon from 'react-icons/lib/md/people'
import gqlLoaderHoc from 'components/GqlLoader'
import { isSameDay, format as formatDate } from 'util/dates'

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

  _renderEvent = event => {
    return (
      <Event>
        <div>{event.title}</div>
        <div>
          <CalendarIcon />
          {' '}
          {formatDate(new Date(event.start), 'DD/MM hh:mm')}
          {' '}
          -
          {' '}
          {formatDate(new Date(event.end), 'DD/MM hh:mm')}
        </div>
        <div>
          <OrganizerIcon /> {event.organizer.name}
        </div>
        {event.attendees.length
          ? <Attendees>
            <AttendeesIcon />
            <ul>
              {event.attendees.map(x => <li>{x.name}</li>)}
            </ul>
          </Attendees>
          : null}
      </Event>
    )
  }

  _renderToday () {
    const today = new Date()
    const events = this.props.data.calendar.events.filter(event => {
      const startDate = new Date(event.start)
      const endDate = new Date(event.end)
      if (isSameDay(today, startDate)) {
        return true
      } else if (isSameDay(today, endDate)) {
        return true
      } else {
        return today >= startDate && today <= endDate
      }
    })

    return (
      <div>
        <Header>Today's events</Header>
        {events.length
          ? <ul>
            {events.map(this._renderEvent)}
          </ul>
          : <Empty>Nothing planned for today! Enjoy your day.</Empty>}
      </div>
    )
  }

  _renderUpcomingEvents () {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0)
    tomorrow.setMinutes(0)
    tomorrow.setSeconds(0)
    tomorrow.setMilliseconds(0)

    const events = this.props.data.calendar.events.filter(event => {
      const startDate = new Date(event.start)
      const endDate = new Date(event.end)

      return startDate >= tomorrow || endDate > tomorrow
    })

    return events.length
      ? <div>
        <Header>Upcoming events</Header>
        <ul>
          {events.map(this._renderEvent)}
        </ul>
      </div>
      : null
  }

  render () {
    return (
      <div>
        {this._renderToday()}
        {this._renderUpcomingEvents()}
      </div>
    )
  }
}

export default gqlLoaderHoc(Calendar)

const Header = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  padding: 12px;
  background: ${({ theme }) => theme.colors.primary};
`

const Event = styled.li`
  padding: 12px;

  > div {
    display: flex;
    align-items: center;
  }

  > div + div {
    margin-top: 12px;
  }

  > div:not(:first-child) {
    padding-left: 8px;
    opacity: .54;
    font-size: 90%;
  }

  svg {
    opacity: .54;
    font-size: 150%;
    margin-right: 12px;
  }
  
  + li {
    border-top: 1px solid rgba(0, 0, 0, .15);
  }
`

const Attendees = styled.div`
  align-items: flex-start !important;
`

const Empty = styled.div`
  padding: 12px;
  text-align: center;
  opacity: .54;
`
