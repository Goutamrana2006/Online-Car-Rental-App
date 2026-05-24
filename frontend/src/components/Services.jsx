import { FaCar, FaShieldAlt, FaClock } from 'react-icons/fa'

function Services() {
  return (
    <section className='py-20 bg-slate-950'>
      <div className='max-w-7xl mx-auto px-6'>
        <h1 className='text-5xl font-bold text-center mb-14'>
          Why Choose Us
        </h1>

        <div className='grid md:grid-cols-3 gap-10'>
          <div className='bg-slate-900 p-10 rounded-3xl text-center'>
            <FaCar className='text-5xl text-yellow-400 mx-auto mb-6' />
            <h2 className='text-2xl font-bold mb-4'>Luxury Cars</h2>
            <p className='text-gray-300'>
              Premium collection of luxury and sports cars.
            </p>
          </div>
  <div className='bg-slate-900 p-10 rounded-3xl text-center'>
            <FaShieldAlt className='text-5xl text-yellow-400 mx-auto mb-6' />
            <h2 className='text-2xl font-bold mb-4'>Secure Booking</h2>
            <p className='text-gray-300'>
              Safe payment and verified booking system.
            </p>
          </div>

          <div className='bg-slate-900 p-10 rounded-3xl text-center'>
            <FaClock className='text-5xl text-yellow-400 mx-auto mb-6' />
            <h2 className='text-2xl font-bold mb-4'>24/7 Support</h2>
            <p className='text-gray-300'>
              Dedicated customer support anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services