import NewCard from '@/components/Card/NewCard'

export default function Papers({ title, data }) {
  return (
    <NewCard>
      <h2 className="text-center text-2xl font-semibold capitalize dark:text-darkmode-title">
        {title}
      </h2>

      <div className="mt-10">
        {data.map((publication, index) => (
          <div key={index} className="mb-10">
            <h4 className="text-base font-medium dark:text-darkmode-title">
              {publication.title}
            </h4>

            <div className="mt-3 font-normal dark:text-darkmode-text">
              {publication.authors.join(', ')} ({publication.date})
            </div>

            <div className="mt-3 text-sm font-light text-primary-6 dark:text-darkmode-text">
              <span className="capitalize">{publication.conference}</span>
              {publication.volumeNumber && `${publication.volumeNumber}, `}
              {publication.pageNumber && `${publication.pageNumber}, `}
              {publication.DOI && `Doi: ${publication.DOI}, `}
              {publication.type}
            </div>
          </div>
        ))}
      </div>
    </NewCard>
  )
}
