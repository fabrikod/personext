import Card from 'components/components/Card'
import AppLayout from 'components/layouts/AppLayout'

const data = [
  {
    type: 'fulltext',
    title: 'How to design a product from ground up',
    description: 'Having worked in product development and consulting for years, here’s the one thing all the clients I’ve worked with have had in common: No one knows how to make products.',
    tags: ['Product Design', 'Typography'],
    image: ''
  },
  {
    type: 'halftext',
    title: 'How to design a product from ground up',
    description: 'Having worked in product development and consulting for years, here’s the one thing all the clients I’ve worked with have had in common: No one knows how to make products.',
    tags: ['Product Design', 'Typography'],
    image: 'img1.png'
  },
]

export default function Home() {
  return (
    <AppLayout>
      <div className='flex gap-12'>
        <section id='profile' className='flex-auto w-1/3'>
          <Card
            type='profile'
            name='Ali Cantekin'
            job='Product Designer at Fabrikod'
            description='I’m Adam Smith, a designer and builder of digital products for people.'
          />
        </section>
        <section id='blog' className='flex-auto grid w-1/2 gap-12'>
          {
            data.map(({ type, title, description, tags, image }) =>
              <Card
                type={type}
                title={title}
                description={description}
                image={image}
                tags={tags}
              />
            )
          }

        </section>
      </div>
    </AppLayout>
  )
}
