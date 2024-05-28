import 'react-loading-skeleton/dist/skeleton.css'
import { type FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const SkeletonHome: FC = () => {
  const items: number[] = new Array(15).fill(0)
  return (
    <div className="w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3 px-5 pt-[32px]">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {items.map((_item, index) => {
          return (
            <div key={index} className='mb-8'>
              <Skeleton
                count={1}
                borderRadius="0.75rem"
                className="lg:h-44 md:h-24 h-40 mb-1"
              />
              <div className="flex items-center w-full">
                <Skeleton
                  count={1}
                  height={36}
                  width={36}
                  circle={true}
                  className="mr-3"
                />
                <div className="flex flex-col w-full">
                  <Skeleton count={1} className="lg:h-6 mb-1" />
                  <Skeleton count={1} className="lg:h-6" />
                </div>
              </div>
            </div>
          )
        })}
      </SkeletonTheme>
    </div>
  )
}
