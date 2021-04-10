const express = require('express')
const movieRouter = require('./movie')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome!' })
})

router.use('/movies', movieRouter)

module.exports = router
