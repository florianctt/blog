import { IDataStore, User } from '@/vite-env'
import create from 'zustand'

export const dataStore = create<IDataStore>(set => ({
  dataState: [],
  setDataState: (data: Partial<User>[]) => set({ dataState: data }),
  // count: 0,
  // setCount: (count: number) => set(state => ({ count: state.count + count })),
  // setDataState: data => set(() => ({ dataState: data })),
  // updateProfile: { firstName: '', lastName: '', mobile: '', email: '' },
}))
