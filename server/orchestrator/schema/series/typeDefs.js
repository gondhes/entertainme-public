const { gql } = require('apollo-server')

const seriesTypeDefs = gql`

  type Series {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  input SeriesInput {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  type SeriesMessage {
    message: String
  }

  extend type Query {
    allSeries: [Series]
    series(id: ID): Series
  }
  extend type Mutation {
    addSeries(series: SeriesInput): Series
    updateSeries(id: ID, series: SeriesInput): SeriesMessage
    deleteSeries(id: ID) : SeriesMessage
  }
`

module.exports = seriesTypeDefs