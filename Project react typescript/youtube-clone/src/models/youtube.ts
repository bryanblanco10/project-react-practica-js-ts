interface InitialState {
  error: unknown
  loading: boolean
}

export interface InitialStateVideos extends InitialState {
  videos: HomePageVideos[] | undefined
  nextPageToken: string | null
}

export interface InitialStateVideoDetail extends InitialState {
  currentPlaying: HomePageVideos | null
}

export interface InitialStateRecommendedVideos extends InitialState {
  recommendedVideos: HomePageVideos[]
  nextPageToken: string | null
  isNext: boolean
}
export interface InitialStateSearchVideos extends InitialState {
  query: string | undefined
  searchResults: HomePageVideos[] | undefined
  nextPageToken: string | null
}

export interface HomePageVideos {
  video: Video
  channelInfo: Channel
}

export interface Image {
  url: string
}
export interface Video {
  videoId: string
  videoDescription: string
  videoTitle: string
  videoLiveBroadcastContent: 'live' | 'none' | 'upcoming'
  videoPublishedAt: string
  videoDuration: string
  videoChannelId: string
  videoLink: string
  videoViews: string
  videoImage: {
    urlImage: string
  }
  videoStatistics: {
    commentCount: string
    favoriteCount: string
    likeCount: string
    viewCount: string
  }
}

export interface Channel {
  channelName: string
  channelId: string
  channelUrl: string
  channelImage: {
    urlImage: string
  }
}

export interface CurrentPlaying {
  videoId: string
  videoTitle: string
  videoDescription: string
  videoViews: string
  videoLikes: string
  videoAge: string
  channelInfo: {
    id: string
    image: string
    name: string
    subscribers: string
  }
}

export interface RecommendedVideos {
  videoId: string
  videoTitle: string
  videoThumbnail: string
  videoDuration: string
  videoViews: string
  videoAge: string
  channelInfo: {
    id: string
    name: string
  }
}

export interface Item {
  snippet: {
    title: string
    thumbnails: { medium: { url: string } }
    publishedAt: Date
    channelTitle: string
    channelId: string
  }
  contentDetails: { upload: { videoId: string } }
}
