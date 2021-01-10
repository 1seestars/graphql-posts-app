import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema(`${__dirname}/schema.graphql`)

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
