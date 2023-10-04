import Card from '@/components/Card'
import AppLayout from 'layouts/AppLayout'
import { getUserService, getBlogJsonService } from '@/services/md.services'
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import apiClient from '@/utils/axios';

const PERPAGE = 4

export async function getServerSideProps({ query }) {
  const { page } = query
  const user = await getUserService()
  const { data, meta } = await getBlogJsonService({ perpage: PERPAGE, page: page || 1 })
  const blogs = data.map(({ attributes }) => attributes)

  return {
    props: {
      user: user || {},
      blogs: blogs || [],
      meta: meta || {}
    }
  }
}

export default function Home({ user, blogs, meta, errors }) {
  const router = useRouter()
  const [firstUse, setFirstUse] = useState(false)

  const pageChanged = (event) => {
    router.push({
      query: {
        page: event.selected + 1
      }
    })
  }

  useEffect(() => {
    if (firstUse) {
      async function fetchBlog() {
        blogs = await apiClient.get('/blog')
        console.log('blogsblogsblogs', blogs)
      }
      fetchBlog()
    }

    setFirstUse(true)
  }, [router.query])

  return (
    <AppLayout>
      <div className='flex flex-col gap-12 lg:flex-row'>
        <section id='profile' className='flex-auto lg:w-2/5'>
          <Card
            type='profile'
            name={user.fullName}
            job={user.job}
            description={user.description}
            socials={user.socials}
            image={user.image}
          />
        </section>
        <section id='blogs' className='grid gap-y-10 lg:w-3/5'>
          {errors && <p className='text-red-600'>{errors.map(error => error)}</p>}
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

          <div className='card-list'>
            {
              blogs.map((blog, index) =>
                <Card
                  {...blog}
                  key={index}
                  imageClassName={blog.type === 'halftext' ? 'w-full h-72 lg:h-auto' : ''}
                />
              )
            }
          </div>
        </section>
      </div>

      <ReactPaginate
        onPageChange={pageChanged}
        breakLabel="..."
        nextLabel=">"
        pageRangeDisplayed={10}
        pageCount={meta.pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className='pagination flex gap-5 justify-center mt-10'
      />
    </AppLayout>
  )
}
