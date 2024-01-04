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
import NewAppLayout from '@/layouts/NewAppLayout'
import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import ArrowRight from '@/components/Icons/ArrowRight'
import Head from 'next/head'
import { useUser } from '@/context/user'

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
    <NewAppLayout>
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
        <NewCard>
          <div className="flex justify-between">
            <NewChip
              className="button inline-block rotate-180 px-3 py-3 dark:bg-lineer-nav-link"
              as="button"
              onClick={backToPage}
            >
              <ArrowRight className="bg-primary-6" height="18" width="18" />
            </NewChip>

            {/* <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary-6">12</span>
                <NewChip className="flex h-9 w-9 items-center justify-center">
                  <HandLike />
                </NewChip>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary-6">12</span>
                <NewChip className="flex h-9 w-9 items-center justify-center">
                  <HeartFavorite />
                </NewChip>
              </div>
            </div> */}
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
              __html: blog.content.replace(/\n{1,}/g, '<br/>'),
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
                    <NewChip className="px-5 text-sm text-primary-6">
                      {tag.name}
                    </NewChip>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </NewCard>
      </section>
    </NewAppLayout>
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

  return {
    props: {
      blog: blog,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
