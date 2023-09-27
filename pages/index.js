import Card from '@/components/Card'
import AppLayout from 'layouts/AppLayout'
import { getBlogService, getUserService } from '@/services/md.services'

export async function getServerSideProps() {
  const blogs = await getBlogService()
  const user = await getUserService()
  const withoutHeroBlogs = []
  const heroBlogs = []

  blogs.forEach((blog) => {
    blog.attributes.hero
      ? heroBlogs.push(blog.attributes)
      : withoutHeroBlogs.push(blog.attributes)
  })

  return {
    props: {
      user: user || {},
      withoutHeroBlogs: withoutHeroBlogs || [],
      heroBlogs: heroBlogs || [],
    }
  }
}

export default function Home({ user, withoutHeroBlogs, heroBlogs, errors }) {

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
          <div className='grid gap-y-10'>
            {
              heroBlogs &&
              heroBlogs.map((blog, index) =>
                <Card
                  {...blog}
                  key={index}
                />
              )
            }
          </div>

          <div className='grid sm:grid-cols-2 gap-10'>
            {
              withoutHeroBlogs.map((blog, index) =>
                <Card
                  {...blog}
                  key={index}
                />
              )
            }
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
