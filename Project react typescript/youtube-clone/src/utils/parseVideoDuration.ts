export const parseVideoDuration = (duration: string): string => {
  const parseDuration = duration.replace('PT', '')

  const hour = parseDuration.includes('H') ? parseDuration.split('H')[0].trim() : ''
  const minute = parseDuration.includes('M') ? parseDuration.split('M')[0].trim() : ''
  const second = parseDuration.includes('S') ? parseDuration.split('M').reverse()[0].replace('S', '').trim() : ''

  const durationFormat = `${hour !== '' ? `${hour}:` : ''}${minute !== '' ? `${minute}:` : '0:'}${parseSecond(second)}`

  return durationFormat
}

const parseSecond = (duration: string): string => {
  let format = ''
  if (duration !== '') {
    format = Number(duration) < 9 ? `0${duration}` : `${duration}`
  } else {
    format = '00'
  }
  return format
}
