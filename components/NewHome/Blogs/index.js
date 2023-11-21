import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import BlogsCard from './BlogsCard'

export default function Blogs() {
  return (
    <NewCard className="px-0">
      <div className="px-9">
        <h2 className="text-lg font-semibold ">Blog</h2>
        <p className="mt-2 text-sm font-normal text-primary-6">
          Take a look at the latest articles from.
        </p>
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
