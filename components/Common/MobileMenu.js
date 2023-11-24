import React from 'react'
import NewNav from './NewNav'
import NewChip from './NewChip'

export default function MobileMenu() {
  return (
    <div className="dark:bg-darkmode-base-1 dark:border-darkmode-border flex min-h-[60px] items-center justify-between rounded-[28px] border border-primary-1 bg-base-2 px-2 max-sm:flex-col max-sm:items-start max-sm:py-3 sm:rounded-full">
      <NewNav className="max-sm:flex-col max-sm:items-start" />

      <div className="flex w-full justify-center">
        <NewChip
          as="a"
          href="#"
          className="inline-block !py-1 px-4 text-sm text-primary-6"
        >
          Connect
        </NewChip>
      </div>
    </div>
  )
}
