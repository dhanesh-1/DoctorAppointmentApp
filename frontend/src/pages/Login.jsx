import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const { backendUrl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {

      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 bg-white border border-gray-100 rounded-2xl text-zinc-600 text-sm shadow-xl'>
        <div>
          <p className='text-2xl font-bold text-gray-900'>{state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}</p>
          <p className='text-gray-500 mt-1'>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        </div>

        {
          state === 'Sign Up' && (
            <div className='w-full'>
              <p className='font-medium text-gray-700 mb-1'>Full Name</p>
              <input className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
            </div>
          )
        }

        <div className='w-full'>
          <p className='font-medium text-gray-700 mb-1'>Email</p>
          <input className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>

        <div className='w-full'>
          <p className='font-medium text-gray-700 mb-1'>Password</p>
          <input className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>

        <button type='submit' className='bg-primary text-white w-full py-3 rounded-lg text-base font-semibold hover:bg-primary-dark transition-colors shadow-md shadow-primary/20 mt-2'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>

        {
          state === 'Sign Up'
            ? <p className='text-gray-500'>Already have an account? <span onClick={() => setState('Login')} className='text-primary font-medium underline cursor-pointer hover:text-primary-dark'>Login here</span></p>
            : <p className='text-gray-500'>Create a new account? <span onClick={() => setState('Sign Up')} className='text-primary font-medium underline cursor-pointer hover:text-primary-dark'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login