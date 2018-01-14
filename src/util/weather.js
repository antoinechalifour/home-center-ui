export function getWeatherName (type) {
  const names = {
    clear: 'Clear',
    clouds: 'Cloudy',
    mist: 'Misty',
    fog: 'Misty',
    rain: 'Rainy',
    snow: 'Snowing'
  }

  return names[type]
}
