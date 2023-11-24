import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import BlogsCard from './BlogsCard'
import ComponentHeader from '../ComponentHeader'

export default function Blogs() {
  return (
    <NewCard className="px-0" id="blogs">
      <div className="px-9">
        <ComponentHeader
          title="Blog"
          description="Take a look at the latest articles from."
        />
      </div>

      <div className="mt-10 flex flex-col">
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard className="border-b" />
      </div>

      <NewChip
        as="button"
        className="ml-11 mt-9 px-4 py-1 text-sm text-primary-6"
      >
        View All Posts
      </NewChip>
    </NewCard>
  )
}
