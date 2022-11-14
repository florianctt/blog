import { Outlet, Router } from '@tanstack/react-location'
import { routes, location } from './routes/routes'

export const App = () => {
  return (
    <>
      <Router routes={routes} location={location}>
        <Outlet />
      </Router>
    </>
  )
}
