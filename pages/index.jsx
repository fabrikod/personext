import Publications from '@/components/NewHome/Publications'
import Stacks from '@/components/NewHome/Stacks'
import Experience from '@/components/NewHome/Experiences'
import FollowMe from '@/components/NewHome/FollowMe'
import Profile from '@/components/NewHome/Profile'
import NewAppLayout from '@/layouts/NewAppLayout'
import {
  getBlogJsonService,
  getPablicationsService,
} from '@/services/md.services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SelectedProjects from '@/components/NewHome/SelectedProjects'
import Blogs from '@/components/NewHome/Blogs'
import apiClient from '@/utils/axios'
import { useState } from 'react'
import { useUser } from '@/context/user'
import Head from 'next/head'

const PERPAGE = 7

export async function getServerSideProps({ query, locale }) {
  const { page, tag } = query

  const articles = await getPablicationsService({ name: 'articles' })
  const { data, meta } = await getBlogJsonService({
    perpage: PERPAGE,
    page: page || 1,
    tag: tag,
  })

  return {
    props: {
      blogs: data,
      articles,
      meta: meta,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  }
}

export default function Index({
  blogs = [],
  articles = [],
  // meta = {},
  // errors,
}) {
  const [blogState, setBlogState] = useState(blogs)
  const [isBlogLoading, setIsBlogLoading] = useState(false)
  const [blogMeta, setBlogMeta] = useState({ page: 1 })

  const { user, settings } = useUser()

  const getMoreBlogData = async () => {
    setIsBlogLoading(true)
    setTimeout(async () => {
      const newBlogs = await apiClient.get('/blog', {
        params: {
          page: blogMeta.page + 1,
          perpage: PERPAGE,
        },
      })
      setIsBlogLoading(false)
      setBlogMeta(newBlogs.meta)
      setBlogState(prev => [...prev, ...newBlogs.data])
    }, 100)
  }

  return (
    <NewAppLayout>
      <Head>
        <title>{user.fullName}</title>
        <meta name="description" content={user.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content={settings.domain} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={user.fullName} />
        <meta property="og:description" content={user.description} />
        <meta property="og:image" content={`${settings.domain}${user.image}`} />
        <meta property="twitter:url" content={settings.domain} />
        <meta property="twitter:domain" content={settings.domain} />
        <meta property="twitter:title" content={user.fullName} />
        <meta property="twitter:description" content={user.description} />
        <meta
          property="twitter:image"
          content={`${settings.domain}${user.image}`}
        />
        <meta name="twitter:card" content={`${settings.domain}${user.image}`} />
      </Head>
      <section
        id="container"
        className="mx-auto flex max-w-[620px] flex-col gap-9 pb-24 pt-9 max-sm:pt-28"
      >
        <Profile data={user} />

        {/* <Highlights /> */}

        <Publications data={articles} />

        <Stacks />

        {/* <Gallery /> */}

        <Experience />

        <SelectedProjects />

        <Blogs
          title="Blog"
          description="Take a look at the latest articles from."
          data={blogState}
          getMoreBlogData={getMoreBlogData}
          isBlogLoading={isBlogLoading}
          blogMeta={blogMeta}
        />

        <FollowMe data={user.socials || []} />
      </section>
    </NewAppLayout>
  )
}
