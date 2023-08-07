import Card from 'components/Card'
import AppLayout from 'layouts/AppLayout'
import { fetchData } from "../utils/readFile"

export async function getServerSideProps() {
  try {
    const data = fetchData();
    const { data: { user, blogs } } = data;

    const heroBlogs = blogs.filter(blog => blog.hero)
    const withoutHeroBlogs = blogs.filter(blog => !blog.hero)

    return {
      props: {
        data: data,
        user: user || {},
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

export default function Home({ user, withoutHeroBlogs, heroBlogs, errors, data }) {
  console.log("datadatadatadata", data);

  return (
    <AppLayout>
      <div className='flex flex-col gap-12 lg:flex-row'>
        <section id='profile' className='flex-auto lg:w-2/5'>
          <Card
            type='profile'
            name={user.fullName}
            job={user.job}
            description={user.description}
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
