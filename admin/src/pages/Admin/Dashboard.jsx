import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, cancelAppoitment, dashData, getDashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='m-5 w-full'>

      {/* Page Title */}
      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
        <p className='text-gray-500 text-sm mt-1'>Overview of your platform</p>
      </div>

      {/* Stat Cards */}
      <div className='flex flex-wrap gap-4'>

        <div className='flex items-center gap-4 bg-white p-5 min-w-52 rounded-2xl border border-gray-100 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm'>
          <div className='w-14 h-14 bg-surface rounded-xl flex items-center justify-center'>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D6C6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
            </svg>
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>{dashData.doctors}</p>
            <p className='text-gray-500 text-sm'>Doctors</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white p-5 min-w-52 rounded-2xl border border-gray-100 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm'>
          <div className='w-14 h-14 bg-surface rounded-xl flex items-center justify-center'>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D6C6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>{dashData.appointments}</p>
            <p className='text-gray-500 text-sm'>Appointments</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white p-5 min-w-52 rounded-2xl border border-gray-100 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm'>
          <div className='w-14 h-14 bg-surface rounded-xl flex items-center justify-center'>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D6C6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>{dashData.patients}</p>
            <p className='text-gray-500 text-sm'>Patients</p>
          </div>
        </div>

      </div>

      {/* Latest Bookings */}
      <div className='bg-white rounded-2xl shadow-sm border border-gray-100 mt-8 overflow-hidden'>

        <div className='flex items-center gap-3 px-6 py-4 border-b border-gray-100'>
          <div className='w-8 h-8 bg-surface rounded-lg flex items-center justify-center'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D6C6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
          </div>
          <p className='font-semibold text-gray-800'>Latest Bookings</p>
        </div>

        <div>
          {
            dashData.lastestAppointments.map((item, index) => (
              <div className='flex items-center px-6 py-3.5 gap-4 hover:bg-surface/50 transition-colors border-b border-gray-50 last:border-b-0' key={index}>
                <img className='rounded-full w-10 h-10 object-cover border-2 border-primary/10' src={item.docData.image} alt="" />

                <div className='flex-1 text-sm'>
                  <p className='text-gray-800 font-medium'>{item.docData.name}</p>
                  <p className='text-gray-500 text-xs'>{slotDateFormat(item.slotDate)}</p>
                </div>

                {
                  item.cancelled
                    ? <span className='text-red-500 text-xs font-semibold bg-red-50 px-3 py-1 rounded-full'>Cancelled</span>
                    : <button onClick={() => cancelAppoitment(item._id)} className='text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors' title='Cancel Appointment'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                      </button>
                }

              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Dashboard