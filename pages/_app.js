import { appWithTranslation } from 'next-i18next'
import { UserProvider } from '../context/user'
import '../assets/styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default appWithTranslation(App)
