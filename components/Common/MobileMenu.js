import React from 'react'
import NewNav from './NewNav'
import NewChip from './NewChip'
import { useUser } from '@/context/user'

export default function MobileMenu() {
  const { user } = useUser()

  return (
    <div className="flex min-h-[60px] items-center justify-between rounded-[28px] border border-primary-1 bg-base-2 px-2 dark:border-darkmode-border dark:bg-darkmode-base-1 max-sm:flex-col max-sm:items-start max-sm:py-3 sm:rounded-full">
      <NewNav className="max-sm:flex-col max-sm:items-start" />

      <div>
        <NewChip
          as="a"
          href={user.connectLink}
          className="inline-block !py-1 px-4 text-sm text-primary-6 max-sm:mt-3"
        >
          Connect
        </NewChip>
      </div>
    </div>
  )
}
