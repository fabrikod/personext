import Card from '@/components/Card'
import AppLayout from 'layouts/AppLayout'
import Image from 'next/image';
import Chip from '@/components/Chip';
import { getUserService, getBlogBySlugService, getReadJsonFileService } from '@/services/md.services'
import { ArrowLeft } from '@/components/Icons';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error'
import Link from 'next/link';

export default function BlogPage({ blog, user }) {
  const router = useRouter();

  if (!blog) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <AppLayout>
      {
        blog &&
        <div className='flex flex-col gap-12 lg:flex-row'>
          <section id='profile' className='flex-auto lg:w-2/5 relative'>
            <Link className='absolute -top-20' href="/">
              <ArrowLeft width={70} className="stroke-primary-1" />
            </Link>
            <Card
              type='profile'
              name={user.fullName}
              job={user.job}
              description={user.description}
              socials={user.socials}
              image={user.image}
            />
          </section>
          <section id='blog' className='lg:w-3/5'>
            <Card>
              <div className='relative h-60 sm:h-80'>
                <Image
                  src={blog.image}
                  fill
                  alt=""
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
                    blog.tags && blog.tags.map((tag, index) => <Chip className='text-primary-1 !rounded-[15px] !py-3 self-start' key={index}>{tag}</Chip>)
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
  const blogs = await getReadJsonFileService()
  const paths = blogs.map(({ file }) => ({
    params: { slug: file }
  }))

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlugService(params.slug)
  const user = await getUserService()

  return {
    props: {
      blog: blog || [],
      user: user || {},
    },
  }
}