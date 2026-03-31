import React, { useContext, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets_admin/assets'

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (!docImg) {
        return toast.error('Image Not Selected!')
      }

      const formData = new FormData()

      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`)
      })

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>

      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-gray-800'>Add Doctor</h1>
        <p className='text-gray-500 text-sm mt-1'>Add a new doctor to the platform</p>
      </div>

      <div className='bg-white px-8 py-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>

        {/* Upload Photo */}
        <div className='flex items-center gap-4 mb-8'>
          <label htmlFor="doc-img" className='cursor-pointer'>
            <div className='w-20 h-20 min-w-[5rem] min-h-[5rem] max-w-[5rem] max-h-[5rem] rounded-2xl bg-surface border-2 border-dashed border-primary/30 flex items-center justify-center overflow-hidden hover:border-primary transition-colors'>
              {docImg
                ? <img className='w-20 h-20 min-w-[5rem] min-h-[5rem] object-cover' src={URL.createObjectURL(docImg)} alt="" />
                : <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D6C6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
              }
            </div>
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id='doc-img' hidden />
          <div>
            <p className='text-gray-700 font-medium'>Upload Photo</p>
            <p className='text-gray-400 text-xs'>Doctor profile picture</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>

          {/* Left Side */}
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p className='font-medium text-gray-700 text-sm'>Doctor Name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} className='border border-gray-200 rounded-lg px-3 py-2.5 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="text" placeholder='Name' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='font-medium text-gray-700 text-sm'>Doctor Email</p>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-200 rounded-lg px-3 py-2.5 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="email" placeholder='Email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='font-medium text-gray-700 text-sm'>Doctor Password</p>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-200 rounded-lg px-3 py-2.5 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="password" placeholder='Password' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='font-medium text-gray-700 text-sm'>Experience</p>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} className='border border-gray-200 rounded-lg px-3 py-2.5 focus:border-primary focus:outline-none transition-colors bg-gray-50'>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='font-medium text-gray-700 text-sm'>Fees</p>
              <input onChange={(e) => setFees(e.target.value)} value={fees} className='border border-gray-200 rounded-lg px-3 py-2.5 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="number" placeholder='Fees' required />
            </div>
          </div>

          {/* Right Side */}
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p className='font-medium text-gray-700 text-sm'>Speciality</p>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='border border-gray-200 rounded-lg px-3 py-2.5 focus:border-primary focus:outline-none transition-colors bg-gray-50'>
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='font-medium text-gray-700 text-sm'>Education</p>
              <input onChange={(e) => setDegree(e.target.value)} value={degree} className='border border-gray-200 rounded-lg px-3 py-2.5 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="text" placeholder='Education' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='font-medium text-gray-700 text-sm'>Address</p>
              <input onChange={(e) => setAddress1(e.target.value)} value={address1} className='border border-gray-200 rounded-lg px-3 py-2.5 focus:border-primary focus:outline-none transition-colors bg-gray-50' type="text" placeholder='Address line 1' required />
              <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='border border-gray-200 rounded-lg px-3 py-2.5 focus:border-primary focus:outline-none transition-colors bg-gray-50 mt-2' type="text" placeholder='Address line 2' required />
            </div>

          </div>
        </div>

        {/* About Section */}
        <div>
          <p className='mt-6 mb-2 font-medium text-gray-700 text-sm'>About Doctor</p>
          <textarea onChange={(e) => setAbout(e.target.value)} value={about} className='w-full px-4 pt-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors bg-gray-50' placeholder='Write about the doctor' rows={5} required></textarea>
        </div>

      </div>

      <button type='submit' className='bg-primary px-10 py-3 mt-6 text-white rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md shadow-primary/20 flex items-center gap-2'>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
        </svg>
        Add Doctor
      </button>

    </form>
  )
}

export default AddDoctor