import Card from '@/components/Card'
import AppLayout from 'layouts/AppLayout'
import { getUserService, getBlogJsonService } from '@/services/md.services'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import apiClient from '@/utils/axios'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { xmlToJson } from '@/helpers'

const PERPAGE = 10

export async function getServerSideProps({ query, locale }) {
  const { page } = query
  const user = await getUserService()
  const { data, meta } = await getBlogJsonService({
    perpage: PERPAGE,
    page: page || 1,
    tag: query.tag,
  })
  const blogs = data.map(({ attributes }) => attributes)

  // xmlToJson('abdullahnden.WordPress.2023-09-19.xml')

  return {
    props: {
      user: user || {},
      blogs: blogs || [],
      meta: meta || {},
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default function Home({ user, blogs, meta, errors }) {
  const router = useRouter()
  const [firstUse, setFirstUse] = useState(false)

  const pageChanged = event => {
    router.push({
      query: {
        page: event.selected + 1,
      },
    })
  }

  useEffect(() => {
    if (firstUse) {
      async function fetchBlog() {
        blogs = await apiClient.get('/blog')
      }
      fetchBlog()
    }

    setFirstUse(true)
  }, [router.query])

  return (
    <AppLayout>
      <div className="flex flex-col gap-12 lg:flex-row">
        <section id="profile" className="flex-auto lg:w-2/5">
          <Card
            type="profile"
            name={user.fullName}
            job={user.job}
            description={user.description}
            socials={user.socials}
            image={user.image}
          />
        </section>
        <section id="blogs" className="grid gap-y-10 lg:w-3/5">
          {errors && (
            <p className="text-red-600">{errors.map(error => error)}</p>
          )}
          {/* <div className='grid gap-y-10'>
            {
              heroBlogs &&
              heroBlogs.map((blog, index) =>
                <Card
                  {...blog}
                  key={index}
                />
              )
            }
          </div> */}

          <div className="card-list">
            {blogs.map((blog, index) => (
              <Card
                {...blog}
                key={index}
                imageClassName={
                  blog.type === 'halftext' ? 'w-full h-72 lg:h-auto' : ''
                }
              />
            ))}
          </div>
        </section>
      </div>

      <ReactPaginate
        onPageChange={pageChanged}
        breakLabel="..."
        forcePage={meta.page - 1}
        nextLabel=">"
        pageRangeDisplayed={10}
        pageCount={meta.pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="pagination mt-10 flex justify-center gap-5"
      />
    </AppLayout>
  )
}
