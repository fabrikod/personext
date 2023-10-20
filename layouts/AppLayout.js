import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export default function AppLayout({ children }) {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <main className="mx-auto max-w-[1400px] px-5 py-24">
      {/* <div className="flex justify-end gap-5">
        <div> {t('ddd')} </div>

        <Link href={router.asPath} locale="tr">
          tr
        </Link>
        <Link href={router.asPath} locale="en">
          en
        </Link>
      </div> */}
      {children}
    </main>
  )
}
