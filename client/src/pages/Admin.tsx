/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getUsers } from '@/api/resolverUser'
import { Profile } from '@/components/users/Profile'
import { UsersList } from '@/components/users/UsersList'
import { globalStore } from '@/hooks/globalStore'
import { useEffect } from 'react'

export const Admin = () => {
  const { status, data } = getUsers()
  const { setDataState } = globalStore.dataStore()
  const profile = document.querySelector('.profile') as HTMLDivElement
  const list = document.querySelector('.list') as HTMLDivElement

  useEffect(() => {
    if (status === 'success') {
      setDataState(data)
    }
  }, [status])

  return (
    <div id='admin'>
      <h1>Admin</h1>
      <nav className='admin-navigation'>
        <ul>
          <li
            onClick={() => {
              profile.style.display = 'block'
              list.style.display = 'none'
            }}
          >
            Profile
          </li>
          <li
            onClick={() => {
              profile.style.display = 'none'
              list.style.display = 'block'
            }}
          >
            Users List
          </li>
        </ul>
      </nav>
      <p>Hello</p>
      <div className='profile' style={{ display: 'none' }}>
        <Profile />
      </div>
      <div className='list' style={{ display: 'none' }}>
        <UsersList />
      </div>
    </div>
  )
}
