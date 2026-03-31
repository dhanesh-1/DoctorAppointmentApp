import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'
import { AppContext } from '../context/AppContext';

const Navbar = () => {

  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-200'>
      <div onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer'>
        <div className='w-10 h-10 bg-primary rounded-xl flex items-center justify-center'>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
          </svg>
        </div>
        <span className='text-2xl font-bold text-primary tracking-tight'>Prescripto</span>
      </div>

      <ul className='hidden md:flex items-center gap-8 font-medium text-gray-600'>
        <NavLink to='/'>
          <li className='py-1 hover:text-primary transition-colors'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/doctors'>
          <li className='py-1 hover:text-primary transition-colors'>All Doctors</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/about'>
          <li className='py-1 hover:text-primary transition-colors'>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/contact'>
          <li className='py-1 hover:text-primary transition-colors'>Contact Us</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-9 h-9 rounded-full object-cover border-2 border-primary/20' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-white rounded-xl flex flex-col gap-3 p-5 shadow-xl border border-gray-100'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-primary cursor-pointer transition-colors flex items-center gap-2'>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    My Profile
                  </p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-primary cursor-pointer transition-colors flex items-center gap-2'>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    My Appointments
                  </p>
                  <hr className='border-gray-100'/>
                  <p onClick={logout} className='hover:text-red-500 cursor-pointer transition-colors flex items-center gap-2'>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Logout
                  </p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-2.5 rounded-full font-medium hidden md:block hover:bg-primary-dark transition-colors shadow-md shadow-primary/20'>Book an Appointment</button>
        }

        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* ---------- Mobile Menu ---------- */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                </svg>
              </div>
              <span className='text-xl font-bold text-primary'>Prescripto</span>
            </div>
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>

          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-3 py-3 rounded inline-block'>All Doctors</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-3 py-3 rounded inline-block'>About</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-3 py-3 rounded inline-block'>Contact Us</p></NavLink>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar