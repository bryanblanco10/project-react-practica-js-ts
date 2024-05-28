import { type InitialStateVideos } from '@/models'
import { createSlice } from '@reduxjs/toolkit'
import { getAllVideoPage } from '../reducers'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialStateVideos = {
  videos: [],
  nextPageToken: null,
  error: '',
  loading: false
}

export const videosSlice = createSlice({
  name: 'videosApp',
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllVideoPage.pending, (state, _action) => {
      state.loading = true
    })
    builder.addCase(getAllVideoPage.fulfilled, (state, action) => {
      state.loading = false
      state.videos = action.payload?.parsedData
      state.nextPageToken = action.payload?.nextPageToken
    })
    builder.addCase(getAllVideoPage.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export const { clearVideos } = videosSlice.actions

export default videosSlice.reducer
