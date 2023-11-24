import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import SelectedProjectsCard from './SelectedProjectsCard'
import ComponentHeader from '../ComponentHeader'

export default function SelectedProjects() {
  return (
    <NewCard className="px-0" id="selected-project">
      <div className="px-9">
        <ComponentHeader
          title="Selected Projects"
          description="Featured projects, templates and visual experiments"
        />
      </div>

      <div className="mt-10 flex flex-col gap-9 px-9">
        <SelectedProjectsCard />
        <SelectedProjectsCard />
        <SelectedProjectsCard />
      </div>

      <hr className="dark:border-darkmode-border mt-9 border-primary-1" />

      <NewChip
        as="button"
        className="ml-11 mt-9 px-4 py-1 text-sm text-primary-6"
      >
        View All Projects
      </NewChip>
    </NewCard>
  )
}
