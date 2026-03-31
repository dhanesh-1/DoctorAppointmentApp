import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* ---------- Left Section ---------- */}
        <div>
          <Link to='/' onClick={() => scrollTo(0,0)} className='flex items-center gap-2 mb-5'>
            <div className='w-9 h-9 bg-primary rounded-xl flex items-center justify-center'>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
              </svg>
            </div>
            <span className='text-xl font-bold text-primary'>Prescripto</span>
          </Link>
          <p className='w-full md:w-2/3 text-gray-500 leading-6'>Your trusted partner in managing your healthcare needs conveniently and efficiently. We bridge the gap between patients and healthcare providers, making it easier for you to access the care you need.</p>
        </div>

        {/* ---------- Center Section ---------- */}
        <div>
          <p className='text-lg font-semibold mb-5 text-gray-800'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-500'>
            <Link to='/' onClick={() => scrollTo(0,0)}><li className='hover:text-primary cursor-pointer transition-colors'>Home</li></Link>
            <Link to='/about' onClick={() => scrollTo(0,0)}><li className='hover:text-primary cursor-pointer transition-colors'>About us</li></Link>
            <Link to='/contact' onClick={() => scrollTo(0,0)}><li className='hover:text-primary cursor-pointer transition-colors'>Contact us</li></Link>
            <li className='hover:text-primary cursor-pointer transition-colors'>Privacy policy</li>
          </ul>
        </div>

        {/* ---------- Right Section ---------- */}
        <div>
          <p className='text-lg font-semibold mb-5 text-gray-800'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-500'>
            <li className='flex items-center gap-2'>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +91-814536357
            </li>
            <li className='flex items-center gap-2'>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              prescripto25@gmail.com
            </li>
          </ul>
        </div>

      </div>

      {/* ---------- Copyright Text ---------- */}
      <div>
        <hr className='border-gray-200' />
        <p className='py-5 text-sm text-center text-gray-400'>Copyright © 2024 Prescripto — All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer