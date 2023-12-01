import React from 'react'
import NewCard from '../Card/NewCard'
import NewChip from '../Common/NewChip'
import Image from 'next/image'
import { Mail } from '../Icons'
import Circle from '../Icons/Circle'

export default function Profile({ data }) {
  return (
    <NewCard id="profile" data-name="Profile">
      {data.image && (
        <NewChip as="a" href="#" className={'mb-5 inline-block'}>
          <div className="relative h-24 w-24">
            <Image
              fill
              src={data.image}
              className="rounded-full object-cover"
              alt=""
            />
          </div>
        </NewChip>
      )}

      <h1 className="text-lg font-semibold dark:text-darkmode-title">
        {data.fullName}
      </h1>
      <span className="mt-1 inline-block font-normal text-primary-6 dark:text-darkmode-text">
        {data.description}
      </span>
      <p className="mt-4 text-sm font-normal text-primary-6 dark:text-darkmode-text">
        {data.job}
      </p>

      <div className="mt-10 flex  items-start justify-between gap-2.5 max-sm:flex-col">
        <div className="flex gap-2.5">
          <NewChip
            as="a"
            href={data.connectLink}
            className={'flex items-center gap-1 px-4 text-primary-6'}
          >
            <div className="text-2xl leading-3">+</div>
            Connect
          </NewChip>

          <NewChip
            as="a"
            href={`mail:${data.email}`}
            className="flex items-center px-3"
          >
            <Mail />
          </NewChip>
        </div>

        <NewChip className="inline-flex items-center gap-2 px-5 text-primary-6">
          <Circle className="fill-circle-red " />
          {data.available_for_projects && 'Not'} available for projects
        </NewChip>
      </div>
    </NewCard>
  )
}
