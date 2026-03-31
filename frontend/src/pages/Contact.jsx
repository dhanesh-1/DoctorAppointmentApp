import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10'>
        <p className='text-primary font-semibold text-sm tracking-wider uppercase mb-2'>Get In Touch</p>
        <p className='text-3xl font-bold text-gray-900'>Contact <span className='text-primary'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-2xl shadow-lg' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-bold text-lg text-gray-800'>OUR OFFICE</p>
          <p className='text-gray-500 leading-relaxed'>54709 Willms Station <br />Suite 350, Washington, USA</p>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-500 flex items-center gap-2'>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='text-primary'><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              (+91) 8265826586
            </p>
            <p className='text-gray-500 flex items-center gap-2'>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='text-primary'><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              prescripto25@gmail.com
            </p>
          </div>
          <div className='mt-2'>
            <p className='font-bold text-lg text-gray-800'>Careers at PRESCRIPTO</p>
            <p className='text-gray-500 mt-2'>Learn more about our team and job openings.</p>
          </div>
          <button className='bg-primary text-white px-8 py-3 text-sm rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md shadow-primary/20'>Explore Careers</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
