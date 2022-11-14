/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { globalStore } from '@/hooks/globalStore'

export const Admin = () => {
  const { adminRender, rerenderAdmin } = globalStore.adminStore()
  const { rerender } = globalStore.reactStore()

  return (
    <div id='admin'>
      <h1>Admin</h1>
      <nav className='admin-navigation'>
        <ul>
          <li onClick={() => rerenderAdmin(rerender.profile)}>Profile</li>
          <li onClick={() => rerenderAdmin(rerender.list)}>Users List</li>
        </ul>
      </nav>
      <main>{adminRender}</main>
    </div>
  )
}
