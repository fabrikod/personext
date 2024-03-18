import classNames from 'classnames'

export default function PublicationsCard({ article, className }) {
  return (
    <div
      className={classNames(
        'border-t border-solid border-primary-1 px-9 py-4 dark:border-darkmode-border',
        className
      )}
    >
      <h3 className="text-base font-semibold dark:text-darkmode-title">
        {article.title}
      </h3>

      <p className="mt-2 text-sm font-normal text-primary-6 dark:text-darkmode-text">
        {article.authors.join(', ')} ({article.date})
      </p>
      <span className="mt-2 block text-2xs text-primary-6 dark:text-darkmode-text">
        <span className="capitalize">{article.magazine}</span>,{' '}
        {article.volumeNumber}, {article.pageNumber}{' '}
        {article.DOI && `Doi: ${article.DOI}`}
      </span>
    </div>
  )
}
