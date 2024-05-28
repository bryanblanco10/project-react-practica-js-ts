import { configureStore } from '@reduxjs/toolkit'
import { videosSlice, detailVideoSlice, recommendedVideosSlice, searchVideosSlice, layoutSlice } from './states'

export const store = configureStore({
  reducer: {
    videosApp: videosSlice,
    detailVideo: detailVideoSlice,
    recommendedVideo: recommendedVideosSlice,
    searchVideosApp: searchVideosSlice,
    layout: layoutSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
