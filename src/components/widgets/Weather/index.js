import React from 'react'
import Loader from 'ui/Loader'
import GetPosition from 'components/GetPosition'
import Weather from './Weather'

export default function WeatherWidget () {
  return (
    <GetPosition
      render={({ err, position }) => {
        const isLoading = !err && !position

        if (isLoading) {
          return <Loader />
        } else if (err) {
          return <div>Error !</div>
        } else {
          return <Weather {...position} />
        }
      }}
    />
  )
}
