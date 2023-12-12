import { useSession, signIn } from 'next-auth/react'

export default function ProtectedPage() {
  const { data: session } = useSession()
  console.log('sessionsession', session)
  if (!session) {
    return (
      <div>
        Panel Sayfası<button onClick={() => signIn()}>Giriş Yap</button>
      </div>
    )
  }

  return <div>Hoş Geldiniz, {session.user.name}!</div>
}
