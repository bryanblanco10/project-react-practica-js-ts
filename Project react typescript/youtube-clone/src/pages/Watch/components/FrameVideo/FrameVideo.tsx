import { type FC } from 'react'
import ReactPlayer from 'react-player'
interface Props {
  urlVideo: string
}
export const FrameVideo: FC<Props> = ({ urlVideo }) => {
  return (
    <>
      <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
        <ReactPlayer
          url={urlVideo}
          controls
          width="100%"
          height="100%"
          style={{ backgroundColor: '#000000' }}
          playing={true}
        />
      </div>
    </>
  )
}
