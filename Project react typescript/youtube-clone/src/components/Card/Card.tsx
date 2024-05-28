import { type HomePageVideos } from '@/models'
import { type FC } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface Props {
  item: HomePageVideos
}

export const Card: FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col mb-8" style={{ marginRight: 'calc(16 / 2)' }}>
      <Link to={`/watch/${item?.video?.videoId}`}>
        <div className="relative md:rounded-xl overflow-hidden">
          <img src={item?.video?.videoImage?.urlImage} alt={item?.video?.videoId} className="h-full w-full object-cover" loading='lazy' />
          <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {item?.video?.videoDuration}
          </span>
        </div>
      </Link>
      <div className="flex text-white mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            <img className="h-full w-full object-cover" src={item?.channelInfo?.channelImage?.urlImage} alt="" />
          </div>
        </div>
        <div className="flex flex-col ml-3 overflow-hidden  w-[271px]">
          <span className="text-base font-medium line-clamp-2">
            {item?.video?.videoTitle}
          </span>
          <span className="text-sm font-medium mt-1 text-[#aaa] flex items-center">
            {item?.channelInfo?.channelName}
            <BsFillCheckCircleFill className="text-[#aaa] text-sm ml-1" />
          </span>
          <div className="flex text-sm font-normal text-[#aaa] truncate overflow-hidden">
            <span>{item?.video?.videoViews}</span>
            <span className="flex text-[24px] leading-none font-normal text-[#aaa] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{item?.video?.videoPublishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
