const Movie = require('../models/movie')

class MovieController {
  static getAll(req, res, next) {
    Movie.find()
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
    Movie.findOne(req.params.id)
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
    Movie.create(req.body)
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
    Movie.update(req.params.id, req.body)
    .then(result => {
      res.status(200).json(result)
    })
  }

  static delete(req, res, next){
    Movie.delete(req.params.id)
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

module.exports = MovieController