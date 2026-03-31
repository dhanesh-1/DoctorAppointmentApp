import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {

  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setAToken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {

      }

    } catch (error) {

    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 bg-white border border-gray-100 rounded-2xl text-zinc-600 text-sm shadow-xl'>
        <div>
          <p className='text-2xl font-bold text-gray-900'>
            <span className='text-primary'>{state}</span> Login
          </p>
          <p className='text-gray-500 mt-1'>Sign in to manage the platform</p>
        </div>

        <div className='w-full'>
          <p className='font-medium text-gray-700 mb-1'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="email" required />
        </div>

        <div className='w-full'>
          <p className='font-medium text-gray-700 mb-1'>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="password" required />
        </div>

        <button className='bg-primary text-white w-full py-3 rounded-lg text-base font-semibold hover:bg-primary-dark transition-colors shadow-md shadow-primary/20 mt-2'>Login</button>

        {/* {
          state === 'Admin'
            ? <p>Doctor Login? <span className='text-primary underline cursor-pointer text-xs' onClick={() => setState('Doctor')}>Click Here</span></p>
            : <p>Admin Login? <span className='text-primary underline cursor-pointer text-xs' onClick={() => setState('Admin')}>Click Here</span></p>
        } */}

      </div>
    </form>
  )
}

export default Login