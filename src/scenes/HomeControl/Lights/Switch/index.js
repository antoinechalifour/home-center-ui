import { graphql, compose } from 'react-apollo'
import { toggleLight, updateLight } from 'queries/lights'
import Switch from './Switch'

const toggleLightOptions = {
  name: 'toggleLight',
  options: {
    refetchQueries: ['GetLights']
  }
}

const updateLightOptions = {
  name: 'updateLight',
  options: {
    refetchQueries: ['GetLights']
  }
}

export default compose(
  graphql(toggleLight, toggleLightOptions),
  graphql(updateLight, updateLightOptions)
)(Switch)
