import { type HomePageVideos } from '@/models'
import { type FC } from 'react'
import { Link } from 'react-router-dom'
interface Props {
  item: HomePageVideos
}
export const WatchCard: FC<Props> = ({ item }) => {
  return (
    <div className="flex gap-3">
      <div className="relative min-w-fit">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          { item?.video?.videoDuration }
        </span>
        <Link to="/">
          <img src={item?.video?.videoImages?.standard?.url} className="h-24 w-40" alt="thumbnail" />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h4 className="text-sm">
          <span className="line-clamp-2">
            { item?.video?.videoTitle}
          </span>
        </h4>
        <div className="text-xs text-grap-400">
          <div className="hover:text-white">{ item?.channelInfo?.channelName}</div>
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">{item?.video?.videoViews} views</span>
              <span>{item?.video?.videoPublishedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
