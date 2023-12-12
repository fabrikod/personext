import { useSession, signIn } from 'next-auth/react'

export default function ProtectedPage() {
  const { data: session } = useSession()
  console.log('sessionsession', session)
  if (!session) {
    return <button onClick={() => signIn()}>Giriş Yap</button>
  }

  return <div>Hoş Geldiniz, {session.user.name}!</div>
}
