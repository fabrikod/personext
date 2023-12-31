import NewCard from '@/components/Card/NewCard'
import React from 'react'
import PublicationsCard from '@/components/Pages/NewHome/Publications/PublicationsCard'
import NewChip from '@/components/Common/NewChip'
import ComponentHeader from '../ComponentHeader'
import classNames from 'classnames'
import Link from 'next/link'

export default function Publications({ data }) {
  return (
    <NewCard className="px-0" id="publications" data-name="Publications">
      <div className="px-9">
        <ComponentHeader
          title="Publications"
          description="Take a look at the latest articles from."
        />
      </div>

      <div className="mt-10 flex flex-col">
        {data.map((article, index, array) => (
          <PublicationsCard
            article={article}
            className={classNames(array.length - 1 === index && 'border-b')}
            key={index}
          />
        ))}
      </div>

      <Link href="/publications">
        <NewChip className="button ml-11 mt-9 inline-block px-4 py-1 text-xs text-primary-6 dark:bg-lineer-nav-link">
          View All Publications
        </NewChip>
      </Link>
    </NewCard>
  )
}
