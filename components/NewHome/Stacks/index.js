import NewCard from '@/components/Card/NewCard'
import React, { useEffect, useState } from 'react'
import StacksCard from './StacksCard'
import NewChip from '@/components/Common/NewChip'
import ComponentHeader from '../ComponentHeader'
import classNames from 'classnames'

const STACKS = [
  [
    {
      name: 'Kindertrack',
      image: '/img/stacks/kindertrack.webp',
    },
    {
      name: 'Kinderway',
      image: '/img/stacks/kinderway.webp',
    },
    {
      name: 'The Open Quran',
      image: '/img/stacks/open-quran.webp',
    },
  ],
  [
    {
      name: 'Sleepy Baby',
      image: '/img/stacks/sleppy-baby.webp',
    },
    {
      name: 'White Sound',
      image: '/img/stacks/white-sound.webp',
    },
    {
      name: 'Quran Mubin',
      image: '/img/stacks/mubin.webp',
    },
  ],
  [
    {
      name: 'Prayer Times Light',
      image: '/img/stacks/prayer.webp',
    },
  ],
]

export default function Stacks() {
  const [stack, setStack] = useState(STACKS.filter((data, index) => index < 2))
  return (
    <NewCard className="px-0" id="stacks">
      <div className="px-9">
        <ComponentHeader
          title="Stack"
          description="Software and resources I use on a regular basis."
        />
      </div>

      <div className="mt-10">
        <div className=" border-t border-primary-1 dark:border-darkmode-border">
          {stack.map((stackGroup, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 border-b border-primary-1 px-9 py-9 dark:border-darkmode-border max-sm:grid-cols-2 max-sm:gap-8 max-xs:grid-cols-1"
            >
              {stackGroup.map((stack, index) => (
                <StacksCard
                  className=" justify-self-center border-primary-1 dark:border-darkmode-border max-sm:justify-self-start"
                  key={index}
                  data={stack}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <NewChip
        as="button"
        className="ml-11 mt-9  px-4 py-1 text-sm text-primary-6"
      >
        View All Stack
      </NewChip>
    </NewCard>
  )
}
