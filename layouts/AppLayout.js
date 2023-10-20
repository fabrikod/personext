import Link from 'next/link'
import { useRouter } from 'next/router'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

export default function AppLayout({ children }) {
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <main className="mx-auto max-w-[1400px] px-5 py-24">
      <div className="flex justify-end gap-5">
        <Suspense fallback="Loading...">
          <div> {t('common:test')} </div>
        </Suspense>

        <Link href={router.asPath} locale="tr">
          tr
        </Link>
        <Link href={router.asPath} locale="en">
          en
        </Link>
      </div>
      {children}
    </main>
  )
}
