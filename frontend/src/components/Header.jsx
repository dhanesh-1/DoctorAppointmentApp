import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-2xl px-6 md:px-10 lg:px-20 relative overflow-hidden'>
      
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 right-20 w-40 h-40 border-2 border-white rounded-full'></div>
        <div className='absolute bottom-10 right-40 w-24 h-24 border-2 border-white rounded-full'></div>
        <div className='absolute top-1/2 right-1/3 w-16 h-16 border border-white rounded-full'></div>
        {/* Dotted pattern */}
        <div className='absolute top-1/4 left-1/2 grid grid-cols-4 gap-3'>
          {[...Array(16)].map((_, i) => (
            <div key={i} className='w-1.5 h-1.5 bg-white rounded-full'></div>
          ))}
        </div>
      </div>

      {/* ---------- Left Side ---------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 m-auto md:py-[10vw] md:mb-[30px] relative z-10'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'>
          Get Medical Care<br />With Our Doctors
        </p>
        <p className='text-white/80 text-sm md:text-base leading-relaxed max-w-md'>
          Experience seamless healthcare solutions tailored to your needs with expert doctors and advanced care.
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p className='text-white/70'>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
        </div>
        <a className='flex items-center gap-2 bg-white px-8 py-3.5 rounded-full text-primary text-sm font-semibold m-auto md:m-0 hover:shadow-lg hover:shadow-black/10 hover:scale-105 transition-all duration-300 border-2 border-white/80' href="#speciality">
          Book an Appointment
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>

      {/* ----------Right Side ---------- */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>

    </div>
  )
}

export default Header