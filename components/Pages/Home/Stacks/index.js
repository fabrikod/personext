import Card from '@/components/Card/Card'
import React, { useMemo, useState } from 'react'
import StacksCard from './StacksCard'
import Chip from '@/components/Common/Chip'
import ComponentHeader from '../ComponentHeader'

export default function Stacks({ data }) {
  const getAllData = () => {
    setStack(stacks)
  }

  const stacks = useMemo(
    () =>
      data.reduce((acc, current, index) => {
        const chunkIndex = Math.floor(index / 3)
        if (!acc[chunkIndex]) {
          acc[chunkIndex] = []
        }
        acc[chunkIndex].push(current)
        return acc
      }, []),
    [data]
  )

  const [stack, setStack] = useState(stacks.filter((data, index) => index < 2))
  return (
    <Card className="px-0" id="stacks" data-name="Stacks">
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
                  className="justify-self-start border-primary-1 dark:border-darkmode-border max-sm:justify-self-start"
                  key={index}
                  data={stack}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <Chip
        className="button ml-11 mt-9 inline-block px-4 py-1 text-xs text-primary-6 dark:bg-lineer-nav-link"
        as="button"
        onClick={getAllData}
      >
        View All Stack
      </Chip>
    </Card>
  )
}
