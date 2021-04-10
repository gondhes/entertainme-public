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
    const { title, overview, poster_path, popularity, tags} = req.body
    const splitTags = tags.split(',')
    const trimTags = splitTags.map(e => e.trim())
    const newSeries = {
      title,
      overview,
      poster_path,
      popularity,
      tags: trimTags
    }
    Tv.create(newSeries)
    .then(result => {
      res.status(201).json(result.ops)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }

  static update(req, res, next){
    const { id } = req.params
    const { title, overview, poster_path, popularity, tags} = req.body
    const splitTags = tags.split(',')
    const trimTags = splitTags.map(e => e.trim())
    const newSeries = {
      title,
      overview,
      poster_path,
      popularity,
      tags: trimTags
    }
    Tv.update(id, newSeries)
    .then(result => {
      res.status(200).json({
        message : "Movie updated successfully"
      })
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }

  static delete(req, res, next){
    Tv.delete(req.params.id)
    .then(result => {
      res.status(200).json({
        message : "Movie deleted successfully"
      })
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