import gql from 'graphql-tag'

export const getLights = gql`
  query GetLights {
    lights {
      id,
      name,
      type,
      status
    }
  }
`

export const toggleLight = gql`
  mutation ToggleLight ($lightId: String, $isOn: Boolean) {
    toggleLight(lightId: $lightId, isOn: $isOn) { id }
  }
`

export const updateLight = gql`
  mutation UpdateLight ($lightId: String, $bri: Int) {
    updateLight(lightId: $lightId, bri: $bri) { id }
  }
`
