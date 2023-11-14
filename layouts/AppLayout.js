import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export default function AppLayout({ children }) {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <main className="mx-auto max-w-[1400px] px-5 py-5 sm:py-24">
      {children}
    </main>
  )
}
