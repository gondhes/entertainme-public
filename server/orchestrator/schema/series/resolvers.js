const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()

const seriesUrl = 'http://localhost:4002/tv/'

const seriesResolvers = {
  Query: {
    allSeries: async () => {
      try {
        const allSeriesData = await redis.get('allSeries:data')
        if(!allSeriesData) {
          const { data } = await axios.get(seriesUrl)
          redis.set('allSeries:data', JSON.stringify(data))
          return data
        } else {
          return JSON.parse(allSeriesData)
        }
      } catch(err) {
        return err
      }
    },

    series: async (_, args) => {
      const { id } = args
      try {
        const seriesData = await redis.get('series:data')
        if(!seriesData) {
          const { data } = await axios.get(seriesUrl + id) 
          redis.set('series:data', JSON.stringify(data))
          return data
        } else {
          return JSON.parse(seriesData)
        }
      } catch(err) {
        return err
      }
    }
  },

  Mutation: {
    addSeries: async (_, args) => {
      try {
        const newSeries = {
          title: args.series.title,
          overview: args.series.overview,
          poster_path: args.series.poster_path,
          popularity: args.series.popularity,
          tags: args.series.tags.toString()
        }
        const { data } = await axios({
          url: seriesUrl,
          method: 'POST',
          data: newSeries
        })
        redis.del('allSeries:data')
        return data[0]
      } catch (err) {
        return err
      }
    },
    updateSeries: async (_, args) => {
      try {
        const { id, series } = args
        const updateSeries = {
          title: series.title,
          overview: series.overview,
          poster_path: series.poster_path,
          popularity: series.popularity,
          tags: series.tags.toString()
        }
        const { data } = await axios({
          url: seriesUrl + id,
          method: 'PUT',
          data: updateSeries
        })
        redis.del('allSeries:data')
        redis.del('series:data')
        return data
      } catch (err) {
        return err
      }
    },
    deleteSeries: async (_, args) => {
      try {
        const { id } = args
        const { data } = await axios({
          url: seriesUrl + id,
          method: 'DELETE'
        })
        redis.del('allSeries:data')
        redis.del('series:data')
        return data
      } catch (err) {
        return err
      }
    }
  }
}

module.exports = seriesResolvers
