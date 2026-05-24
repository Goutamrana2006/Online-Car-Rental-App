const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const authRoutes = require('./routes/authRoutes')
const carRoutes = require('./routes/carRoutes')
const bookingRoutes = require('./routes/bookingRoutes')

require('./config/db')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.use('/api/auth', authRoutes)
app.use('/api/cars', carRoutes)
app.use('/api/bookings', bookingRoutes)
app.get('/', (req, res) => {
  res.send('LuxDrive Backend Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`)
})