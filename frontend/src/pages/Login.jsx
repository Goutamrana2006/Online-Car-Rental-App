import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'http://localhost:5000/api/auth/auth-user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
           body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      )

      const data = await response.json()

      if (response.ok) {
        alert('Welcome To LuxDrive ✅')

      localStorage.setItem(
  'user',
  JSON.stringify(data.user)
)

        navigate('/')
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-black px-6'>

      <div className='w-full max-w-sm bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-[35px] p-7 shadow-2xl'>

        <div className='text-center mb-2'>

          <h1 className='text-3xl font-extrabold mb-3'>
            Welcome To
             <span className='text-yellow-400'> LuxDrive</span>
          </h1>

          <p className='text-gray-400'>
            Enter your details to continue your luxury journey
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className='space-y-4'
        >
       <div>
            <label className='text-sm text-gray-300'>
              Full Name
            </label>

            <input
              type='text'
              placeholder='Enter Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full mt-2 p-3 rounded-2xl bg-slate-800 border border-slate-700 outline-none focus:border-yellow-400'
              required
            />
          </div>

          <div>
            <label className='text-sm text-gray-300'>
              Email Address
            </label>
              <input
              type='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full mt-2 p-3 rounded-2xl bg-slate-800 border border-slate-700 outline-none focus:border-yellow-400'
              required
            />
          </div>

          <div>
            <label className='text-sm text-gray-300'>
              Password
            </label>

            <input
              type='password'
              placeholder='Enter Password'
              value={password}
                onChange={(e) => setPassword(e.target.value)}
              className='w-full mt-2 p-3 rounded-2xl bg-slate-800 border border-slate-700 outline-none focus:border-yellow-400'
              required
            />
          </div>

          <button className='w-full bg-yellow-400 text-black py-3 rounded-2xl font-bold text-lg hover:bg-yellow-300 hover:scale-[1.02] duration-300 shadow-lg'>
            Continue
          </button>

        </form>

        <div className='mt-6 text-center text-gray-500 text-sm'>
          Secure Authentication • Premium Experience • LuxDrive
        </div>

      </div>
    </section>
  )
}
export default Login
