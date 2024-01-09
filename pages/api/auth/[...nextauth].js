import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUserService } from '@/services/md.services'
import { login } from '@/services/md.user.service'

export default NextAuth({
  session: {
    strategy: 'jwt',
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 2 * 60 * 60, // 2 hours
  },
  providers: [
    CredentialsProvider({
      // set the type of provider
      type: 'credentials',
      // leave credentials object empty since we have our own login page
      credentials: {},
      // initialize authorize function
      async authorize(credentials) {
        const { username, password } = credentials

        if (await login({ username, password })) {
          const user = await getUserService()
          return user
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    },
  },
  secret: process.env.SECRET,
  // pages: {
  //   signIn: '/login',
  //   error: '/login',
  // },
})
