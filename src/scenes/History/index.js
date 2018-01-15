import { graphql } from 'react-apollo'
import { getHistory } from 'queries/history'
import History from './History'

export default graphql(getHistory)(History)
