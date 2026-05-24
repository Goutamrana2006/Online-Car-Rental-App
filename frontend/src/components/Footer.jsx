import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-black text-white pt-16 pb-8'>
      <div className='max-w-7xl mx-auto px-6'>

        <div className='grid md:grid-cols-4 gap-12'>

          {/* Logo Section */}
          <div>
            <h1 className='text-4xl font-extrabold text-yellow-400 mb-4'>
              LuxDrive
            </h1>

            <p className='text-gray-400 leading-7'>
              Experience luxury, comfort, and performance with the most
              premium car rental platform designed for modern travelers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className='text-2xl font-bold mb-6'>Quick Links</h2>

            <ul className='space-y-3 text-gray-400'>
              <li className='hover:text-yellow-400 cursor-pointer duration-300'>
                Home
              </li>

              <li className='hover:text-yellow-400 cursor-pointer duration-300'>
                Cars
              </li>

              <li className='hover:text-yellow-400 cursor-pointer duration-300'>
                About
              </li>

              <li className='hover:text-yellow-400 cursor-pointer duration-300'>
                Contact
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className='text-2xl font-bold mb-6'>Services</h2>

            <ul className='space-y-3 text-gray-400'>
              <li>Luxury Car Rental</li>
              <li>Airport Pickup</li>
              <li>Corporate Booking</li>
              <li>Wedding Cars</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className='text-2xl font-bold mb-6'>Follow Us</h2>

            <div className='flex gap-4'>

              <div className='bg-slate-800 p-4 rounded-full hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer'>
                <FaFacebookF />
              </div>

              <div className='bg-slate-800 p-4 rounded-full hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer'>
                <FaInstagram />
              </div>

              <div className='bg-slate-800 p-4 rounded-full hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer'>
                <FaTwitter />
              </div>

              <div className='bg-slate-800 p-4 rounded-full hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer'>
                <FaLinkedinIn />
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className='border-t border-slate-800 mt-14 pt-8 text-center'>

          <p className='text-gray-400 text-lg'>
            © 2026 <span className='text-yellow-400 font-bold'>LuxDrive</span>.
            All Rights Reserved | Designed for Premium Driving Experience 🚘
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer