import Card from '@/components/Card'
import AppLayout from 'layouts/AppLayout'
import Image from 'next/image'
import Chip from '@/components/Chip'
import {
  getUserService,
  getBlogBySlugService,
  getReadJsonFileService,
} from '@/services/md.services'
import { ArrowLeft } from '@/components/Icons'
import ErrorPage from 'next/error'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router'

export default function BlogPage({ blog, user }) {
  const router = useRouter()
  if (!blog) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <AppLayout>
      {blog && (
        <div className="flex flex-col gap-12 lg:flex-row">
          <section id="profile" className="relative flex-auto lg:w-2/5">
            <div
              className="absolute -top-20 cursor-pointer"
              onClick={() => router.back()}
            >
              <ArrowLeft width={70} className="stroke-primary-1" />
            </div>
            <Card
              type="profile"
              name={user.fullName}
              job={user.job}
              description={user.description}
              socials={user.socials}
              image={user.image}
            />
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

              <div className="pt-10">
                <h3 className="text-4xl font-bold text-primary-2">
                  {blog.title}
                </h3>
              </div>
              <div
                id="blog-content"
                className="pt-10"
                dangerouslySetInnerHTML={{
                  __html: blog.content.replace(/\n/g, '<br/>'),
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

              <div className="text-primary-5 mt-8 text-center text-primary-3">
                {new Date(blog.publishedAt).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                })}
              </div>
            </Card>
          </section>
        </div>
      )}
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
  const blog = await getBlogBySlugService(params.slug)
  const user = await getUserService()

  return {
    props: {
      blog: blog || [],
      user: user || {},
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
