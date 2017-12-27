import React from 'react'
import PropTypes from 'prop-types'
import ClearIcon from 'react-icons/lib/ti/weather-partly-sunny'
import CloudsIcon from 'react-icons/lib/ti/weather-cloudy'
import MistIcon from 'react-icons/lib/ti/waves'
import RainIcon from 'react-icons/lib/ti/weather-shower'
import SnowIcon from 'react-icons/lib/ti/weather-snow'

const typeToIcon = {
  clear: ClearIcon,
  clouds: CloudsIcon,
  mist: MistIcon,
  fog: MistIcon,
  rain: RainIcon,
  snow: SnowIcon
}

export default function Icon ({ type }) {
  const WeatherIcon = typeToIcon[type]

  if (!WeatherIcon) {
    console.warn(`Missing icon for weather type "${type}"`)
    return null
  }

  return <WeatherIcon />
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
}
