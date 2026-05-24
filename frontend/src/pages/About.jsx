function About() {
  return (
    <section className='min-h-screen py-20 bg-slate-900'>
      <div className='max-w-6xl mx-auto px-6'>

        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-extrabold mb-6'>
            About <span className='text-yellow-400'>LuxDrive</span>
          </h1>

          <p className='text-gray-300 text-lg leading-8 max-w-4xl mx-auto'>
            LuxDrive is a premium car rental platform dedicated to delivering
            luxury, comfort, and unforgettable driving experiences. We provide
            a world-class collection of sports cars, luxury SUVs, sedans, and
            high-performance vehicles for customers who value style,
            performance, and reliability.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>

          <div>
            <img
              src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop'
              alt='Luxury Car'
              className='rounded-3xl shadow-2xl'
            />
          </div>

          <div>
            <h2 className='text-4xl font-bold mb-6'>
              Drive Beyond Expectations
            </h2>

            <p className='text-gray-300 leading-8 mb-6'>
              Our mission is to redefine the car rental experience by combining
              premium vehicles, affordable pricing, advanced booking systems,
              and exceptional customer service. Whether you need a luxury car
              for business trips, vacations, weddings, road trips, or special
              occasions, LuxDrive ensures a smooth and memorable journey.
            </p>

            <p className='text-gray-300 leading-8 mb-8'>
              With a strong commitment to quality and customer satisfaction, we
              maintain every vehicle with the highest standards of safety,
              cleanliness, and performance. Thousands of customers trust
              LuxDrive for secure bookings, transparent pricing, and reliable
              support available 24/7.
            </p>

            <div className='grid grid-cols-2 gap-6'>

              <div className='bg-slate-800 p-6 rounded-2xl text-center'>
                <h1 className='text-4xl font-extrabold text-yellow-400'>
                  500+
                </h1>
                <p className='mt-2 text-gray-300'>Luxury Cars</p>
              </div>

              <div className='bg-slate-800 p-6 rounded-2xl text-center'>
                <h1 className='text-4xl font-extrabold text-yellow-400'>
                  10K+
                </h1>
                <p className='mt-2 text-gray-300'>Happy Clients</p>
              </div>

              <div className='bg-slate-800 p-6 rounded-2xl text-center'>
                <h1 className='text-4xl font-extrabold text-yellow-400'>
                  24/7
                </h1>
                <p className='mt-2 text-gray-300'>Customer Support</p>
              </div>

              <div className='bg-slate-800 p-6 rounded-2xl text-center'>
                <h1 className='text-4xl font-extrabold text-yellow-400'>
                  100%
                </h1>
                <p className='mt-2 text-gray-300'>Secure Booking</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About