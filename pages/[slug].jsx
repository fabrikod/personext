import Image from 'next/image'
import {
  getUserService,
  getBlogBySlugService,
  getReadJsonFileService,
  getSetting,
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

export default function BlogPage({ blog, user, domain }) {
  const router = useRouter()

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
          <meta property="og:title" content={blog.title} />
          <meta property="og:description" content={blog.description} />
          <meta property="og:image" content={`${domain}/${blog.image}`} />
        </Head>
        <NewCard>
          <div className="flex justify-between">
            <NewChip
              className="inline-block rotate-180 px-3 py-3"
              as="button"
              onClick={backToPage}
            >
              <ArrowRight className="bg-primary-6" height="18" width="18" />
            </NewChip>

            <div className="flex gap-3">
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
            </div>
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
            className="dark:text-darkmode-title"
            dangerouslySetInnerHTML={{
              __html: blog.content.replace(/\n{1,}/g, '<br/>'),
            }}
          />

          <div>
            <div className="mt-9 flex flex-wrap gap-3 ">
              {blog.tags &&
                blog.tags.map((tag, index) => (
                  <Link
                    href={{
                      pathname: '/',
                      query: {
                        tag: tag.key,
                      },
                    }}
                    key={index}
                  >
                    <NewChip className="px-5 text-sm text-primary-6">
                      {tag.name}
                    </NewChip>
                  </Link>
                ))}
            </div>
          </div>
        </NewCard>
      </section>
      {/* {blog && (
        <div className="flex flex-col gap-12 lg:flex-row">
          <section id="profile" className="relative flex-auto lg:w-2/5">
            <div
              className="absolute -top-20 cursor-pointer"
              onClick={() => router.back()}
            >
              <ArrowLeft width={70} className="stroke-primary-1" />
            </div>
            <Nav user={user} />
          </section>
          <section id="blog" className="lg:w-3/5">
            <Card>
              {blog.image && (
                <div className="relative h-60 sm:h-80">
                  <Image
                    src={blog.image}
                    fill
                    alt=""
                    className="w-full rounded-[20px] object-cover"
                  />
                </div>
              )}

              <div className={blog.image && 'pt-10'}>
                <h3 className="text-4xl font-bold text-primary-2">
                  {blog.title}
                </h3>
              </div>
              <div
                id="blog-content"
                className="pt-10"
                dangerouslySetInnerHTML={{
                  __html: blog.content.replace(/\n{1,}/g, '<br/>'),
                }}
              />

              <div>
                <div className="mt-9 flex flex-wrap gap-3 ">
                  {blog.tags &&
                    blog.tags.map((tag, index) => (
                      <Link
                        href={{
                          pathname: '/',
                          query: {
                            tag: tag.key,
                          },
                        }}
                        key={index}
                      >
                        <Chip className="self-start !rounded-[15px] !py-3 text-primary-1">
                          {tag.name}
                        </Chip>
                      </Link>
                    ))}
                </div>
              </div>

              <div className="mt-8 text-center text-primary-3">
                {new Date(blog.publishedAt).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                })}
              </div>
            </Card>
          </section>
        </div>
      )} */}
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
  const blog = await getBlogBySlugService(params.slug)
  const user = await getUserService()
  const domain = await getSetting({ settingName: 'domain' })

  return {
    props: {
      blog: blog || [],
      user: user || {},
      domain: domain || '',
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
