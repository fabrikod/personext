import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: '0072a9ca306d48c43112',
      clientSecret: '8db42ab84f4010813326cdff98b970a6c3ef3559',
    }),
  ],
}

export default NextAuth(authOptions)
