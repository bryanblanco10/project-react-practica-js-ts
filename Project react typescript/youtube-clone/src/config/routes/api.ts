import { type ApiRoutes } from '@/models'

const API_KEY = import.meta.env.VITE_YOTUBE_DATA_API_KEY
const API_URL = import.meta.env.VITE_YOUTUBE_API_URL

export const API_ROUTES: ApiRoutes = {
  search: {
    get: `${API_URL}/search?key=${API_KEY}&regionCode=CO&part=snippet&type=video`
  },
  video: {
    get: `${API_URL}/videos?key=${API_KEY}&regionCode=CO&part=snippet,contentDetails,statistics&type=video`
  },
  channel: {
    get: `${API_URL}/channels?key=${API_KEY}&regionCode=CO&part=snippet`
  },
  recommended: {
    get: `${API_URL}/activities?key=${API_KEY}&regionCode=CO&part=snippet,contentDetails`
  }
}
