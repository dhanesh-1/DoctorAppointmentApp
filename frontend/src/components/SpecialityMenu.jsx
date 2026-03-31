import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <p className='text-primary font-semibold text-sm tracking-wider uppercase'>Our Specialities</p>
      <h1 className='text-3xl font-bold text-gray-900'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-500'>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 group' key={index} to={`/doctors/${item.speciality}`}>
            <div className='w-16 sm:w-24 h-16 sm:h-24 rounded-2xl bg-surface flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors border border-gray-100 group-hover:border-primary/20'>
              <img className='w-10 sm:w-14' src={item.image} alt="" />
            </div>
            <p className='text-gray-600 group-hover:text-primary font-medium transition-colors'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu