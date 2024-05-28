import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { searchVideos } from '../reducers'
import { type InitialStateSearchVideos } from '@/models'

const initialState: InitialStateSearchVideos = {
  query: '',
  searchResults: [],
  nextPageToken: '',
  error: '',
  loading: false
}

const searchVideosSlice = createSlice({
  name: 'searchVideosApp',
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.searchResults = []
    },
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(searchVideos.pending, (state) => {
      state.loading = true
    })
    builder.addCase(searchVideos.fulfilled, (state, action) => {
      state.searchResults = action.payload?.parsedData
      state.nextPageToken = action.payload?.nextPageToken
      state.loading = false
    })
    builder.addCase(searchVideos.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  }
})

export const { clearVideos, updateQuery } = searchVideosSlice.actions
export default searchVideosSlice.reducer
