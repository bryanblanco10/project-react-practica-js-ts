import { Sidebar } from '@/components'
import { useSearchVideos } from '@/hooks'
import { type HomePageVideos } from '@/models'
import { type FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CardResult } from './components'

export const ResultSearch: FC = () => {
  const { searchResults, searchingVideos, query } = useSearchVideos()
  return (
    <>
      <Sidebar />
      <main className="grow w-[calc(100%-240px)] bg-[#0f0f0f]">
        <div
          className="flex justify-center flex-col lg:p-5 md:p-4 p-3"
          style={{ margin: '0 auto', maxWidth: '1280px' }}
        >
          <InfiniteScroll
            dataLength={searchResults.length}
            next={() => {
              searchingVideos(true, query)
            }}
            hasMore={searchResults.length < 200}
            loader={<span>Cargando...</span>}
            scrollableTarget="infiniteScroll"
          >
            {searchResults.map((item: HomePageVideos) => (
              <CardResult key={item?.video?.videoId} item={item} />
            ))}
          </InfiniteScroll>
        </div>
      </main>
    </>
  )
}
