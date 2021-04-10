const { MongoClient } = require('mongodb')

let database = null

function connectMongodb(cb) {
  const uri = 'mongodb://localhost:27017'

  const client = MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  client.connect()
    .then(_ => {
      database = client.db('entertainme')
      cb(true)
    })
    .catch(err => {
      console.log('connection error')
      console.log(err)
      cb(false)
    })
}

function getDatabase() {
  return database
}

module.exports = {
  connectMongodb,
  getDatabase
}
