import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const { aToken } = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-r border-gray-200'>
      {
        aToken &&
        <ul className='text-gray-600 mt-5'>
          <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-9 md:min-w-72 cursor-pointer transition-all duration-200 ${isActive ? 'bg-surface border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50 hover:text-primary'}`} to={'/admin-dashboard'}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-surface`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-4 md:px-9 md:min-w-72 cursor-pointer transition-all duration-200 ${isActive ? 'bg-surface border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50 hover:text-primary'}`} to={'/all-appointments'}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-surface`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-4 md:px-9 md:min-w-72 cursor-pointer transition-all duration-200 ${isActive ? 'bg-surface border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50 hover:text-primary'}`} to={'/add-doctor'}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-surface`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
            </div>
            <p className='hidden md:block'>Add Doctor</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-4 md:px-9 md:min-w-72 cursor-pointer transition-all duration-200 ${isActive ? 'bg-surface border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-50 hover:text-primary'}`} to={'/doctor-list'}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-surface`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <p className='hidden md:block'>Doctors List</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar