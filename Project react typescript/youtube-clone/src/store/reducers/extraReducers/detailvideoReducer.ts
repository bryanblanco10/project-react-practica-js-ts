import { type HomePageVideos, type GetDetail } from '@/models'
import { youtubeService } from '@/services'
import { parseData } from '@/utils'
import { loadAbort } from '@/utils/loadAbortAxios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AxiosError } from 'axios'

export interface KnownError {
  message: string
  name: string
  code: number | undefined
}

export const getDetailVideo = createAsyncThunk(
  'detailVideoApp/getDetailVideo',
  async (id: string, { rejectWithValue, signal }) => {
    try {
      const controller = loadAbort()
      const params: GetDetail = {
        controller,
        id
      }
      signal.addEventListener('abort', () => {
        controller.abort()
      })
      const channelIds: string[] = []
      const {
        data: { items: foundVideos }
      } = await youtubeService.getDetail(params)
      foundVideos.forEach((item: { snippet: { channelId: string } }) => {
        channelIds.push(item.snippet.channelId)
      })

      const {
        data: { items: channels }
      } = await youtubeService.channels(channelIds, controller)
      const parsedData: HomePageVideos[] = parseData({
        videos: foundVideos,
        channels
      })
      const dataParsed: HomePageVideos = parsedData[0]
      return { parsedData: dataParsed }
    } catch (err) {
      const error: AxiosError<KnownError> = err as any
      return rejectWithValue(error.message)
    }
  }
)
