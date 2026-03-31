import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1.5 px-4 border rounded-lg text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white border-primary' : 'border-gray-300'}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-200 rounded-lg transition-all cursor-pointer hover:border-primary/40 ${speciality === 'General physician' ? 'bg-primary/10 text-primary border-primary/30 font-medium' : ''}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-200 rounded-lg transition-all cursor-pointer hover:border-primary/40 ${speciality === 'Gynecologist' ? 'bg-primary/10 text-primary border-primary/30 font-medium' : ''}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-200 rounded-lg transition-all cursor-pointer hover:border-primary/40 ${speciality === 'Dermatologist' ? 'bg-primary/10 text-primary border-primary/30 font-medium' : ''}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-200 rounded-lg transition-all cursor-pointer hover:border-primary/40 ${speciality === 'Pediatricians' ? 'bg-primary/10 text-primary border-primary/30 font-medium' : ''}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-200 rounded-lg transition-all cursor-pointer hover:border-primary/40 ${speciality === 'Neurologist' ? 'bg-primary/10 text-primary border-primary/30 font-medium' : ''}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-200 rounded-lg transition-all cursor-pointer hover:border-primary/40 ${speciality === 'Gastroenterologist' ? 'bg-primary/10 text-primary border-primary/30 font-medium' : ''}`}>Gastroenterologist</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-white shadow-sm hover:shadow-lg hover:shadow-primary/5 group' key={index}>
                <div className='bg-surface overflow-hidden h-52'>
                  <img className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' src={item.image} alt="" />
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
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors