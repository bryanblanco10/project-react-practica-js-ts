import { Route, Routes, Link, useParams, Outlet, NavLink as NavLinkReactRouter, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

const tacos = [
  {
    name: 'Taco1'
  },
  {
    name: 'Taco2'
  }, {
    name: 'Taco3'
  }
]

const Home = () => <h1>Home</h1>
const SearchPage = () => {
  return (
    <>
      <h1>Search Page</h1>
      <ul>
        {tacos.map(item => (
          <li key={item.name}>
            <Link to={`/taco/${item.name}`}>{item?.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
const Tacos = () => {
  const { name } = useParams()
  return (
    <>
      <h1>Taco: {name}</h1>
      <Link to='details'>Ir al detalle</Link>
      <Outlet />
    </>
  )
}

const TacoDetail = () => {
  const { name } = useParams()
  return (
    <h1>
      Detalle del taco {name}
    </h1>
  )
}

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter
      {...props}
      className={({ isActive }) => isActive ? 'is-active' : undefined}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  )
}

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleClick = () => {
    login()
    navigate(state?.location.pathname ?? '/')
  }
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ location }} />
  }

  return children
}
function App () {
  return (
    <>
      <header>
        <h1>BryanChollos 💵 🚗 </h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/search-page'
              >
                Search Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search-page' element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
        <Route path='/taco/:name' element={<ProtectedRoute><Tacos /></ProtectedRoute>}>
          <Route path='details' element={<TacoDetail />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
