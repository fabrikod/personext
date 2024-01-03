import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUserService } from '@/services/md.services'
import { login } from '@/services/md.user.service'

export default NextAuth({
  providers: [
    CredentialsProvider({
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
