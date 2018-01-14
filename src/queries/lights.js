import gql from 'graphql-tag'

export const getLights = gql`
  query GetLights {
    lights {
      id,
      name,
      type,
      status,
      bri
    }
  }
`

export const switchLight = gql`
  mutation SwitchLight ($input: SwitchLightInput!) {
    switchLight (input: $input) {
      light {
        id,
        status
      }
    }
  }
`

export const setBrightness = gql`
  mutation SetLightBrightness ($input: SetLightBrightnessInput!) {
    setLightBrightness (input: $input) {
      light {
        id,
        bri
      }
    }
  }
`

export const updateLightInformation = gql`
  mutation UpdateLightInformation ($input: UpdateLightInput!) {
    updateLightInformation (input: $input) {
      light {
        id,
        name
      }
    }
  }
`

export const lightUpdated = gql`
  subscription LightUpdated {
    lightUpdated {
      id,
      name,
      type,
      status,
      bri
    }
  }
`
