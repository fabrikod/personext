import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import ExperienceCard from './ExperiencesCard'
import ComponentHeader from '../ComponentHeader'
import classNames from 'classnames'

const EXPERIENCES = [
  {
    company: 'Fabrikod',
    description:
      'Veri bilimi ile işletme literatürü birleştirilerek, kurumlara maksimum kar sağlayan etkin yazılım çözümlerinin üretilmesi sağlanmıştır.',
    date: '05/2011',
    position: 'Co Founder',
  },
  {
    company: 'Logo Yazılım',
    description:
      'Logo Yazılım (Coretech), Vestel, Electroworld, Schafer, Esse, Finspor, Silverline, G2M gibi kurumsal perakende şirketlerinin e-ticaret girişimlerinin işletmeden müşteriye (B2C) ve işletmeler arası (B2B) alanlarında hizmet verecek yazılımlarının geliştirilmesi sağlanmıştır.',
    date: '05/2011 - 06/2007',
    position: 'Software Development Professional',
  },
]

export default function Experiences() {
  return (
    <NewCard className="px-0" id="experiences" data-name="Experiences">
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

      <NewChip
        as="a"
        href="/abdullah-onden-cv.pdf"
        className="ml-11 mt-9 inline-block px-4 py-1 text-sm text-primary-6"
      >
        Download Resume
      </NewChip>
    </NewCard>
  )
}
