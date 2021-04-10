const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class Movie {

  static find() {
    return getDatabase().collection('movies').find().toArray()
  }

  static findOne(id) {
    return getDatabase().collection('movies').findOne({ _id: ObjectId(id) })
  }

  static create(newMovie) {
    return getDatabase().collection('movies').insertOne(newMovie)
  }

  static update(id, updatedData) {
    return getDatabase().collection('movies').updateOne({_id: ObjectId(id)}, {
      $set : updatedData
    })
  }

  static delete(id) {
    return getDatabase().collection('movies').deleteOne({ _id: ObjectId(id) })
  }

}

module.exports = Movie