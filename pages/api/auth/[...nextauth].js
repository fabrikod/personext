import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackUrl: 'https://www.abdullahonden.com/api/auth/signin',
    }),
  ],
  secret: process.env.SECRET,
}

export default NextAuth(authOptions)
