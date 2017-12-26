import { graphql } from 'react-apollo'
import { toggleLight } from 'queries/lights'
import Switch from './Switch'

const queryOptions = {
  options: {
    refetchQueries: ['GetLights']
  }
}

export default graphql(toggleLight, queryOptions)(Switch)
