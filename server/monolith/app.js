const express = require('express')
const { connectMongodb, getDatabase } = require('./config/mongodb')
const router = require('./routes/index')
const app = express()
const port = process.env.PORT || 3000

connectMongodb((connected) => {
  if (connected) {
    console.log('mongodb: connection success')
  } else {
    console.log('mongodb: connection error')
  }
})

app.use(express.urlencoded({ extended: false }))
app.use(router)

app.listen(port, () => {
  console.log(`Entertainme listening at http://localhost:${port}`)
})
