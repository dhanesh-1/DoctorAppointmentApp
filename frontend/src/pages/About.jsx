import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10'>
        <p className='text-primary font-semibold text-sm tracking-wider uppercase mb-2'>Who We Are</p>
        <p className='text-3xl font-bold text-gray-900'>About <span className='text-primary'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-2xl shadow-lg' src={assets.about_image} alt=""></img>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 leading-relaxed'>
          <p>Welcome To Prescripto, Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently. We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing Their Healthcare Records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <div className='bg-surface border border-primary/10 rounded-xl p-5'>
            <b className='text-primary text-base'>Our Vision</b>
            <p className='mt-2'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>
      </div>

      <div className='text-center my-8'>
        <p className='text-primary font-semibold text-sm tracking-wider uppercase mb-2'>Our Strengths</p>
        <p className='text-2xl font-bold text-gray-900'>Why <span className='text-primary'>Choose Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-4'>
        <div className='flex-1 border border-gray-100 px-10 md:px-12 py-8 sm:py-12 flex flex-col gap-4 text-[15px] rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer bg-white shadow-sm hover:shadow-lg hover:shadow-primary/10 group'>
          <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-white/20'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='text-primary group-hover:text-white'>
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <b className='text-lg'>Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='flex-1 border border-gray-100 px-10 md:px-12 py-8 sm:py-12 flex flex-col gap-4 text-[15px] rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer bg-white shadow-sm hover:shadow-lg hover:shadow-primary/10 group'>
          <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-white/20'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='text-primary group-hover:text-white'>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <b className='text-lg'>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='flex-1 border border-gray-100 px-10 md:px-12 py-8 sm:py-12 flex flex-col gap-4 text-[15px] rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer bg-white shadow-sm hover:shadow-lg hover:shadow-primary/10 group'>
          <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-white/20'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='text-primary group-hover:text-white'>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <b className='text-lg'>Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
        
      </div>
    </div>
  )
}

export default About
