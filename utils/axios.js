import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  response => response.data,
  error => {
    const { response } = error
    if (response) {
      console.error(
        `Request failed with status code ${response.status}:`,
        error
      )
      throw error
    } else {
      console.error('Network error:', error)
      throw new Error('Network error occurred. Please try again later.')
    }
  }
)

export default apiClient
