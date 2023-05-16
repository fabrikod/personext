import https from 'https'
import Axios from 'axios'
import { useRouter } from 'next/router'


export const useAxios = () => {
  const router = useRouter()

  const axios = Axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  })

  // Request interceptor
  axios.interceptors.request.use((request) => {
    const locale = router.locale

    if (locale) {
      const headerName = 'X-Locale'

      if (typeof request.headers.common !== 'undefined') {
        request.headers.common[headerName] = locale
      } else {
        request.headers[headerName] = locale
      }
    }

    return request
  })

  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.axios = axios
  }

  return axios;
}