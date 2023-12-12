import { appWithTranslation } from 'next-i18next'
import { UserProvider } from '../context/user'
import '../assets/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(App)
