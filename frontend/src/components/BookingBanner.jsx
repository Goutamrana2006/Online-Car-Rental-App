import { motion } from 'framer-motion'

function BookingBanner() {
  return (
    <section className='py-24 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black overflow-hidden'>
      
      <div className='max-w-7xl mx-auto px-6'>
        
        <div className='bg-black text-white rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden'>
          
          {/* Background Glow */}
          <div className='absolute top-0 right-0 w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full'></div>

          <div className='grid md:grid-cols-2 gap-12 items-center relative z-10'>

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className='text-4xl md:text-6xl font-extrabold leading-tight'>
                Book Your
                <span className='text-yellow-400'> Dream Car </span>
                Today
              </h1>

              <p className='mt-6 text-gray-300 text-lg leading-8'>
                Experience unmatched luxury, comfort, and high-performance
                driving with LuxDrive. Choose from premium sports cars,
                luxury SUVs, and elite vehicles designed for unforgettable
                journeys.
              </p>

              {/* Features */}
              <div className='flex flex-wrap gap-4 mt-8'>

                <div className='bg-slate-900 border border-slate-700 px-5 py-3 rounded-full text-sm'>
                  🚘 Premium Cars
                </div>

                <div className='bg-slate-900 border border-slate-700 px-5 py-3 rounded-full text-sm'>
                  ⚡ Instant Booking
                </div>

                <div className='bg-slate-900 border border-slate-700 px-5 py-3 rounded-full text-sm'>
                  🔒 Secure Payment
                </div>

              </div>

              {/* Buttons */}
              <div className='flex gap-5 mt-10 flex-wrap'>

                <button className='bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-yellow-300 duration-300 shadow-lg'>
                  Explore Cars
                </button>

                <button className='border border-gray-600 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black duration-300'>
                  Learn More
                </button>

              </div>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop'
                alt='Luxury Car'
                className='rounded-3xl shadow-2xl hover:scale-105 duration-500'
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingBanner