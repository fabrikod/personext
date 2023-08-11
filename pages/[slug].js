import Card from 'components/Card'
import AppLayout from 'layouts/AppLayout'
import Image from 'next/image';
import Chip from '@/components/Chip';
import { getReadMeData } from '@/services/readme.service';

export default function BlogPage({ blog, user, socials }) {
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
              socials={socials}
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
                    blog && blog.tags.map((tag, index) => <Chip className='text-primary-1 !rounded-[15px] !py-3 self-start' key={index}>{tag}</Chip>)
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
    const blogs = await getReadMeData('/data/blogs.md')
    const paths = blogs.data.map(({ slug }) => ({
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
    const blogs = await getReadMeData('/data/blogs.md')
    const user = await getReadMeData('/data/user.md')
    const socials = await getReadMeData('/data/socials.md')

    const blog = blogs.data.find(blog => blog.slug === params.slug)

    return {
      props: {
        blog: blog || [],
        user: user.data || {},
        socials: socials.data || []
      },
    }
  } catch (error) {
    return {
      props: {
        blog: {},
        user: {},
        socials: []
      }
    }
  }
}