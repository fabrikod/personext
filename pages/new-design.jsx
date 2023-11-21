import Highlights from '@/components/NewHome/Highlights'
import Publications from '@/components/NewHome/Publications'
import Stack from '@/components/NewHome/Stack'
import Profile from '@/components/NewHome/Profile'
import NewAppLayout from '@/layouts/NewAppLayout'
import { getUserService, getBlogJsonService } from '@/services/md.services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PERPAGE = 10

export async function getServerSideProps({ query, locale }) {
  const { page, tag } = query

  const user = await getUserService()
  const { data, meta } = await getBlogJsonService({
    perpage: PERPAGE,
    page: page || 1,
    tag: tag,
  })

  return {
    props: {
      user: user,
      blogs: data,
      meta: meta,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  }
}

export default function NewDesign({
  user = {},
  blogs = [],
  meta = {},
  errors,
}) {
  return (
    <NewAppLayout>
      <section
        id="container"
        className="mx-auto flex max-w-[611px] flex-col gap-9 pt-9"
      >
        <Profile />

        <Highlights />

        <Publications />

        <Stack />
      </section>
    </NewAppLayout>
  )
}
