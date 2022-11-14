/// <reference types="vite/client" />

import { ReactElement } from 'react'

interface User {
  id: number
  firstName: string
  lastName: string
  mobile: string
  email: string
  password: string
  registeredAt: string
}

/* Stores */
interface IAdminStore {
  adminRender: ReactElement | string
  rerenderAdmin(el: ReactElement): void
}

interface IDataStore {
  dataState: Partial<User>[]
  setDataState: (data: Partial<User>[]) => void
  // updateProfile: Partial<User>
}

interface IReactStore {
  rerender: {
    profile: JSX.Element
    list: JSX.Element
  }
}
