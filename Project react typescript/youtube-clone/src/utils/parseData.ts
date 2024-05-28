import { type Channel, type ChannelYoutube, type HomePageVideos, type Video, type VideoYoutube } from '@/models'
import { abbreviateNumber } from 'js-abbreviation-number'
import { parseVideoDuration, timeSince } from '.'
interface Data {
  videos: any[]
  channels: any[]
  nextPageToken?: string
}
export const parseData = ({ videos, channels }: Data): HomePageVideos[] => {
  const parseVideos: Video[] = []
  videos.forEach((item: VideoYoutube) => {
    parseVideos.push({
      videoId: item?.id,
      videoDescription: item?.snippet?.description,
      videoTitle: item?.snippet.title,
      videoLiveBroadcastContent: item?.snippet?.liveBroadcastContent,
      videoPublishedAt: timeSince(new Date(item?.snippet?.publishedAt)),
      videoDuration: parseVideoDuration(item?.contentDetails?.duration),
      videoImage: { urlImage: item?.snippet?.thumbnails?.medium?.url },
      videoStatistics: {
        commentCount: abbreviateNumber(Number(item?.statistics?.commentCount), 2),
        favoriteCount: abbreviateNumber(Number(item?.statistics?.favoriteCount), 2),
        likeCount: abbreviateNumber(Number(item?.statistics?.likeCount), 2),
        viewCount: abbreviateNumber(Number(item?.statistics?.viewCount), 2)
      },
      videoChannelId: item?.snippet.channelId,
      videoLink: `https://www.youtube.com/watch?v=${item?.id}`,
      videoViews: abbreviateNumber(
        Number(item?.statistics.viewCount), 2
      )
    })
  })

  const parseChannels: Channel[] = []
  channels.forEach((item: ChannelYoutube) => {
    parseChannels.push({
      channelName: item?.snippet?.title,
      channelId: item?.id,
      channelUrl: item?.snippet?.customUrl,
      channelImage: { urlImage: item?.snippet.thumbnails?.default?.url }
    })
  })

  const parsedData: HomePageVideos[] = []

  parseVideos.forEach((item: Video) => {
    const channel: Channel | undefined = parseChannels.find((el: Channel) => el.channelId === item.videoChannelId)

    if (channel !== undefined) {
      parsedData.push({
        video: { ...item },
        channelInfo: { ...channel }
      })
    }
  })

  return parsedData
}
