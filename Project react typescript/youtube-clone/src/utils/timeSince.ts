export const timeSince = (date: Date): string => {
  const newDate: Date = new Date()
  const seconds: number = Math.floor((newDate.valueOf() - date.valueOf()) / 1000)

  let interval = Math.floor(seconds / 31536000)
  if (interval > 1) {
    return `${interval} years ago`
  }

  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return `${interval} months ago`
  }

  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return `${interval} days ago`
  }

  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return `${interval} hours ago`
  }

  // Falta por semanas

  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return `${interval} minutes ago`
  }

  if (seconds < 10) return 'just now'

  return `${Math.floor(seconds)} seconds ago`
}
