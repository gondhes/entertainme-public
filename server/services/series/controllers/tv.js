const Tv = require('../models/tv')

class TvController {
  static getAll(req, res, next) {
    Tv.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err=> {
        console.log(err)
        res.status(500).json({
          message : "Internal Server Error"
        })
      })
  }

  static getOne(req, res, next) {
    Tv.findOne(req.params.id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err=> {
        console.log(err)
        res.status(500).json({
          message : "Internal Server Error"
        })
      })
  }

  static create(req, res, next){
    Tv.create(req.body)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }

  static update(req, res, next){
    Tv.update(req.params.id, req.body)
    .then(result => {
      res.status(200).json(result)
    })
  }

  static delete(req, res, next){
    Tv.delete(req.params.id)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
}

module.exports = TvController