export function getDayName (date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return days[date.getDay()]
}

export function isSameDay (d1, d2) {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  )
}

function formatDigits (number) {
  let formatted = number.toString()

  return number < 10 ? formatted.padStart(2, '0') : formatted
}

export function format (date, format) {
  return format
    .split('YYYY')
    .join(date.getFullYear())
    .split('MM')
    .join(formatDigits(date.getMonth() + 1))
    .split('DD')
    .join(formatDigits(date.getDate()))
    .split('hh')
    .join(formatDigits(date.getHours()))
    .split('mm')
    .join(formatDigits(date.getMinutes()))
}
