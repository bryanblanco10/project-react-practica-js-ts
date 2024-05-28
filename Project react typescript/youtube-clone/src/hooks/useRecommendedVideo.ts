import { useAppDispatch } from '@/store/hooks'
import { getRecommendedVideos } from '@/store/reducers'
import { videoRecommendedSelector } from '@/store/selectors'
import { clearVideos } from '@/store/states/recommendedVideosSlice'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDetailVideo } from '.'

export const useRecommendedVideo = () => {
  let promise: { abort: () => void }
  const { id } = useParams()
  const { detail } = useDetailVideo()
  const dispatch = useAppDispatch()

  const { recommendedVideos, isNext } = useSelector(videoRecommendedSelector, shallowEqual)
  const cancelEndpoint = () => {
    promise?.abort()
  }

  const loadRecommendedVideos = (id: string | undefined, isPage: boolean): void => {
    const prom = dispatch(getRecommendedVideos({ id, isPage }))
    promise = { abort: prom?.abort }
  }

  useEffect(() => {
    if (id !== null && detail !== null) {
      dispatch(clearVideos())
      loadRecommendedVideos(id, false)
    }

    return () => {
      cancelEndpoint()
    }
  }, [id, detail])

  return {
    id,
    recommendedVideos,
    loadRecommendedVideos,
    isNext
  }
}
