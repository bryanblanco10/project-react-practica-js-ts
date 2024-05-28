import { API_ROUTES, axios } from '@/config'
import { type GetAll, type GetDetail, type GetRecommended, type GetVideos, type Search } from '@/models'

export default {
  async getAll ({ isNext = false, maxResults, nextPageToken, controller }: GetAll) {
    const pageToken = isNext ? `&pageToken=${nextPageToken}` : ''
    const url = `${API_ROUTES.video.get}&chart=mostPopular&maxResults=${maxResults}${pageToken}`
    const result = await axios.get(url, { signal: controller.signal })
    return result
  },

  async search ({
    isNext = false,
    maxResults = 20,
    query,
    nextPageToken,
    controller
  }: Search) {
    const pageToken = isNext ? `&pageToken=${nextPageToken}` : ''
    const url = `${API_ROUTES.search.get}&maxResults=${maxResults}&q=${query}${pageToken}`
    const result = await axios.get(url, { signal: controller.signal })
    return result
  },

  async channels (channelIds: string[], controller: AbortController) {
    const url = `${API_ROUTES.channel.get}&id=${channelIds.join(',')}`
    const result = await axios.get(url, { signal: controller.signal })
    return result
  },

  async getDetail ({ id, controller }: GetDetail) {
    const url = `${API_ROUTES.video.get}&id=${id}`
    const result = await axios.get(url, { signal: controller.signal })
    return result
  },

  async getRecommended ({ id, controller, channelId, maxResults, nextPageToken, isNext }: GetRecommended) {
    const pageToken = isNext ? `&pageToken=${nextPageToken}` : ''
    const url = `${API_ROUTES.recommended.get}&id=${id}&channelId=${channelId}&maxResults=${maxResults}${pageToken}`
    const result = await axios.get(url, { signal: controller.signal })
    return result
  },

  async getVideos ({ videosIds, controller }: GetVideos) {
    const url = `${API_ROUTES.video.get}&id=${videosIds.join(',')}`
    const result = await axios.get(url, { signal: controller.signal })
    return result
  }
}
