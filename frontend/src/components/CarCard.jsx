import { useNavigate } from 'react-router-dom'

function CarCard({ car }) {

  const navigate = useNavigate()

  const handleRent = async () => {

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {
      alert('Please Login First')
      navigate('/login')
      return
    }

    try {

      const response = await fetch(
        'http://localhost:5000/api/bookings',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
body: JSON.stringify({
  user_name: user.name,
  car_name: car.name,
  booking_date: new Date()
    .toISOString()
    .split('T')[0],
  total_price: car.price,
}),
        }
      )

      const data = await response.json()

      if (response.ok) {
        alert(`Booking Confirmed For ${car.name} 🚗`)
      } else {
        alert(data.message)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:scale-105 duration-300'>

      <img
        src={car.image}
        alt={car.name}
        className='h-40 w-full object-cover'
      />

      <div className='p-4'>

        <h1 className='text-2xl font-bold'>
          {car.name}
        </h1>

        <p className='text-yellow-400 text-xl font-semibold mt-2'>
          {car.price}
        </p>

        <div className='flex justify-between text-gray-400 mt-4'>
          <span>{car.fuel}</span>

          <span>{car.transmission}</span>
        </div>

        <button
          onClick={handleRent}
          className='mt-4 w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 duration-300'
        >
          Rent Now
        </button>

      </div>
    </div>
  )
}

export default CarCard