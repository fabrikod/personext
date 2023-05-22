import Card from 'components/components/Card'
import { useScreenSize } from 'components/hooks'
import AppLayout from 'components/layouts/AppLayout'
import { useEffect, useState } from 'react'

const data = [

  {
    type: 'quatertext',
    title: 'How to design a product from ground up 3',
    description: 'Having worked in product development and consulting for years, here’s the one thing all the clients...',
    tags: ['Product Design', 'Typography'],
    image: '/img/img1.png'
  },
  {
    type: 'fullimage',
    title: 'How to design a product from ground up 4',
    description: 'Having worked in product development and consulting for years, here’s the one thing all the clients...',
    tags: ['Product Design', 'Typography'],
    image: '/img/img1.png'
  },
  {
    type: 'fullimage',
    title: 'How to design a product from ground up 5',
    description: 'Having worked in product development and consulting for years, here’s the one thing all the clients...',
    tags: ['Product Design', 'Typography'],
    image: '/img/img1.png'
  },
  {
    type: 'fulltext',
    title: 'How to design a product from ground up 6',
    description: 'Having worked in product development and consulting for years, here’s the one thing all the clients...',
    tags: ['Product Design', 'Typography'],
    image: '/img/img1.png'
  },
  {
    type: 'fulltext',
    title: 'How to design a product from ground up 7',
    description: 'Having worked in product development and consulting for years, here’s the one thing all the clients...',
    tags: ['Product Design', 'Typography'],
    image: '/img/img1.png'
  },
]

const heroData = [
  {
    type: 'fulltext',
    title: 'How to design a product from ground up 1',
    description: 'Having worked in product development and consulting for years, here’s the one thing all the clients I’ve worked with have had in common: No one knows how to make products.',
    tags: ['Product Design', 'Typography'],
    image: ''
  },
  {
    type: 'halftext',
    title: 'How to design a product from ground up 2',
    description: 'Having worked in product development and consulting for years, here’s the one thing all the clients...',
    tags: ['Product Design', 'Typography'],
    image: '/img/img1.png'
  },
]

export default function Home() {
  const screenSize = useScreenSize();
  const [columnBlog, setColumnBlog] = useState({})

  useEffect(() => {
    const columns = {
      leftColumn: [],
      rightColumn: []
    }

    function returnCard({ type, title, description, tags, image }, index) {
      return (
        <Card
          type={type}
          title={title}
          description={description}
          image={image}
          tags={tags}
          key={index}
        />
      )
    }

    data.forEach((blog, index) => {
      if (index % 2 === 0) {
        columns.leftColumn.push(returnCard(blog, index))
      }
      else {
        columns.rightColumn.push(returnCard(blog, index))
      }
    })

    setColumnBlog(columns)
  }, [])


  return (
    <AppLayout>
      <div className='flex flex-col gap-12 lg:flex-row'>
        <section id='profile' className='flex-auto lg:w-1/3'>
          <Card
            type='profile'
            name='Ali Cantekin'
            job='Product Designer at Fabrikod'
            description='I’m Adam Smith, a designer and builder of digital products for people.'
          />
        </section>
        <section id='blogs' className='flex-auto lg:w-1/2 content-center grid gap-y-10'>
          {
            heroData.map(({ type, title, description, tags, image }, index) => (
              <Card
                type={type}
                title={title}
                description={description}
                image={image}
                tags={tags}
                key={index}
              />
            ))
          }

          {
            ['xs'].includes(screenSize)
              ? (
                <div className='flex flex-col gap-10'>
                  {
                    data.map(({ type, title, description, tags, image }, index) => (
                      <Card
                        type={type}
                        title={title}
                        description={description}
                        image={image}
                        tags={tags}
                        key={index}
                      />
                    ))
                  }
                </div>
              )
              : (
                <div className='column-blogs grid grid-cols-2 gap-x-10'>
                  <div className='grid gap-y-10 auto-rows-max'>
                    {columnBlog.leftColumn}
                  </div>
                  <div className='grid gap-y-10 auto-rows-max'>
                    {columnBlog.rightColumn}
                  </div>
                </div>
              )
          }
        </section>
      </div>
    </AppLayout>
  )
}
