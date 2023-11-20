import AppLayout from 'layouts/AppLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Card from '@/components/Card/Card'
import { getArchives } from '@/services/md.services'
import Link from 'next/link'

export async function getServerSideProps({ query, locale }) {
  const archives = await getArchives()
  return {
    props: {
      archives,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default function archive({ archives }) {
  return (
    <AppLayout>
      <Card>
        <h3 className="mb-10 text-center text-4xl font-bold text-primary-2">
          Archive
        </h3>
        {archives.map(({ year, monthList }, index) => (
          <div key={index}>
            <div>
              {monthList.map(({ month, titleList }, index) => (
                <div key={index}>
                  {new Date(year, month - 1).toLocaleString('default', {
                    month: 'long',
                    year: 'numeric',
                  })}
                  <span className="ml-2 inline-block">
                    ({titleList.length})
                  </span>
                  <div className="mb-4 ml-20">
                    {titleList.map(({ title, slug, publishedAt }, index) => (
                      <div key={index}>
                        {new Date(publishedAt).toLocaleDateString('tr-TR', {
                          day: '2-digit',
                        })}
                        :
                        <Link className="hover:underline" href={slug}>
                          {title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </AppLayout>
  )
}
