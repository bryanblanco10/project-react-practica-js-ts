import { useAppDispatch } from '@/store/hooks'
import { getAllVideoPage } from '@/store/reducers'
import { videosSelector } from '@/store/selectors'
import { clearVideos } from '@/store/states/videosSlice'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

export const useVideos = (): any => {
  let abort: () => void
  const dispatch = useAppDispatch()
  const videos = useSelector(videosSelector, shallowEqual)

  const cancelEndpoint = () => {
    abort()
  }

  const loadVideos = (isPage: boolean): void => {
    const promise = dispatch(getAllVideoPage(isPage))
    abort = promise?.abort
  }

  useEffect(() => {
    return () => {
      dispatch(clearVideos())
    }
  }, [dispatch])

  useEffect(() => {
    loadVideos(false)
  }, [])

  useEffect(() => {
    return () => {
      cancelEndpoint()
    }
  }, [])

  return {
    videos,
    loadVideos
  }
}
