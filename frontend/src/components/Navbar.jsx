import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <nav className='bg-slate-950 sticky top-0 z-50 shadow-lg'>

      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>

        <h1 className='text-3xl font-bold text-yellow-400'>
          LuxDrive
                  </h1>

        <ul className='flex gap-8 font-semibold'>

          <li>
            <Link
              to='/'
              className='hover:text-yellow-400 duration-300'
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to='/cars'
              className='hover:text-yellow-400 duration-300'
            >
              Cars
            </Link>
          </li>
            <li>
            <Link
              to='/about'
              className='hover:text-yellow-400 duration-300'
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to='/contact'
              className='hover:text-yellow-400 duration-300'
            >
              Contact
            </Link>
          </li>

        </ul>
  {
          user ? (
            <div className='flex items-center gap-4'>

              <h2 className='text-yellow-400 font-bold'>
                {user.name}
              </h2>

              <button
                onClick={handleLogout}
                className='bg-red-500 px-5 py-2 rounded-full font-bold hover:bg-red-600 duration-300'
              >
                Logout
              </button>

            </div>
          ) : (
            <Link
              to='/login'
              className='bg-yellow-400 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-300 duration-300'
            >
              Login
            </Link>
          )
        }
         </div>
    </nav>
  )
}

export default Navbar