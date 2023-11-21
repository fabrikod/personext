import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import ExperienceCard from './ExperiencesCard'

export default function Experiences() {
  return (
    <NewCard className="px-0">
      <div className="px-9">
        <h2 className="text-lg font-semibold ">Experience</h2>
        <p className="mt-2 text-sm font-normal text-primary-6">
          Coordination, and problem-solving abilities
        </p>
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
