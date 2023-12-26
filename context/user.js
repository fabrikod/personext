import apiClient from '@/utils/axios'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState({})
  const [settings, setSettings] = useState({})

  const updateUser = userData => {
    setUser(userData)
  }

  const updateSettings = settingsData => {
    setSettings(settingsData)
  }

  useEffect(() => {
    async function getData() {
      const data = await apiClient.get('/user')
      updateUser(data.user)
      updateSettings(data.settings)
    }

    getData()
  }, [])

  return (
    <UserContext.Provider value={{ user, settings, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
