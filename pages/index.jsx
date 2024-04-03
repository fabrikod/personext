import Stacks from '@/components/Pages/Home/Stacks'
import Experience from '@/components/Pages/Home/Experiences'
import FollowMe from '@/components/Pages/Home/FollowMe'
import Profile from '@/components/Pages/Home/Profile'
import AppLayout from '@/layouts/AppLayout'
import { getBlogJsonService } from '@/services/md.services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Blogs from '@/components/Pages/Home/Blogs'
import apiClient from '@/utils/axios'
import { useState } from 'react'
import { useUser } from '@/context/user'
import Head from 'next/head'
import { getStackService } from '@/services/stack.service'

const PERPAGE = 7

export async function getServerSideProps({ query, locale }) {
  const { page, tag } = query

  const { data, meta } = await getBlogJsonService({
    perpage: PERPAGE,
    page: page || 1,
    tag: tag,
  })

  const stacks = await getStackService()

  return {
    props: {
      stacks,
      blogs: data,
      meta: meta,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  }
}

export default function Index({ blogs = [], stacks = [] }) {
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
    <AppLayout>
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

        <Stacks data={stacks} />

        <Experience />

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
    </AppLayout>
  )
}
