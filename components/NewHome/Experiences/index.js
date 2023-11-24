import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import ExperienceCard from './ExperiencesCard'
import ComponentHeader from '../ComponentHeader'

export default function Experiences() {
  return (
    <NewCard className="px-0" id="experience">
      <div className="px-9">
        <ComponentHeader
          title="Experience"
          description="Coordination, and problem-solving abilities"
        />
      </div>

      <div className="mt-10 flex flex-col">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard className="border-b" />
      </div>

      <NewChip
        as="button"
        className="ml-11 mt-9 px-4 py-1 text-sm text-primary-6"
      >
        Download Resume
      </NewChip>
    </NewCard>
  )
}
