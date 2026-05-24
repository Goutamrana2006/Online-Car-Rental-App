const db = require('../config/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const { name, email, password } = req.body

  try {

    const checkUser =
      'SELECT * FROM users WHERE email = ?'

    db.query(checkUser, [email], async (err, result) => {

      if (result.length > 0) {
        return res.status(400).json({
          message: 'Email Already Exists',
        })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const sql =
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'

      db.query(
        sql,
        [name, email, hashedPassword],
        (err, result) => {

          if (err) {
            return res.status(500).json({
              message: 'Registration Failed',
            })
          }

          res.status(201).json({
            message: 'Account Created Successfully',
            user: {
              id: result.insertId,
              name,
              email,
            },
          })
        }
      )
    })

  } catch (error) {

    res.status(500).json({
      message: 'Server Error',
    })
  }
}

const login = (req, res) => {

  const { email, password } = req.body

  const sql =
    'SELECT * FROM users WHERE email = ?'

  db.query(sql, [email], async (err, result) => {

    if (err || result.length === 0) {
      return res.status(400).json({
        message: 'Invalid Email',
      })
    }

    const user = result[0]

    const isMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid Password',
      })
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    )

    res.status(200).json({
      message: 'Login Successful',
      token,
      user,
    })
  })
}

const authUser = (req, res) => {

  const { name, email, password } = req.body

  const sql =
    'SELECT * FROM users WHERE email = ?'

  db.query(sql, [email], async (err, result) => {

    if (result.length > 0) {

      const user = result[0]

      const isMatch = await bcrypt.compare(
        password,
        user.password
      )

      if (!isMatch) {
        return res.status(400).json({
          message: 'Incorrect Password',
        })
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d',
        }
      )

      return res.status(200).json({
        message: 'Login Successful',
        token,
        user,
      })
    }

    const hashedPassword =
      await bcrypt.hash(password, 10)

    const insertSql =
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'

    db.query(
      insertSql,
      [name, email, hashedPassword],
      (err, result) => {

        if (err) {
          return res.status(500).json({
            message: 'Authentication Failed',
          })
        }

        res.status(201).json({
          message: 'Account Created Successfully',
          user: {
            id: result.insertId,
            name,
            email,
          },
        })
      }
    )
  })
}

module.exports = {
  register,
  login,
  authUser,
}