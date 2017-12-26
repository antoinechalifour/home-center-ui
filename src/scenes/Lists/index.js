import { graphql } from 'react-apollo'
import { getLists } from 'queries/lists'
import Lists from './Lists'

export default graphql(getLists)(Lists)
