import axios from 'axios'
axios.defaults.headers.common.Accept = 'application/json'

axios.interceptors.request.use((config) => {
  // config.headers['X-RapidAPI-Key'] = API_KEY
  // config.headers['X-RapidAPI-Host'] = 'youtube138.p.rapidapi.com'
  return config
})

export default axios
