import NewCard from '@/components/Card/NewCard'
import React from 'react'
import PublicationsCard from './PublicationsCard'
import NewChip from '@/components/Common/NewChip'

export default function Publications() {
  return (
    <NewCard className="px-0">
      <div className="px-9">
        <h2 className="text-lg font-semibold ">Publications</h2>
        <p className="mt-2 text-sm font-normal text-primary-6">
          Take a look at the latest articles from.
        </p>
      </div>

      <div className="mt-10 flex flex-col">
        <PublicationsCard />
        <PublicationsCard />
        <PublicationsCard />
        <PublicationsCard className="border-b" />
      </div>

      <NewChip
        as="button"
        className="ml-11 mt-9 px-4 py-1 text-sm text-primary-6"
      >
        View All Articles
      </NewChip>
    </NewCard>
  )
}
