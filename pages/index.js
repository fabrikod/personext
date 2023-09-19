import Card from '@/components/Card'
import AppLayout from 'layouts/AppLayout'
import { getReadMeData } from '@/services/readme.service'
import { useEffect } from 'react'

export async function getServerSideProps() {
  try {
    const user = await getReadMeData('/data/user.md')
    const blogs = await getReadMeData('/data/blogs.md')

    const heroBlogs = blogs.data.filter(blog => blog.hero)
    const withoutHeroBlogs = blogs.data.filter(blog => !blog.hero)

    return {
      props: {
        user: user.data || {},
        withoutHeroBlogs: withoutHeroBlogs || [],
        heroBlogs: heroBlogs || [],
      }
    }
  } catch (error) {
    console.error(error);

    return {
      props: {
        user: {},
        withoutHeroBlogs: [],
        heroBlogs: [],
        errors: error.errors || []
      },
    };
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
