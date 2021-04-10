const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class Tv {

  static find() {
    return getDatabase().collection('tv').find().toArray()
  }

  static findOne(id) {
    return getDatabase().collection('tv').findOne({ _id: ObjectId(id) })
  }

  static create(newTv) {
    return getDatabase().collection('tv').insertOne(newTv)
  }

  static update(id, updatedData) {
    return getDatabase().collection('tv').updateOne({_id: ObjectId(id)}, {
      $set : updatedData
    })
  }

  static delete(id) {
    return getDatabase().collection('tv').deleteOne({ _id: ObjectId(id) })
  }

}

module.exports = Tv