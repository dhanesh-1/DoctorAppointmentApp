import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-4 border-b border-gray-200 bg-white'>

      <div className='flex items-center gap-3'>
        <div onClick={() => navigate('/admin-dashboard')} className='flex items-center gap-2 cursor-pointer'>
          <div className='w-10 h-10 bg-primary rounded-xl flex items-center justify-center'>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
            </svg>
          </div>
          <span className='text-2xl font-bold text-primary tracking-tight'>Prescripto</span>
        </div>
        <span className='bg-surface text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20'>
          {aToken ? 'Admin' : 'Doctor'}
        </span>
      </div>

      <button onClick={logout} className='bg-primary text-white text-sm px-8 py-2.5 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md shadow-primary/20 flex items-center gap-2'>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        Logout
      </button>
    </div>
  )
}

export default Navbar