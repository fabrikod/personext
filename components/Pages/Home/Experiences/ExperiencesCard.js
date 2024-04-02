import Chip from '@/components/Common/Chip'
import classNames from 'classnames'
import React from 'react'

export default function ExperiencesCard({ data, className }) {
  return (
    <div
      className={classNames(
        'border-t border-solid border-primary-1 px-9 py-4 dark:border-darkmode-border',
        className
      )}
    >
      <h3 className="text-base font-semibold dark:text-darkmode-title">
        {data.company} - {data.position}
      </h3>

      <p className="mt-2 text-sm font-normal text-primary-6 dark:text-darkmode-text">
        {data.description}
      </p>

      <Chip className="mt-4 inline-block px-4 py-1 text-xs text-primary-6">
        {data.date}
      </Chip>
    </div>
  )
}
