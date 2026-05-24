const db = require('../config/db')

const getCars = (req, res) => {
  const sql = 'SELECT * FROM cars'

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed To Fetch Cars' })
    }

    res.status(200).json(result)
  })
}

const addCar = (req, res) => {
  const {
    name,
    image,
    price,
    fuel,
    transmission,
  } = req.body
 const sql = `
    INSERT INTO cars (name, image, price, fuel, transmission)
    VALUES (?, ?, ?, ?, ?)
  `

  db.query(
    sql,
    [name, image, price, fuel, transmission],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Car Add Failed' })
      }

      res.status(201).json({ message: 'Car Added Successfully' })
    }
  )
}

module.exports = {
  getCars,
  addCar,
}
