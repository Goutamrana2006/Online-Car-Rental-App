const express = require('express')

const {
  getCars,
  addCar,
} = require('../controllers/carController')

const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', getCars)
router.post('/add', authMiddleware, addCar)

module.exports = router