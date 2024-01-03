import NewAppLayout from '@/layouts/NewAppLayout'
import {
  getUserService,
  getBlogJsonService,
  getSettingsService,
  getReadJsonFileService,
} from '@/services/md.services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Blogs from '@/components/Pages/NewHome/Blogs'
import apiClient from '@/utils/axios'
import { useEffect, useState } from 'react'
import { useUser } from '@/context/user'
import Head from 'next/head'

const PERPAGE = 7

export default function Tags({
  user = {},
  domain = '',
  blogs = [],
  tag = '',
  meta = {},
  errors,
}) {
  const [blogState, setBlogState] = useState(blogs)
  const [isBlogLoading, setIsBlogLoading] = useState(false)
  const [blogMeta, setBlogMeta] = useState({ page: 1 })

  const { updateUser } = useUser()

  useEffect(() => {
    updateUser(user)
  }, [])

  const getMoreBlogData = async () => {
    setIsBlogLoading(true)
    setTimeout(async () => {
      const newBlogs = await apiClient.get('/blog', {
        params: {
          page: blogMeta.page + 1,
          perpage: PERPAGE,
          tag: tag,
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
        <title>{user.fullName} | Tags</title>
        <meta name="description" content={user.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content={domain} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={user.fullName} />
        <meta property="og:description" content={user.description} />
        <meta property="og:image" content={`${domain}${user.image}`} />
        <meta property="twitter:url" content={domain} />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:title" content={user.fullName} />
        <meta property="twitter:description" content={user.description} />
        <meta property="twitter:image" content={`${domain}${user.image}`} />
        <meta name="twitter:card" content={`${domain}${user.image}`} />
      </Head>
      <section
        id="container"
        className="mx-auto flex max-w-[620px] flex-col gap-9 pb-24 pt-9 max-sm:pt-28"
      >
        <Blogs
          title="Tags"
          description={tag}
          data={blogState}
          getMoreBlogData={getMoreBlogData}
          isBlogLoading={isBlogLoading}
          blogMeta={blogMeta}
        />
      </section>
    </NewAppLayout>
  )
}

export async function getStaticPaths() {
  const blogs = await getReadJsonFileService()
  const tagList = []
  blogs.forEach(({ tags }) => {
    tags.forEach(({ key }) => {
      tagList.push(key)
    })
  })

  const paths = [...new Set(tagList)].map(key => ({
    params: { tag: decodeURIComponent(key) },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params, locale }) {
  const { data, meta } = await getBlogJsonService({
    perpage: PERPAGE,
    page: 1,
    tag: params.tag,
  })
  const user = await getUserService()
  const domain = await getSettingsService({ settingName: 'domain' })

  return {
    props: {
      blogs: data || [],
      user: user || {},
      domain: domain || '',
      tag: params.tag,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
