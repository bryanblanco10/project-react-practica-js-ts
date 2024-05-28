import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    async lazy () {
      const { App } = await import(/* webpackChunkName: 'App' */ '@/App')
      return {
        Component: App
      }
    },
    children: [
      {
        path: '/',
        async lazy () {
          const { Home } = await import(/* webpackChunkName: 'Home' */ '@/pages')
          return {
            Component: Home
          }
        }
      },
      {
        path: '/results/:query',
        async lazy () {
          const { ResultSearch } = await import(/* webpackChunkName: 'ResultSearch' */ '@/pages')
          return {
            Component: ResultSearch
          }
        }
      },
      {
        path: '/watch/:id',
        async lazy () {
          const { Watch } = await import(/* webpackChunkName: 'Watch' */ '@/pages')
          return {
            Component: Watch
          }
        }
      }
    ]
  },
  {
    path: '*',
    async lazy () {
      const { ErrorView } = await import(/* webpackChunkName: 'ErrorView' */ '@/pages')
      return {
        Component: ErrorView
      }
    }
  }
])
