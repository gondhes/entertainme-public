const { gql } = require('apollo-server')

const moviesTypeDefs = gql`

  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  input MovieInput {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  type MovieMessage {
    message: String
  }

  extend type Query {
    movies: [Movie]
    movie(id: ID): Movie
  }
  extend type Mutation {
    addMovie(movie: MovieInput): Movie
    updateMovie(id: ID, movie: MovieInput): MovieMessage
    deleteMovie(id: ID): MovieMessage
  }
`

module.exports = moviesTypeDefs