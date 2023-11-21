import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import SelectedProjectsCard from './SelectedProjectsCard'

export default function SelectedProjects() {
  return (
    <NewCard className="px-0" id="selected-project">
      <div className="px-9">
        <h2 className="text-lg font-semibold ">Selected Projects</h2>
        <p className="mt-2 text-sm font-normal text-primary-6">
          Featured projects, templates and visual experiments
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-9 px-9">
        <SelectedProjectsCard />
        <SelectedProjectsCard />
        <SelectedProjectsCard />
      </div>

      <hr className="mt-9 border-primary-1" />

      <NewChip
        as="button"
        className="ml-11 mt-9 px-4 py-1 text-sm text-primary-6"
      >
        View All Projects
      </NewChip>
    </NewCard>
  )
}
