import { type InitialStateVideoDetail } from '@/models'
import { createSlice } from '@reduxjs/toolkit'
import { getDetailVideo } from '../reducers'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialStateVideoDetail = {
  currentPlaying: null,
  error: '',
  loading: false
}

export const detailVideoSlice = createSlice({
  name: 'videoDetail',
  initialState,
  reducers: {
    clearDetail: (state) => {
      state.currentPlaying = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getDetailVideo.pending, (state, _action) => {
      state.loading = true
    })
    builder.addCase(getDetailVideo.fulfilled, (state, action) => {
      state.currentPlaying = action.payload.parsedData
      state.loading = false
    })
    builder.addCase(getDetailVideo.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export const { clearDetail } = detailVideoSlice.actions

export default detailVideoSlice.reducer
