import { Profile } from '@/components/users/Profile'
import { UsersList } from '@/components/users/UsersList'
import { IReactStore } from '@/vite-env'
import create from 'zustand'

export const reactStore = create<IReactStore>(() => ({
  rerender: {
    profile: <Profile />,
    list: <UsersList />,
  },
}))
