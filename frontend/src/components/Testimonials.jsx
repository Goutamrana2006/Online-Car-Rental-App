function Testimonials() {
  return (
    <section className='py-20 bg-slate-900'>
      <div className='max-w-7xl mx-auto px-6'>
        <h1 className='text-5xl font-bold text-center mb-14'>
          Client Reviews
        </h1>

        <div className='grid md:grid-cols-3 gap-10'>
          <div className='bg-slate-800 p-8 rounded-3xl'>
            <p className='text-gray-300'>
              Amazing experience and premium service. Cars were perfectly
              maintained.
            </p>
            <h3 className='mt-6 font-bold text-yellow-400'>Rahul Sharma</h3>
          </div>

          <div className='bg-slate-800 p-8 rounded-3xl'>
            <p className='text-gray-300'>
              The booking process was smooth and professional.
               </p>
            <h3 className='mt-6 font-bold text-yellow-400'>Aman Verma</h3>
          </div>

          <div className='bg-slate-800 p-8 rounded-3xl'>
            <p className='text-gray-300'>
              Best luxury car rental platform with affordable pricing.
            </p>
            <h3 className='mt-6 font-bold text-yellow-400'>Sneha Kapoor</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials