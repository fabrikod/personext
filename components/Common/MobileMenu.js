import React from 'react'
import NewNav from './NewNav'
import NewChip from './NewChip'

export default function MobileMenu() {
  return (
    <div className="flex min-h-[60px] items-center justify-between rounded-full border border-primary-1 bg-base-2 px-2">
      <NewNav />

      <NewChip
        as="a"
        href="#"
        className="inline-block !py-1 px-4 text-primary-6"
      >
        Connect
      </NewChip>
    </div>
  )
}
