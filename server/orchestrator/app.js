const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server')
// const moviesSchema = require('./schema/movies/movies')
// const seriesSchema = require('./schema/series/series')

const moviesTypeDefs = require('./schema/movies/typeDefs')
const moviesResolvers = require('./schema/movies/resolvers')
const seriesTypeDefs = require('./schema/series/typeDefs')
const seriesResolvers = require('./schema/series/resolvers')

const typeDefs = gql`
  type Query
  type Mutation
`

const schema = makeExecutableSchema({
  typeDefs : [
    typeDefs,
    moviesTypeDefs,
    seriesTypeDefs
  ],
  resolvers: [
    moviesResolvers,
    seriesResolvers
  ]
})

const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${ url }`)
})