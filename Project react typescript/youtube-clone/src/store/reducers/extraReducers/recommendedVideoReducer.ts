import { type HomePageVideos, type GetRecommended } from '@/models'
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

interface DataVideo {
  id: string | undefined
  isPage: boolean
}

export const getRecommendedVideos = createAsyncThunk(
  'recommendedVideosApp/getRecommendedVideos',
  async (dataVideo: DataVideo, { getState, rejectWithValue, signal }) => {
    const { id, isPage } = dataVideo
    const {
      detailVideo: {
        currentPlaying
      },
      recommendedVideo: {
        nextPageToken: nextPageTokenFromState,
        recommendedVideos
      }
    } = getState() as RootState
    try {
      const controller = loadAbort()
      const params: GetRecommended = {
        controller,
        id,
        maxResults: 20,
        isNext: isPage,
        channelId: currentPlaying?.channelInfo?.channelId,
        nextPageToken: nextPageTokenFromState
      }
      signal.addEventListener('abort', () => {
        controller.abort()
      })
      const {
        data: { items, nextPageToken }
      } = await youtubeService.getRecommended(params)
      const channelIds: string[] = []
      const videosIds: string[] = []

      items.forEach(
        (item: {
          snippet: { channelId: string }
          contentDetails: { upload?: { videoId: string } }
        }) => {
          channelIds.push(item.snippet.channelId)
          if (item.contentDetails?.upload != null) {
            videosIds.push(item.contentDetails?.upload?.videoId)
          }
        }
      )

      const {
        data: { items: foundVideos }
      } = await youtubeService.getVideos({ videosIds, controller })

      const {
        data: { items: channels }
      } = await youtubeService.channels(channelIds, controller)

      const parsedData: HomePageVideos[] = parseData({
        videos: foundVideos,
        channels
      })

      const isNextPage: boolean = nextPageToken !== undefined

      return {
        parsedData: [...recommendedVideos, ...parsedData],
        nextPageToken,
        isNext: isNextPage
      }
    } catch (err) {
      const error: AxiosError<KnownError> = err as any
      return rejectWithValue(error.message)
    }
  }
)
