import Card from 'components/Card'
import AppLayout from 'layouts/AppLayout'

export async function getServerSideProps() {
  const fs = require('fs');
  const yaml = require('js-yaml');

  try {
    const delimiter = '---';
    const markdownContent = fs.readFileSync('./README.md', 'utf-8');
    const startIndex = markdownContent.indexOf(delimiter) + delimiter.length;
    const endIndex = markdownContent.indexOf(delimiter, startIndex);

    if (startIndex === -1 || endIndex === -1) {
      throw new Error('Invalid Markdown file format');
    }

    const extractedContent = markdownContent.slice(startIndex, endIndex).trim();
    const yamlData = yaml.load(extractedContent);

    const data = {
      user: {
        email: yamlData.email,
        name: yamlData.name,
        surname: yamlData.surname,
        fullName: `${yamlData.name} ${yamlData.surname}`,
        description: yamlData.description,
        job: yamlData.job,
        username: yamlData.username,
        socialMediaLinks: yamlData.socialMediaLinks
      },
      blogs: yamlData.blogList,
    }

    const { user, blogs } = data;

    const heroBlogs = blogs.filter(blog => blog.hero)
    const withoutHeroBlogs = blogs.filter(blog => !blog.hero)

    return {
      props: {
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

export default function Home({ user, withoutHeroBlogs, heroBlogs, errors, data, funk }) {
  console.log("datadatadatadata", data);
  console.log("{ user, withoutHeroBlogs, heroBlogs, errors, data, funk }", { user, withoutHeroBlogs, heroBlogs, errors, data, funk });

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
