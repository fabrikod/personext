import Card from '@/components/Card/Card'
import AppLayout from 'layouts/AppLayout'
import { getUserService, getBlogJsonService } from '@/services/md.services'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import apiClient from '@/utils/axios'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PERPAGE = 10

export async function getServerSideProps({ query, locale, params }) {
  const { page } = query
  const user = await getUserService()
  const { data, meta } = await getBlogJsonService({
    perpage: PERPAGE,
    page: page || 1,
    tag: params.tag,
  })
  const blogs = data.map(({ attributes }) => attributes)

  return {
    props: {
      user: user || {},
      blogs: blogs || [],
      meta: meta || {},
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default function Tag({ user, blogs, meta, errors }) {
  const router = useRouter()
  const [firstUse, setFirstUse] = useState(false)

  const pageChanged = event => {
    router.push({
      query: {
        ...router.query,
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
      <div className="">
        {/* <section id="profile" className="flex-auto lg:w-2/5">
          <Card
            type="profile"
            name={user.fullName}
            job={user.job}
            description={user.description}
            socials={user.socials}
            image={user.image}
          />
        </section> */}
        <div className="mb-16 text-center text-6xl capitalize">
          Etiket: {router.query.tag}
        </div>
        <section id="blogs" className="grid gap-y-10 ">
          {errors && (
            <p className="text-red-600">{errors.map(error => error)}</p>
          )}

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
