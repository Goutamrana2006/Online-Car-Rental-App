import CarCard from '../components/CarCard'
import cars from '../data/carsData'

function Cars() {
  return (
    <section className='py-20 min-h-screen bg-slate-950'>
      <div className='max-w-7xl mx-auto px-6'>
        <h1 className='text-5xl font-bold text-center mb-16'>
          Our Luxury Cars
        </h1>

        <div className='grid md:grid-cols-3 gap-10'>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cars