import { type HomePageVideos, type Search } from '@/models'
import { youtubeService } from '@/services'
import { type RootState } from '@/store'
import { parseData } from '@/utils'
import { loadAbort } from '@/utils/loadAbortAxios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AxiosError } from 'axios'

export interface KnownError {
  message: string
  name: string
  code: number | undefined
}

interface DataSearch {
  isNext: boolean
  query: string | undefined
}

export const searchVideos = createAsyncThunk(
  'searchVideosApp/searchVideos',
  async (dataSearch: DataSearch, { getState, rejectWithValue, signal }) => {
    const {
      searchVideosApp: { nextPageToken: nextPageTokenFromState, searchResults }
    } = getState() as RootState

    const { isNext, query } = dataSearch

    try {
      const controller = loadAbort()
      const params: Search = {
        isNext,
        maxResults: 20,
        nextPageToken: nextPageTokenFromState,
        controller,
        query
      }
      signal.addEventListener('abort', () => {
        controller.abort()
      })

      const { data: { items, nextPageToken } } = await youtubeService.search(params)
      const channelIds: string[] = []
      const videosIds: string[] = []

      items.forEach((item: { snippet: { channelId: string }, id: { videoId: string } }) => {
        channelIds.push(item.snippet.channelId)
        videosIds.push(item.id?.videoId)
      })

      const {
        data: { items: foundVideos }
      } = await youtubeService.getVideos({ videosIds, controller })

      const {
        data: { items: channels }
      } = await youtubeService.channels(channelIds, controller)

      const parsedData: HomePageVideos[] = parseData({ videos: foundVideos, channels })
      if (Array.isArray(searchResults)) return { parsedData: [...searchResults, ...parsedData], nextPageToken }
    } catch (err) {
      const error: AxiosError<KnownError> = err as any
      return rejectWithValue(error.message)
    }
  }
)
