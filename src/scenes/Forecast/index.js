import React from 'react'
import Loader from 'ui/Loader'
import GetPosition from 'components/GetPosition'
import Forecast from './Forecast'

export default function ForecastWidget () {
  return (
    <GetPosition
      render={({ err, position }) => {
        const isLoading = !err && !position

        if (isLoading) {
          return <Loader />
        } else if (err) {
          return <div>Error!</div>
        } else {
          return <Forecast {...position} />
        }
      }}
    />
  )
}
