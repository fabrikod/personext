import Card from '@/components/Card/Card'
import Nav from '@/components/Common/Nav'
import AppLayout from '@/layouts/AppLayout'
import { getUserService } from '@/services/md.services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PERPAGE = 10

export async function getServerSideProps({ query, locale }) {
  const { page, tag } = query

  const user = await getUserService()

  return {
    props: {
      user: user,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  }
}

export default function Publications({ user }) {
  return (
    <AppLayout>
      <div className="flex flex-col gap-12 lg:flex-row">
        <section id="profile" className="flex-auto lg:w-2/5">
          <Nav user={user} />
        </section>

        <section id="publications" className="grid gap-y-10 lg:w-3/5">
          <Card>asda</Card>
        </section>
      </div>
    </AppLayout>
  )
}
