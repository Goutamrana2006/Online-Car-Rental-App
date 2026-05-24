import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className='min-h-screen flex items-center bg-gradient-to-r from-black to-slate-900'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-5xl md:text-7xl font-extrabold leading-tight'>
            Premium Car
            <span className='text-yellow-400'> Rental</span>
          </h1>

          <p className='mt-6 text-gray-300 text-lg'>
            Experience luxury driving with the best sports and premium cars.
            Book your dream car in seconds.
          </p>
  <button className='mt-8 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 duration-300'>
            Explore Cars
          </button>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop'
          alt='car'
          className='rounded-3xl shadow-2xl'
        />
      </div>
    </section>
  )
}

export default Hero