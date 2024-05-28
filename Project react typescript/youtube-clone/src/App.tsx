import { type FC } from 'react'
import { Provider } from 'react-redux'
import { Navbar } from './components'
import { store } from './store'
import { Outlet, ScrollRestoration } from 'react-router-dom'
export const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-full">
        <Navbar />
        <section
          className="flex flex-row h-[calc(100%-56px)] overflow-y-auto"
          id="infiniteScroll"
        >
          <Outlet />
          <ScrollRestoration />
        </section>
      </div>
    </Provider>
  )
}
