import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import {Link} from 'react-router-dom'

const MyAppointments = () => {

  const { backendUrl, token, getDoctorsData } = useContext(AppContext)
  const [appointments, setAppointments] = useState([])
  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
  }

  const getUserAppointments = async () => {

    try {

      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

      if (data.success) {
        setAppointments(data.appointments.reverse())
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  const cancelAppointment = async (appointmentId) => {

    try {

      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div>
      <p className='pb-3 mt-12 font-bold text-xl text-gray-800 border-b border-gray-200'>My Appointments</p>

      <div>
        {appointments.map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b border-gray-100' key={index}>
            <div>
              <img className='w-32 rounded-xl bg-surface' src={item.docData.image} alt="" />
            </div>

            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-bold text-base'>{item.docData.name}</p>
              <p className='text-primary font-medium'>{item.docData.speciality}</p>
              <p className='text-zinc-700 font-medium mt-2'>Address:</p>
              <p className='text-xs text-gray-500'>{item.docData.address.line1}</p>
              <p className='text-xs text-gray-500'>{item.docData.address.line2}</p>
              <p className='text-sm mt-2'><span className='text-sm text-neutral-700 font-semibold'>Date & Time:</span> {slotDateFormat(item.slotDate)} |  {item.slotTime}</p>
            </div>

            <div></div>

            <div className='flex flex-col gap-2 justify-end'>
            {!item.cancelled && (
                <Link
                  to={`/receipt/${item._id}`}
                  className="text-sm text-gray-500 sm:min-w-48 py-2.5 border border-gray-200 rounded-lg text-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-medium"
                >
                  Receipt
                </Link>
              )}
              {!item.cancelled && <button className='text-sm text-gray-500 sm:min-w-48 py-2.5 border border-gray-200 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-medium'>Pay Online</button>}
              {!item.cancelled && <button onClick={() => cancelAppointment(item._id)} className='text-sm text-gray-500 sm:min-w-48 py-2.5 border border-gray-200 rounded-lg hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 font-medium'>Cancel Appointment</button>}
              {item.cancelled && <button className='sm:min-w-48 py-2.5 border border-red-200 rounded-lg text-red-500 bg-red-50 font-medium'>Appointment Cancelled</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments