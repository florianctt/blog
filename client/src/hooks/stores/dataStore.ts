import { IDataStore } from '@/vite-env'
import create from 'zustand'

export const dataStore = create<IDataStore>(set => ({
  dataState: [],
  setDataState: data => set({ dataState: data }),
  // updateUser: (value: string, input: string) => {
  //   switch (input) {
  //     case 'firstname':
  //       dataState[0].firstName = value
  //       return setDataState(dataState)
  //     case 'lastname':
  //       dataState[0].lastName = value
  //       return setDataState(dataState)
  //     case 'mobile':
  //       dataState[0].mobile = value
  //       return setDataState(dataState)
  //     case 'email':
  //       dataState[0].email = value
  //       return setDataState(dataState)
  //   }
  //   setDataState(dataState)
  // }
}))
