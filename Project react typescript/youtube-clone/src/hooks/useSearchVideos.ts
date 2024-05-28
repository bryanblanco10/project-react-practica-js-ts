import { useAppDispatch } from '@/store/hooks'
import { searchVideos } from '@/store/reducers'
import { searchResultsSelector } from '@/store/selectors'
import { clearVideos, updateQuery } from '@/store/states/searchVideosSlice'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const useSearchVideos = () => {
  let promise: { abort: () => void }
  const dispatch = useAppDispatch()
  const { query } = useParams()
  const searchResults = useSelector(searchResultsSelector, shallowEqual)

  const cancelEndpoint = () => {
    promise?.abort()
  }

  const searchingVideos = (isNext: boolean, query: string): void => {
    dispatch(updateQuery(query))
    const prom = dispatch(searchVideos({ isNext, query }))
    promise = { abort: prom?.abort }
  }

  useEffect(() => {
    return () => {
      dispatch(clearVideos())
    }
  }, [dispatch])

  useEffect(() => {
    if (query !== null && query !== undefined) {
      dispatch(clearVideos())
      searchingVideos(false, query)
    }
    return () => {
      cancelEndpoint()
    }
  }, [query])

  return {
    query: query ?? '',
    searchResults,
    searchingVideos
  }
}
