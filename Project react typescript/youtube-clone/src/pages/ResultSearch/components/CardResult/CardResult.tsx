import { type HomePageVideos } from '@/models'
import { type FC } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export interface Props {
  item: HomePageVideos
}

export const CardResult: FC<Props> = ({ item }) => {
  return (
    <Link to={`/watch/${item?.video?.videoId}`}>
      <div className="flex lg:flex-row md:flex-row flex-col mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
        <div className="relative flex shrink-0 lg:w-64 md:w-64 w-full rounded-xl bg-slate-800 overflow-hidden">
          <img className="h-full w-full object-cover" src={item?.video?.videoImage?.urlImage} alt="" />
          <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {item?.video?.videoDuration}
          </span>
        </div>
        <div className="flex flex-col lg:ml-3 md:ml-3 ml-0 mt-4 md:mt-0 overflow-hidden">
          <span className="lg:text-lg md:text-base text-sm font-normal line-clamp-2 text-white">
            {item?.video?.videoTitle}
          </span>
          <div className="flex text-xs font-normal text-white/[0.7] truncate overflow-hidden">
            <span>{`${item?.video?.videoViews} views`}</span>
            <span className="flex leading-none font-normal text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{item?.video?.videoPublishedAt}</span>
          </div>
          <div className="flex items-center mt-3">
            <div className="flex items-start mr-3">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={item?.channelInfo?.channelImage?.urlImage}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-normal text-white/[0.7] flex items-center">
                {item?.channelInfo?.channelName}
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
              </span>
            </div>
          </div>
          <span className="empty:hidden text-xs line-clamp-1 text-white/[0.7] mt-3">
            {item?.video?.videoDescription}
          </span>
        </div>
      </div>
    </Link>
  )
}
