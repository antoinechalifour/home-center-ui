import { graphql } from 'react-apollo'
import { getWidgets } from 'queries/widgets'
import Home from './Home'

export default graphql(getWidgets)(Home)
