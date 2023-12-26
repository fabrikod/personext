import Articles from '@/components/Publications/Articles'
import Books from '@/components/Publications/Books'
import Papers from '@/components/Publications/Papers'
import { useUser } from '@/context/user'
import NewAppLayout from '@/layouts/NewAppLayout'
import { getPablicationsService } from '@/services/md.services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ query, locale }) {
  const pablicationsData = await getPablicationsService()

  return {
    props: {
      data: pablicationsData,
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
          <Articles title={Object.keys(data)[0]} data={data.articles} />
          <Papers title={Object.keys(data)[1]} data={data.papers} />
          <Books title={Object.keys(data)[2]} data={data.books} />
        </section>
      </section>
    </NewAppLayout>
  )
}
