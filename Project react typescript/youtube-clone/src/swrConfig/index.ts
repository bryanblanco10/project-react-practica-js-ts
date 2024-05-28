export const localStorageProvider = (): any | undefined => {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map<string, unknown>(JSON.parse(localStorage.getItem('app-youtube-practice') ?? '[]'))

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appYoutube = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-youtube-practice', appYoutube)
  })

  // We still use the map for write & read for performance.
  return map
}
