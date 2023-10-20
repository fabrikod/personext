import AppLayout from 'layouts/AppLayout'
import { getBlogJsonService } from '@/services/md.services'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import apiClient from '@/utils/axios'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CardList from '@/components/Card/CardList'
import ErrorPage from 'next/error'

const PERPAGE = 10

export async function getServerSideProps({ query, locale, params }) {
  const { page } = query
  const { data, meta } = await getBlogJsonService({
    perpage: PERPAGE,
    page: page || 1,
    tag: params.tag,
  })

  return {
    props: {
      blogs: data,
      meta: meta,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default function Tag({ blogs = [], meta = {}, errors }) {
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

  if (!blogs.length) {
    return <ErrorPage statusCode={404} />
  }

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
            <CardList data={blogs} />
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
