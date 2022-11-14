import { Admin } from '@/pages/Admin'
import { Home } from '@/pages/Home'
import { ReactLocation, Route } from '@tanstack/react-location'

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
]

export const location = new ReactLocation()
