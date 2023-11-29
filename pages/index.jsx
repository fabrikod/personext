import Highlights from '@/components/NewHome/Highlights'
import Publications from '@/components/NewHome/Publications'
import Stacks from '@/components/NewHome/Stacks'
import Gallery from '@/components/NewHome/Galleries'
import Experience from '@/components/NewHome/Experiences'
import FollowMe from '@/components/NewHome/FollowMe'
import Profile from '@/components/NewHome/Profile'
import NewAppLayout from '@/layouts/NewAppLayout'
import { getUserService, getBlogJsonService } from '@/services/md.services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SelectedProjects from '@/components/NewHome/SelectedProjects'
import Blogs from '@/components/NewHome/Blogs'

const PERPAGE = 5

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
        className="mx-auto flex max-w-[620px] flex-col gap-9 pb-24 pt-9 max-sm:pt-28"
      >
        <Profile />

        <Highlights />

        <Publications />

        <Stacks />

        <Gallery />

        <Experience />

        <SelectedProjects />

        <Blogs data={blogs} />

        <FollowMe />
      </section>
    </NewAppLayout>
  )
}
