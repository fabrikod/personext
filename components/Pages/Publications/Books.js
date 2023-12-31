import NewCard from '@/components/Card/NewCard'

export default function Books({ title, data }) {
  return (
    <NewCard>
      <h2 className="text-center text-2xl font-semibold capitalize dark:text-darkmode-title">
        {title}
      </h2>

      <div className="mt-10">
        {data.map((publication, index) => (
          <div key={index} className="py-5">
            <h4 className="text-base font-medium dark:text-darkmode-title">
              {publication.bookName}
            </h4>

            <div className="mt-3 font-normal dark:text-darkmode-text">
              Editors: {publication.editors.join(', ')} - Authors:{' '}
              {publication.authors.join(', ')} ({publication.date})
            </div>

            <div className="mt-3 text-sm font-light text-primary-6 dark:text-darkmode-text">
              {publication.sectionName && (
                <span className="capitalize">
                  Section: {publication.sectionName},{' '}
                </span>
              )}
              {publication.volumeNumber && `${publication.volumeNumber}, `}
              {publication.pageNumber && `${publication.pageNumber}, `}
              {publication.DOI && `Doi: ${publication.DOI}, `}
              {publication.type}
              <br />
              Number Of Editions: {publication.numberOfEditions} - Publisher:{' '}
              {publication.publisher} - ISBN: {publication.ISBN} - Language:{' '}
              {publication.language}
            </div>
          </div>
        ))}
      </div>
    </NewCard>
  )
}
