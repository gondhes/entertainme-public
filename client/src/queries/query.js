import { gql } from "@apollo/client"


export const GET_DATA = gql`
  query GetAllData {
    movies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }

    allSeries {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const GET_MOVIE = gql`
  query GetMovie($id: ID) {
    movie(id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const GET_SERIES = gql`
  query GetSeries($id: ID) {
    series(id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`
