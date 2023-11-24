import React from 'react'
import NewCard from '../Card/NewCard'
import NewChip from '../Common/NewChip'
import Image from 'next/image'
import { Mail } from '../Icons'

export default function Profile() {
  return (
    <NewCard id="profile">
      <NewChip as="a" href="#" className={'inline-block'}>
        <div className="relative h-24 w-24">
          <Image fill src="/img/profile.jpg" className="rounded-full" alt="" />
        </div>
      </NewChip>

      <h1 className="dark:text-darkmode-title mt-5 text-lg font-semibold">
        Abdullah Önden
      </h1>
      <span className="dark:text-darkmode-text mt-1 inline-block font-normal text-primary-6">
        Academician Dr. Faculty Member
      </span>
      <p className="dark:text-darkmode-text mt-4 text-sm font-normal text-primary-6">
        Hey, I’m @abdullahonden Assistant Profesor at Yalova University and
        Founder of Fabrikod. Developing new technologies, teaching to next
        generation.
      </p>

      <div className="mt-10 flex  items-start justify-between gap-2.5 max-xs:flex-col">
        <div className="flex gap-2.5">
          <NewChip
            as="a"
            href="#"
            className={'inline-block px-4 text-primary-6'}
          >
            Connect
          </NewChip>

          <NewChip as="a" href="#" className="flex items-center px-3">
            <Mail />
          </NewChip>
        </div>

        <NewChip
          as="a"
          href="#"
          className="inline-flex items-center px-5 text-primary-6"
        >
          Not available for projects
        </NewChip>
      </div>
    </NewCard>
  )
}
