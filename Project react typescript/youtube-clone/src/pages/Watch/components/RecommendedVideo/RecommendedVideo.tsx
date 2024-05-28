import { type HomePageVideos } from '@/models'
import { type FC } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export interface Props {
  item: HomePageVideos
}

export const RecommendedVideo: FC<Props> = ({ item }) => {
  return (
    <>
      <div className="flex mb-3">
        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <Link to={`/watch/${item?.video?.videoId}`}>
            <img className="h-full w-full object-cover" src={item?.video?.videoImage?.urlImage} alt="" />
            <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
              {item?.video?.videoDuration}
            </span>
          </Link>
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm font-medium line-clamp-2 text-white">
            {item?.video?.videoTitle}
          </span>
          <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-normal mt-2 text-white/[0.7] flex items-center">
            {item?.channelInfo?.channelName}
            <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
          </span>
          <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-normal text-white/[0.7] truncate overflow-hidden">
            <span>{'2 views'}</span>
            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{item?.video?.videoPublishedAt}</span>
          </div>
        </div>
      </div>
    </>
  )
}
