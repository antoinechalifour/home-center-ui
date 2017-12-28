import { graphql } from 'react-apollo'
import { updateLight } from 'queries/lights'
import Dimmer from './Dimmer'

const updateLightOptions = {
  name: 'updateLight'
}

export default graphql(updateLight, updateLightOptions)(Dimmer)
