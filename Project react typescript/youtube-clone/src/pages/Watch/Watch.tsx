import { useDetailVideo, useRecommendedVideo } from '@/hooks'
import { type FC } from 'react'
import { DetailVideo, FrameVideo, RecommendedVideo } from './components'
import InfiniteScroll from 'react-infinite-scroll-component'
import { type HomePageVideos } from '@/models'
export const Watch: FC = () => {
  const { detail } = useDetailVideo()
  const { recommendedVideos, loadRecommendedVideos, id, isNext } =
    useRecommendedVideo()

  return (
    <div
      className="flex flex-row justify-center w-full"
      style={{ maxWidth: 'calc(1280px + 402px + 3 * 24px)', margin: '0 auto' }}
    >
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6">
          <FrameVideo urlVideo={detail?.video?.videoLink} />
          <DetailVideo detail={detail} />
        </div>
        <div className="flex flex-col py-6 px-4 lg:w-[350px] xl:w-[400px]">
          <InfiniteScroll
            dataLength={recommendedVideos.length}
            next={() => {
              loadRecommendedVideos(id, true)
            }}
            hasMore={isNext}
            loader={<span>Cargando...</span>}
            scrollableTarget="infiniteScroll"
          >
            {recommendedVideos.map((item: HomePageVideos) => <RecommendedVideo key={item?.video?.videoId} item={item} />)}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
}
