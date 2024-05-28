import { type HomePageVideos } from '@/models'
import { type FC } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export interface Props {
  detail: HomePageVideos
}

export const DetailVideo: FC<Props> = ({ detail }) => {
  return (
    <>
      <div className="text-white font-medium text-sm md:text-xl mt-4 line-clamp-2">
        {detail?.video?.videoTitle}
      </div>
      <div className="flex justify-between flex-col md:flex-row mt-4">
        <div className="flex">
          <div className="flex items-start">
            <div className="flex h-11 w-11 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={detail?.channelInfo?.channelImage?.urlImage}
                alt={detail?.channelInfo?.channelId}
                loading='lazy'
              />
            </div>
          </div>
          <div className="flex flex-col ml-3">
            <div className="text-white text-md font-normal flex items-center">
              {detail?.channelInfo?.channelName}
              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
            </div>
            <div className="text-white/[0.7] text-sm">10M</div>
          </div>
        </div>
        <div className="flex text-white mt-4 md:mt-0">
          <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
            <AiOutlineLike className="text-xl text-white mr-2" />
            {detail?.video?.videoStatistics?.likeCount}
          </div>
          <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
            {detail?.video?.videoViews} Views
          </div>
        </div>
      </div>
    </>
  )
}
