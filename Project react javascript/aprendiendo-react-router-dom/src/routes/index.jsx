import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../views/Home'
import { About } from '../views/About'
import { Contact } from '../views/Contac'
import { ErrorView } from '../views/Error'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "contacts/:id",
        element: <Contact />
      }
    ]
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "*",
    element: <ErrorView />
  }
])