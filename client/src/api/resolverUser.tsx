import { useQuery } from '@tanstack/react-query'
import { request, gql } from 'graphql-request'

const endpoint = 'http://localhost:4242/graphql'

export const getUsers = () => {
  return useQuery(['users'], async () => {
    const users = await request(
      endpoint,
      gql`
        query {
          getUsers {
            id
            firstName
            lastName
            mobile
            email
            password
            registeredAt
          }
        }
      `
    ).then(data => data.getUsers)

    return users
  })
}

export const getUser = () => {
  return useQuery(['user'], async () => {
    const user = await request(
      endpoint,
      gql`
        query {
          getUser(id: ${1}) {
            id
            firstName
            lastName
            mobile
            email
            password
            registeredAt
          }
        }
      `
    ).then(data => data.getUser)

    return user
  })
}
