const express = require('express')
const tvRouter = require('./tv')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome!' })
})

router.use('/tv', tvRouter)

module.exports = router
