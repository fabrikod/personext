import Card from '@/components/Card/Card'
import Nav from '@/components/Common/Nav'
import { ArrowLeft } from '@/components/Icons'
import AppLayout from '@/layouts/AppLayout'
import { getUserService, getPablicationsData } from '@/services/md.services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

const PERPAGE = 10

export async function getServerSideProps({ query, locale }) {
  const { page, tag } = query

  const user = await getUserService()
  const pablicationsData = await getPablicationsData()

  return {
    props: {
      user: user,
      data: pablicationsData,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  }
}

export default function Publications({ user, data }) {
  const router = useRouter()

  return (
    <AppLayout>
      <div className="flex flex-col gap-12 lg:flex-row">
        <section id="profile" className="relative flex-auto lg:w-2/5">
          <div
            className="absolute -top-20 cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeft width={70} className="stroke-primary-1" />
          </div>
          <Nav user={user} />
        </section>

        <section id="publications" className="grid gap-y-10 lg:w-3/5">
          <Card>
            <h3 className="text-center text-4xl font-bold capitalize text-primary-2">
              {Object.keys(data)[0]}
            </h3>

            <div className="mt-10">
              {data.articles.map((publication, index) => (
                <div key={index} className="mb-10">
                  <h4 className="text-xl font-bold">{publication.title}</h4>

                  <div className="mt-3 font-medium">
                    {publication.authors.join(', ')} ({publication.date})
                  </div>

                  <div className="mt-3 text-sm font-light text-primary-3">
                    <span className="capitalize">{publication.magazine}</span>,{' '}
                    {publication.volumeNumber}, {publication.pageNumber}{' '}
                    {publication.DOI && `Doi: ${publication.DOI}`}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-center text-4xl font-bold capitalize text-primary-2">
              {Object.keys(data)[1]}
            </h3>

            <div className="mt-10">
              {data.papers.map((publication, index) => (
                <div key={index} className="mb-10">
                  <h4 className="text-xl font-bold">{publication.title}</h4>

                  <div className="mt-3 font-medium">
                    {publication.authors.join(', ')} ({publication.date})
                  </div>

                  <div className="mt-3 text-sm font-light text-primary-3">
                    <span className="capitalize">{publication.conference}</span>
                    {publication.volumeNumber &&
                      `${publication.volumeNumber}, `}
                    {publication.pageNumber && `${publication.pageNumber}, `}
                    {publication.DOI && `Doi: ${publication.DOI}, `}
                    {publication.type}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-center text-4xl font-bold capitalize text-primary-2">
              {Object.keys(data)[2]}
            </h3>

            <div className="mt-10">
              {data.books.map((publication, index) => (
                <div key={index} className="mb-10">
                  <h4 className="text-2xl font-bold">{publication.bookName}</h4>

                  <div className="mt-3">
                    Editors: {publication.editors.join(', ')} - Authors:{' '}
                    {publication.authors.join(', ')} ({publication.date})
                  </div>

                  <div className="mt-3 text-sm font-light text-primary-3">
                    {publication.sectionName && (
                      <span className="capitalize">
                        Section: {publication.sectionName},{' '}
                      </span>
                    )}
                    {publication.volumeNumber &&
                      `${publication.volumeNumber}, `}
                    {publication.pageNumber && `${publication.pageNumber}, `}
                    {publication.DOI && `Doi: ${publication.DOI}, `}
                    {publication.type}
                    <br />
                    Number Of Editions: {publication.numberOfEditions} -
                    Publisher: {publication.publisher} - ISBN:{' '}
                    {publication.ISBN} - Language: {publication.language}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </AppLayout>
  )
}
