import { graphql } from 'react-apollo'
import { getLights } from 'queries/lights'
import Lights from './Lights'

export default graphql(getLights)(Lights)
