import { graphql, compose } from 'react-apollo'
import { updateLight, toggleLight } from 'queries/lights'
import Dimmer from './Dimmer'

const updateLightOptions = {
  name: 'updateLight'
}

const toggleLightOptions = {
  name: 'toggleLight',
  options: {
    refetchQueries: ['GetLights']
  }
}

export default compose(
  graphql(updateLight, updateLightOptions),
  graphql(toggleLight, toggleLightOptions)
)(Dimmer)
