import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify'
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = '$'
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [doctors, setDoctors] = useState([])
  const [token, setToken] = useState(() => localStorage.getItem('token') || false);
  const [userData, setUserData] = useState(false)

  const getDoctorsData = async () => {

    try {

      const { data } = await axios.get(backendUrl + '/api/doctor/list')
      if (data.success) {
        setDoctors(data.doctors)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  const loadUserProfileData = async () => {

    try {

      const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })

      if (data.success) {
        setUserData(data.userData)
      } else {
        // If token is invalid/expired, clear it so user can login fresh
        if (data.message === 'invalid signature' || data.message === 'jwt malformed' || data.message === 'Not Authorized Login Again') {
          localStorage.removeItem('token')
          setToken(false)
        }
      }

    } catch (error) {
      console.log(error)
    }

  }

  const value = {
    doctors, getDoctorsData,
    currencySymbol,
    token, setToken,
    backendUrl,
    userData, setUserData,
    loadUserProfileData
  }

  useEffect(() => {
    getDoctorsData()
  }, [])

  useEffect(() => {
    if (token) {
      loadUserProfileData()
    } else {
      setUserData(false)
    }
  }, [token])

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}

export default AppContextProvider