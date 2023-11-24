import NewChip from '@/components/Common/NewChip'
import classNames from 'classnames'
import React from 'react'

export default function ExperiencesCard({ className }) {
  return (
    <div
      className={classNames(
        'dark:border-darkmode-border border-t border-solid border-primary-1 px-9 py-4',
        className
      )}
    >
      <h3 className="dark:text-darkmode-title text-base font-semibold">
        Fabrikod
      </h3>

      <p className="dark:text-darkmode-text mt-2 text-sm font-normal text-primary-6">
        List of investors with a focus on revenue, featured by Abdullah Önden
      </p>

      <NewChip className="mt-4 inline-block px-4 py-1 text-xs text-primary-6">
        4/2018 - 4/2022
      </NewChip>
    </div>
  )
}
