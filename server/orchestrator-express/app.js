const express = require('express')
const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()
const app = express()
const port = process.env.PORT || 4000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/movies', async (req, res) => {
  try {
    const moviesData = await redis.get('movies:data')
    if(!moviesData) {
      const { data } = await axios.get('http://localhost:4001/movies')
      await redis.set('movies:data', JSON.stringify(data))
      res.status(200).json(data)
    } else {
      res.status(200).json(JSON.parse(moviesData))
    }
  } catch(err) {
    res.status(500).json(err)
  }
})

app.get('/tv', async (req, res) => {
  try {
    const tvData = await redis.get('tv:data')
    if(!tvData) {
      const { data } = await axios.get('http://localhost:4002/tv')
      await redis.set('tv:data', JSON.stringify(data))
      res.status(200).json(data)
    } else {
      res.status(200).json(JSON.parse(tvData))
    }
  } catch(err) {
    res.status(500).json(err)
  }
})

app.listen(port, () => {
  console.log(`Entertainme listening at http://localhost:${port}`)
})
