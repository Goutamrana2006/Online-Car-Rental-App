const db = require('../config/db')

const createBooking = (req, res) => {

  const {
    user_name,
    car_name,
    booking_date,
    total_price,
  } = req.body

  const sql =
    'INSERT INTO bookings (user_name, car_name, booking_date, total_price) VALUES (?, ?, ?, ?)'

  db.query(
    sql,
    [
      user_name,
      car_name,
      booking_date,
      total_price,
    ],
    (err, result) => {

      if (err) {

        console.log(err)

        return res.status(500).json({
          message: err.message,
        })
      }

      res.status(201).json({
        message: 'Booking Successful',
      })
    }
  )
}

module.exports = {
  createBooking,
}