import { signIn } from 'next-auth/react'

export default function SignIn() {
  return (
    <div>
      <button onClick={() => signIn('github')}>GitHub ile Giriş Yap</button>
    </div>
  )
}
