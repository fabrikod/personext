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
      try {
        console.log('aaaaaa', process.env.NEXT_PUBLIC_APP_URL)
        const data = await apiClient.get('/user')
        console.log('User data:', data)
        updateUser(data.user)
        updateSettings(data.settings)
      } catch (error) {
        console.error('Failed to fetch user data:', error)
      }
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
