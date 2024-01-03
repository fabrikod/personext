import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUserService } from '@/services/md.services'
import { login } from '@/services/md.user.service'

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { username, password } = credentials
        console.log('3333333333', { username, password })

        if (await login({ username, password })) {
          console.log('4444444444')
          const user = await getUserService()
          return user
        }
        console.log('5555555555')
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
