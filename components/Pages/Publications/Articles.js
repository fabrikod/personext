import { useRouter } from 'next/router'
import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import ArrowRight from '@/components/Icons/ArrowRight'

export default function Articles({ title, data }) {
  const router = useRouter()

  return (
    <NewCard>
      <div className="">
        <NewChip
          className="button inline-block rotate-180 px-3 py-3 dark:bg-lineer-nav-link"
          as="button"
          onClick={() => router.back()}
        >
          <ArrowRight className="bg-primary-6" height="18" width="18" />
        </NewChip>
      </div>
      <h2 className="text-center text-2xl font-semibold capitalize dark:text-darkmode-title">
        {title}
      </h2>

      <div className="">
        {data.map((publication, index) => (
          <div key={index} className="py-5">
            <h4 className="text-base font-medium dark:text-darkmode-title">
              {publication.title}
            </h4>

            <div className="mt-3 font-normal dark:text-darkmode-text">
              {publication.authors.join(', ')} ({publication.date})
            </div>

            <div className="mt-3 text-sm font-light text-primary-6 dark:text-darkmode-text">
              <span className="capitalize">{publication.magazine}</span>,{' '}
              {publication.volumeNumber}, {publication.pageNumber}{' '}
              {publication.DOI && `Doi: ${publication.DOI}`}
            </div>
          </div>
        ))}
      </div>
      {/* <p className="dark:text-darkmode-text mt-2 text-sm font-normal text-primary-6">
{description}
</p> */}
    </NewCard>
  )
}
