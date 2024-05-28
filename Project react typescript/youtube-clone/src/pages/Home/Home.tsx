import { Card, Sidebar } from '@/components'
import { useVideos } from '@/hooks'
import { type HomePageVideos } from '@/models'
import { type FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SkeletonHome } from './components'

export const Home: FC = () => {
  const { videos, loadVideos } = useVideos()
  return (
    <>
      <Sidebar />
      <main className="grow w-[calc(100%-240px)] bg-[#0f0f0f]">
        <InfiniteScroll
          dataLength={videos.length}
          next={() => loadVideos(true)}
          hasMore={videos.length < 200}
          loader={<SkeletonHome />}
          scrollableTarget="infiniteScroll"
        >
          <div className="w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3 px-5 pt-[32px]">
            {videos?.map((item: HomePageVideos) => {
              return <Card item={item} key={item?.video?.videoId} />
            })}
          </div>
        </InfiniteScroll>
      </main>
    </>
  )
}
