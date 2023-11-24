import NewCard from '@/components/Card/NewCard'
import React from 'react'
import StacksCard from './StacksCard'
import NewChip from '@/components/Common/NewChip'
import ComponentHeader from '../ComponentHeader'

export default function Stacks() {
  return (
    <NewCard className="px-0" id="stacks">
      <div className="px-9">
        <ComponentHeader
          title="Stack"
          description="Software and resources I use on a regular basis."
        />
      </div>

      <div className="gap- mt-10 flex flex-col ">
        <div className="border- dark:border-darkmode-border flex flex-wrap justify-between gap-5 border-t border-primary-1 px-9 py-9">
          <StacksCard />
          <StacksCard />
          <StacksCard />
        </div>
        <div className="border- dark:border-darkmode-border flex flex-wrap justify-between gap-5 border-b border-t border-primary-1 px-9 py-9">
          <StacksCard />
          <StacksCard />
          <StacksCard />
        </div>
      </div>

      <NewChip
        as="button"
        className="ml-11 mt-9 px-4 py-1 text-sm text-primary-6"
      >
        View All Stack
      </NewChip>
    </NewCard>
  )
}
