import gql from 'graphql-tag'

export const getCalendar = gql`
  query Calendar {
    calendar {
      events {
        id,
        title,
        start,
        end,
        link,
        organizer {
          name,
          email
        },
        attendees {
          name,
          email
        }
      }
    }
  }
`
