export const login = async ({ username, password }) => {
  const CryptoJS = require('crypto-js')

  const envPassword = process.env.NEXT_PUBLIC_PASSWORD
  const envUsername = process.env.NEXT_PUBLIC_USERNAME
  const envSecretKey = process.env.NEXT_PUBLIC_SECRET_KEY

  const hashedInput = CryptoJS.HmacSHA256(password, envSecretKey).toString()

  if (envUsername === username && hashedInput === envPassword) {
    return true
  }

  return false
}
