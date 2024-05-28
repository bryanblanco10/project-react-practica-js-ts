import { useAppDispatch } from '@/store/hooks'
import { getDetailVideo } from '@/store/reducers'
import { videoDetailSelector } from '@/store/selectors'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const useDetailVideo = () => {
  let abort: () => void
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const currentPlaying = useSelector(videoDetailSelector, shallowEqual)
  const cancelEndpoint = () => {
    abort()
  }

  const loadDetail = (id: string): void => {
    const promise = dispatch(getDetailVideo(id))
    abort = promise?.abort
  }

  useEffect(() => {
    if (id != null) {
      loadDetail(id)
    }

    return () => {
      cancelEndpoint()
    }
  }, [id])

  return {
    detail: currentPlaying
  }
}
