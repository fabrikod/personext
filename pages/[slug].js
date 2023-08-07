import Card from 'components/Card'
import AppLayout from 'layouts/AppLayout'
import Image from 'next/image';
import Chip from '@/components/Chip';
import { fetchData } from "../utils/readFile"

export default function BlogPage({ blog, user }) {
  return (
    <AppLayout>
      {
        blog &&
        <div className='flex flex-col gap-12 lg:flex-row'>
          <section id='profile' className='flex-auto lg:w-2/5'>
            <Card
              type='profile'
              name={user.fullName}
              job={user.job}
              description={user.description}
            />
          </section>
          <section id='blog' className='lg:w-3/5'>
            <Card>
              <div className='relative h-60 sm:h-80'>
                <Image
                  src={blog.image}
                  fill
                  className='object-cover w-full rounded-[20px]'
                />
              </div>
              <div className='pt-10'>
                <h3 className='font-bold text-4xl text-primary-2'>{blog.title}</h3>
              </div>
              <div id='blog-content' className='pt-10' dangerouslySetInnerHTML={{ __html: blog.content }} />
              <div>
                <div className='flex flex-wrap mt-9 gap-3 '>
                  {
                    blog.tags.map((tag, index) => <Chip className='text-primary-1 !rounded-[15px] !py-3 self-start' key={index}>{tag}</Chip>)
                  }
                </div>
              </div>
            </Card>
          </section>
        </div>
      }
    </AppLayout>
  );
}

export async function getStaticPaths() {
  try {
    const { data: { blogs } } = fetchData()
    const paths = blogs.map(({ slug }) => ({
      params: { slug }
    }))

    return {
      paths,
      fallback: true
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { data: { user, blogs } } = fetchData()
    const slug = params.slug;
    const blog = blogs.find(blog => blog.slug === slug)

    return {
      props: {
        blog: blog || {},
        user: user || {}
      },
    }
  } catch (error) {
    return {
      props: {
        blog: {},
        user: {}
      }
    }
  }
}