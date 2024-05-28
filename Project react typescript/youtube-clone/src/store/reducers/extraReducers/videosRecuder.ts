import { type HomePageVideos, type GetAll } from '@/models'
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

export const getAllVideoPage = createAsyncThunk(
  'videoApp/getAllVideoPage',
  async (isNext: boolean, { getState, rejectWithValue, signal }) => {
    const {
      videosApp: { nextPageToken: nextPageTokenFromState, videos }
    } = getState() as RootState
    try {
      const controller = loadAbort()
      const params: GetAll = {
        isNext,
        maxResults: 15,
        nextPageToken: nextPageTokenFromState,
        controller
      }
      signal.addEventListener('abort', () => {
        controller.abort()
      })
      const channelIds: string[] = []
      const { data: { items: foundVideos, nextPageToken } } = await youtubeService.getAll(params)

      foundVideos.forEach((item: { snippet: { channelId: string } }) => {
        channelIds.push(item.snippet.channelId)
      })

      const { data: { items: channels } } = await youtubeService.channels(channelIds, controller)
      const parsedData: HomePageVideos[] = parseData({ videos: foundVideos, channels })

      if (Array.isArray(videos)) return { parsedData: [...videos, ...parsedData], nextPageToken }
    } catch (err) {
      const error: AxiosError<KnownError> = err as any
      return rejectWithValue(error.message)
    }
  }
)
