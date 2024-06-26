import Image from 'next/image'
import {
  getBlogBySlugService,
  getReadJsonFileService,
} from '@/services/md.services'
import { HandLike, HeartFavorite } from '@/components/Icons'
import ErrorPage from 'next/error'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import AppLayout from '@/layouts/AppLayout'
import Card from '@/components/Card/Card'
import Chip from '@/components/Common/Chip'
import ArrowRight from '@/components/Icons/ArrowRight'
import Head from 'next/head'
import { useUser } from '@/context/user'
import markdownIt from 'markdown-it'

export default function BlogPage({ blog }) {
  const router = useRouter()
  const { user, settings } = useUser()

  const backToPage = () => {
    router.back()
  }

  if (!blog) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <AppLayout>
      <section
        id="blog-post"
        className="mx-auto flex max-w-[620px] flex-col gap-9 pb-24 pt-9 max-sm:pt-28"
      >
        <Head>
          <title>
            {user.fullName} | {blog.title}
          </title>
          <meta name="description" content={blog.description} />
          <meta name="robots" content="index, follow" />
          <meta property="og:url" content={`${settings.domain}${blog.slug}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={blog.title} />
          <meta
            property="og:description"
            content={blog.description || user.description}
          />
          <meta
            property="og:image"
            content={`${settings.domain}${blog.image}`}
          />

          <meta
            property="twitter:url"
            content={`${settings.domain}${blog.slug}`}
          />
          <meta property="twitter:domain" content={settings.domain} />
          <meta property="twitter:title" content={blog.title} />
          <meta
            property="twitter:description"
            content={blog.description || user.description}
          />
          <meta
            property="twitter:image"
            content={`${settings.domain}${blog.image}`}
          />
          <meta
            name="twitter:card"
            content={`${settings.domain}${blog.image}`}
          />
        </Head>
        <Card>
          <div className="flex justify-between">
            <Chip
              className="button inline-block rotate-180 px-3 py-3 dark:bg-lineer-nav-link"
              as="button"
              onClick={backToPage}
            >
              <ArrowRight className="bg-primary-6" height="18" width="18" />
            </Chip>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-semibold text-primary-2 dark:text-darkmode-title">
              {blog.title}
            </h3>
          </div>

          <div className="mt-5 text-sm text-primary-6 dark:text-darkmode-title">
            {new Date(blog.publishedAt).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            })}
          </div>

          {blog.image && (
            <div className="relative mt-5 h-60 sm:h-80">
              <Image
                src={blog.image}
                fill
                alt=""
                className="w-full rounded-[20px] object-cover"
              />
            </div>
          )}

          <div
            id="new-blog-content"
            className="break-words dark:text-darkmode-title"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />

          <div>
            {blog.tags.length > 0 && (
              <div className="mt-9 flex flex-wrap gap-3 ">
                {blog.tags.map((tag, index) => (
                  <Link
                    href={{
                      pathname: '/tags/[tag]',
                      query: { tag: tag.key },
                    }}
                    key={index}
                  >
                    <Chip className="px-5 text-sm text-primary-6">
                      {tag.name}
                    </Chip>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Card>
      </section>
    </AppLayout>
  )
}

export async function getStaticPaths() {
  const blogs = await getReadJsonFileService()
  const paths = blogs.map(({ file }) => ({
    params: { slug: decodeURIComponent(file.split('.')[0]) },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params, locale }) {
  let blog = null
  try {
    blog = await getBlogBySlugService(params.slug)
  } catch (error) {
    console.log('Not Found')
  }

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })

  blog.content = md.render(blog.content)

  return {
    props: {
      blog: blog,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
