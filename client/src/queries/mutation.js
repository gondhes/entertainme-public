import { gql } from "@apollo/client"

export const ADD_MOVIE = gql`
  mutation AddMovie($newMovie: MovieInput) {
    addMovie(movie: $newMovie) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: ID) {
    deleteMovie(id: $id) {
      message
    }
  }
`