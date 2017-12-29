import { graphql, compose } from 'react-apollo'
import { switchLight, updateLightInformation } from 'queries/lights'
import Switch from './Switch'

const switchLightOptions = {
  name: 'switchLight',
  options: {
    refetchQueries: ['GetLights']
  }
}

const updateLightInformationOptions = {
  name: 'updateLightInformation',
  options: {
    refetchQueries: ['GetLights']
  }
}

export default compose(
  graphql(switchLight, switchLightOptions),
  graphql(updateLightInformation, updateLightInformationOptions)
)(Switch)
