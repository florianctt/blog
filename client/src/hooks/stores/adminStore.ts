import { IAdminStore } from '@/vite-env'
import create from 'zustand'

export const adminStore = create<IAdminStore>(set => ({
  adminRender: 'Hello to the admin page',
  rerenderAdmin: el => set(() => ({ adminRender: el })),
}))
