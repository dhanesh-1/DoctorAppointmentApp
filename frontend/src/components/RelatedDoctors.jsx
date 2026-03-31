import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctor = ({ speciality, docId }) => {

  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()
  const [relDoc, setRelDoc] = useState([])

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
      setRelDoc(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-bold'>Related Doctors</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-500'>Browse more doctors in the same speciality.</p>

      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relDoc.slice(0, 5).map((item, index) => (
          <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0,0) }} className='border border-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-white shadow-sm hover:shadow-lg hover:shadow-primary/5 group' key={index}>
            <div className='bg-surface overflow-hidden'>
              <img className='w-full group-hover:scale-105 transition-transform duration-500' src={item.image} alt="" />
            </div>
            <div className='p-4'>
              <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-emerald-500' : 'text-gray-400'}`}>
                <p className={`w-2 h-2 ${item.available ? 'bg-emerald-500' : 'bg-gray-400'} rounded-full`}></p>
                <p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className='text-gray-900 text-lg font-semibold mt-1'>{item.name}</p>
              <p className='text-gray-500 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-primary/5 text-primary border border-primary/20 px-12 py-3 rounded-full mt-10 font-medium hover:bg-primary hover:text-white transition-all duration-300'>View All Doctors</button>
    </div>
  )
}

export default RelatedDoctor