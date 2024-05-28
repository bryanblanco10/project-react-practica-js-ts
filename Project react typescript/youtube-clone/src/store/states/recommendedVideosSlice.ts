import { type InitialStateRecommendedVideos } from '@/models'
import { createSlice } from '@reduxjs/toolkit'
import { getDetailVideo } from '../reducers'
import { getRecommendedVideos } from '../reducers/extraReducers/recommendedVideoReducer'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialStateRecommendedVideos = {
  recommendedVideos: [],
  error: '',
  loading: false,
  nextPageToken: '',
  isNext: false
}

export const detailVideoSlice = createSlice({
  name: 'videoDetail',
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.recommendedVideos = []
      state.error = ''
      state.loading = false
      state.nextPageToken = ''
      state.isNext = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getRecommendedVideos.pending, (state, _action) => {
      state.loading = true
    })
    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      state.recommendedVideos = action.payload?.parsedData
      state.nextPageToken = action.payload?.nextPageToken
      state.loading = false
      state.isNext = action.payload?.isNext
    })
    builder.addCase(getDetailVideo.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export const { clearVideos } = detailVideoSlice.actions

export default detailVideoSlice.reducer
