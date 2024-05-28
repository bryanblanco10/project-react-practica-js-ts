import { type InitialStateRecommendedVideos, type HomePageVideos } from '@/models'

export const videosSelector = (state: any): HomePageVideos[] => state.videosApp.videos
export const videoDetailSelector = (state: any): HomePageVideos => state.detailVideo.currentPlaying
export const videoRecommendedSelector = (state: any): InitialStateRecommendedVideos => state.recommendedVideo
export const searchResultsSelector = (state: any): HomePageVideos[] => state.searchVideosApp.searchResults
export const layoutSelector = (state: any): boolean => state.layout.isVisible
