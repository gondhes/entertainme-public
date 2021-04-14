import { gql } from "@apollo/client"

export const ADD_MOVIE = gql`
  mutation AddMovie($MovieInput: newMovie) {
    addMovie(movie: $MovieInput) {
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