const express = require('express')

const {
  register,
  login,
  authUser,
} = require('../controllers/authController')

const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.post('/auth-user', authUser)

module.exports = router