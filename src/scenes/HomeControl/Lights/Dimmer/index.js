import { graphql, compose } from 'react-apollo'
import { setBrightness, updateLightInformation } from 'queries/lights'
import Dimmer from './Dimmer'

const setBrightnessOptions = {
  name: 'setBrightness'
}

const updateLightInformationOptions = {
  name: 'updateLightInformation',
  options: {
    refetchQueries: ['GetLights']
  }
}

export default compose(
  graphql(setBrightness, setBrightnessOptions),
  graphql(updateLightInformation, updateLightInformationOptions)
)(Dimmer)
