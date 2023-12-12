import { appWithTranslation } from 'next-i18next'
import { UserProvider } from '../context/user'
import '../assets/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(App)
