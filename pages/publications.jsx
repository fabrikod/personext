import Card from '@/components/Card/Card'
import { useUser } from '@/context/user'
import NewAppLayout from '@/layouts/NewAppLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ query, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  }
}

export default function Publications({ data }) {
  const { user, settings } = useUser()

  return (
    <NewAppLayout>
      <section
        id="container"
        className="mx-auto flex max-w-[620px] flex-col gap-9 pb-24 pt-9 max-sm:pt-28"
      >
        <section id="publications" className="grid gap-y-10">
          <Card>
            <h2 className="text-center text-2xl font-semibold capitalize dark:text-darkmode-title"></h2>
          </Card>
        </section>
      </section>
    </NewAppLayout>
  )
}
