import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/css/style.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { localStorageProvider } from './swrConfig'
import { SWRConfig } from 'swr'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ provider: localStorageProvider }}>
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>
)
