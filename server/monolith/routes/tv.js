const express = require('express')
const TvController = require('../controllers/tv')

const router = express.Router()

router.get('/', TvController.getAll)
router.get('/:id', TvController.getOne)
router.post('/', TvController.create)
router.put('/:id', TvController.update)
router.delete('/:id', TvController.delete)

module.exports = router