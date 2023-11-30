import Articles from '@/components/Publications/Articles'
import Books from '@/components/Publications/Books'
import Papers from '@/components/Publications/Papers'
import NewAppLayout from '@/layouts/NewAppLayout'
import { getUserService, getPablicationsData } from '@/services/md.services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PERPAGE = 10

export async function getServerSideProps({ query, locale }) {
  const { page, tag } = query

  const user = await getUserService()
  const pablicationsData = await getPablicationsData()

  return {
    props: {
      user: user,
      data: pablicationsData,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  }
}

export default function Publications({ user, data }) {
  return (
    <NewAppLayout>
      <section
        id="container"
        className="mx-auto flex max-w-[620px] flex-col gap-9 pb-24 pt-9 max-sm:pt-28"
      >
        <section id="publications" className="grid gap-y-10">
          <Articles title={Object.keys(data)[0]} data={data.articles} />
          <Papers title={Object.keys(data)[1]} data={data.papers} />
          <Books title={Object.keys(data)[2]} data={data.books} />
        </section>
      </section>
    </NewAppLayout>
  )
}
