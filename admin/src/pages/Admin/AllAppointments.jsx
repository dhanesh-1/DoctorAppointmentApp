import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {

  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full max-w-6xl m-5'>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-gray-800'>All Appointments</h1>
        <p className='text-gray-500 text-sm mt-1'>Manage all patient appointments</p>
      </div>

      <div className='bg-white rounded-2xl shadow-sm border border-gray-100 text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
        {/* Table Header */}
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-4 px-6 border-b border-gray-100 bg-surface text-primary font-semibold rounded-t-2xl'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {appointments.map((item, index) => (
          <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-600 py-3.5 px-6 border-b border-gray-50 hover:bg-surface/50 transition-colors last:border-b-0' key={index}>
            <p className='max-sm:hidden text-gray-400'>{index + 1}</p>

            <div className='flex items-center gap-2'>
              <img className='w-8 h-8 rounded-full object-cover border-2 border-primary/10' src={item.userData.image} alt="" /> <p className='font-medium text-gray-800'>{item.userData.name}</p>
            </div>

            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>

            <div className='flex items-center gap-2'>
              <img className='w-8 h-8 rounded-full object-cover bg-surface border-2 border-primary/10' src={item.docData.image} alt="" /> <p className='font-medium text-gray-700'>{item.docData.name}</p>
            </div>

            <p className='font-semibold text-primary'>{currency}{item.amount}</p>

            {
              item.cancelled
                ? <span className='text-red-500 text-xs font-semibold bg-red-50 px-3 py-1 rounded-full'>Cancelled</span>
                : <button onClick={() => cancelAppointment(item._id)} className='text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors' title='Cancel Appointment'>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                  </button>
            }

          </div>
        ))}

      </div>
    </div>
  )
}

export default AllAppointments