import { createBrowserRouter } from 'react-router-dom'
import {Home, AboutUs, ContactUs, Register, ErrorNotFound} from "../views"
import { App } from '../App'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/quienes-somos",
        element: <AboutUs />
      },
      {
        path: "/contactanos",
        element: <ContactUs />
      },
      {
        path: "/registrarse",
        element: <Register />
      },
    ]
  },
  {
    path: "*",
    element: <ErrorNotFound />
  }
])