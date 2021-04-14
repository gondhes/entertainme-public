const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()

const moviesUrl = 'http://localhost:4001/movies/'

const moviesResolvers = {
  Query: {
    movies: async () => {
      try {
        const moviesData = await redis.get('movies:data')
        if(!moviesData) {
          const { data } = await axios.get(moviesUrl)
          redis.set('movies:data', JSON.stringify(data))
          return data
        } else {
          return JSON.parse(moviesData)
        }
      } catch(err) {
        return err
      }
    },

    movie: async (_, args) => {
      const { id } = args
      try {
        const { data } = await axios.get(moviesUrl + id)
        return data
      } catch(err) {
        return err
      }
    }
  },

  Mutation: {
    addMovie: async (_, args) => {
      try {
        const newMovie = {
          title: args.movie.title,
          overview: args.movie.overview,
          poster_path: args.movie.poster_path,
          popularity: args.movie.popularity,
          tags: args.movie.tags.toString()
        }
        const { data } = await axios({
          url: moviesUrl,
          method: 'POST',
          data: newMovie
        })
        redis.del('movies:data')
        return data[0]
      } catch (err) {
        return err
      }
    },
    updateMovie: async (_, args) => {
      try {
        const { id, movie } = args
        const updateMovie = {
          title: movie.title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          popularity: movie.popularity,
          tags: movie.tags.toString()
        }
        const { data } = await axios({
          url: moviesUrl + id,
          method: 'PUT',
          data: updateMovie
        })
        redis.del('movies:data')
        redis.del('movie:data')
        return data
      } catch (err) {
        return err
      }
    },
    deleteMovie: async (_, args) => {
      try {
        const { id } = args
        const { data } = await axios({
          url: moviesUrl + id,
          method: 'DELETE'
        })
				redis.del('movies:data')
        redis.del('movie:data')
        return data
      } catch (err) {
        return err
      }
    }
  }
}

module.exports = moviesResolvers
