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