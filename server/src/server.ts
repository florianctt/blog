import express, { urlencoded } from 'express'
import { graphqlHTTP } from 'express-graphql'
import * as dotenv from 'dotenv'
import cors from 'cors'

import { schema } from './graphql/schema'
import { resolvers } from './graphql/resolvers/resolvers'

dotenv.config()

const { PORT } = process.env

const app = express()

// Create an express server and GraphQL endpoint
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
)
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

// Listening to our server
app.listen(PORT, () => {
  console.log(`🚀 Server ready at on http://localhost:${PORT}/graphql`)
})
