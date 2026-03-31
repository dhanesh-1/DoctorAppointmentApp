import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className='flex bg-primary rounded-2xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-6 right-16 w-32 h-32 border-2 border-white rounded-full'></div>
        <div className='absolute bottom-8 right-48 w-20 h-20 border border-white rounded-full'></div>
      </div>

      {/* ---------- Left Side ---------- */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 relative z-10'>
        <p className='text-primary-light font-semibold text-sm tracking-wider uppercase mb-2'>25+ Years Of Experience</p>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white'>
          <p>We're Always Ensure</p>
          <p className='mt-2'>Medical Treatment</p>
        </div>
        <p className='text-white/70 text-sm mt-4 max-w-md leading-relaxed'>Our team of experienced doctors and specialists are committed to offering personalized care tailored to your unique needs.</p>
        <button onClick={() => {navigate('/login'); scrollTo(0,0)}} className='bg-white text-primary text-sm font-semibold px-8 py-3.5 rounded-full mt-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white/80'>Book an Appointment</button>
      </div>

      {/* ---------- Right Side ---------- */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner