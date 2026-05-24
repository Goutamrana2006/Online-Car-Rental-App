function Contact() {
  return (
    <section className='min-h-screen py-20 bg-slate-950'>
      <div className='max-w-3xl mx-auto px-6'>
        <h1 className='text-5xl font-bold text-center mb-12'>Contact Us</h1>

        <form className='bg-slate-900 p-10 rounded-3xl space-y-6'>
          <input
            type='text'
            placeholder='Your Name'
            className='w-full p-4 rounded-xl bg-slate-800 outline-none'
          />

          <input
            type='email'
            placeholder='Your Email'
            className='w-full p-4 rounded-xl bg-slate-800 outline-none'
          />

          <textarea
            rows='5'
            placeholder='Your Message'
              className='w-full p-4 rounded-xl bg-slate-800 outline-none'
          ></textarea>

          <button className='bg-yellow-400 text-black px-8 py-4 rounded-full font-bold'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact