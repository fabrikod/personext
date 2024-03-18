import Card from '@/components/Card/Card'
import Chip from '@/components/Common/Chip'
import React from 'react'
import ExperienceCard from './ExperiencesCard'
import ComponentHeader from '../ComponentHeader'
import classNames from 'classnames'

const EXPERIENCES = [
  {
    company: 'Company',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    date: '05/2011',
    position: 'Co Founder',
  },
  {
    company: 'Company',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    date: '05/2011 - 06/2007',
    position: 'Software Development Professional',
  },
]

export default function Experiences() {
  return (
    <Card className="px-0" id="experiences" data-name="Experiences">
      <div className="px-9">
        <ComponentHeader
          title="Experience"
          description="Coordination, and problem-solving abilities"
        />
      </div>

      <div className="mt-10 flex flex-col">
        {EXPERIENCES.map((experience, index, array) => (
          <ExperienceCard
            data={experience}
            key={index}
            className={classNames(index === array.length - 1 && 'border-b')}
          />
        ))}
      </div>

      <Chip
        as="a"
        href="/john-doe-cv.pdf"
        className="button ml-11 mt-9 inline-block px-4 py-1 text-xs text-primary-6 dark:bg-lineer-nav-link"
      >
        Download Resume
      </Chip>
    </Card>
  )
}
