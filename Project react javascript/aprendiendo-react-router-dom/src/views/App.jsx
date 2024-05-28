import { RouterProvider } from 'react-router-dom'
import { Header } from '../components/Header'
import { router } from '../routes'

export const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}