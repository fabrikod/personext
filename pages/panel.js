import { useSession, signIn } from 'next-auth/react'

export default function ProtectedPage() {
  const { data: session } = useSession()

  if (!session) {
    return <button onClick={() => signIn()}>Giriş Yap</button>
  }

  return <div>Hoş Geldiniz, {session.user.name}!</div>
}
