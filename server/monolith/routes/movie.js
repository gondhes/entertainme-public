const express = require('express')
const MovieController = require('../controllers/movie')

const router = express.Router()

router.get('/', MovieController.getAll)
router.get('/:id', MovieController.getOne)
router.post('/', MovieController.create)
router.put('/:id', MovieController.update)
router.delete('/:id', MovieController.delete)

module.exports = router