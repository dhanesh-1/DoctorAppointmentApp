import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { aToken, doctors, getAllDoctors, changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll w-full'>

      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-gray-800'>All Doctors</h1>
        <p className='text-gray-500 text-sm mt-1'>Manage doctors on the platform</p>
      </div>

      <div className='w-full flex flex-wrap gap-4 gap-y-6'>
        {
          doctors.map((item, index) => (
            <div className='bg-white border border-gray-100 rounded-2xl max-w-56 overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-all duration-300' key={index}>
              <div className='overflow-hidden h-48'>
                <img className='bg-surface group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover' src={item.image} alt="" />
              </div>

              <div className='p-4'>
                <p className='text-gray-800 text-lg font-semibold'>{item.name}</p>
                <p className='text-primary text-sm font-medium'>{item.speciality}</p>

                <div className='mt-3 flex items-center gap-2 text-sm'>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} className='sr-only peer' />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                  <p className={`text-xs font-medium ${item.available ? 'text-primary' : 'text-gray-400'}`}>
                    {item.available ? 'Available' : 'Unavailable'}
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList