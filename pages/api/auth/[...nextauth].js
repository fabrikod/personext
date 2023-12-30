import NextAuth from 'next-auth'
import bcrypt from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUserService } from '@/services/md.services'

// import GitHubProvider from 'next-auth/providers/github'

// export const authOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   secret: process.env.SECRET,
// }

// export default NextAuth(authOptions)

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const envPassword = process.env.PASSWORD
        const envUsername = process.env.USERNAMES

        const { username, password } = credentials
        if (envUsername === username) {
          const hashedPassword = await bcrypt.hash(envPassword, 10)
          const match = await bcrypt.compare(password, hashedPassword)

          if (match) {
            const user = await getUserService()
            return user
          }
        }
        throw new Error('Invalid username or password')
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
})
