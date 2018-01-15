import { graphql } from 'react-apollo'
import { getCalendar } from 'queries/calendar'
import Calendar from './Calendar'

export default graphql(getCalendar)(Calendar)
