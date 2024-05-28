export interface Controller {
  controller: AbortController
}

export interface GetAll extends Controller {
  isNext: boolean
  maxResults: number
  nextPageToken: string | null
}

export interface Search extends Controller {
  isNext: boolean
  maxResults: number
  query: string | undefined
  nextPageToken: string | null
}

export interface GetDetail extends Controller {
  id: string
}

export interface GetRecommended extends Controller {
  id: string | undefined
  maxResults: number
  isNext: boolean
  nextPageToken: string | null
  channelId: string | undefined
}

export interface GetVideos extends Controller {
  videosIds: string[]
}
