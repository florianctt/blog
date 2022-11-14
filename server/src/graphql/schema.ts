import { buildSchema } from 'graphql'

export const schema = buildSchema(`
type Query {
  getUser(id: Int!): Users
  getUsers: [Users]
}

type Mutation {
  createUser(
    firstName: String!
    lastName: String!
    mobile: String
    email: String!
    password: String!
    registeredAt: String
  ): Users
  deleteUser(id: String): Users
  updateUser(id: String, firstName: String, lastName: String, mobile: String, email: String, password: String): Users
}

type Users {
  id: Int!
  firstName: String!
  lastName: String!
  mobile: String!
  email: String!
  password: String!
  registeredAt: String!
}
`)
