import { getUsers } from '@/api/resolverUser'
import { User } from '@/vite-env'
import React from 'react'

export const UsersList = () => {
  const { status, data, error } = getUsers()
  return (
    <>
      <div className='users'>
        <h2>Users List</h2>
        <>
          {status === 'loading' ? (
            <p>Loading...</p>
          ) : status === 'error' ? (
            <p>Error: {error instanceof Error && error.message}</p>
          ) : (
            <div className='card'>
              {data.map((user: User) => (
                <React.Fragment key={user.id}>
                  <h3>{`${user.firstName} ${user.lastName}`}</h3>
                  <p>{user.mobile}</p>
                  <p>{user.email}</p>
                  <p>{user.registeredAt}</p>
                  <p>{user.id}</p>
                </React.Fragment>
              ))}
            </div>
          )}
        </>
      </div>
    </>
  )
}
