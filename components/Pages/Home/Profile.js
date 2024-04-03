import React from 'react'
import Card from '@/components/Card/Card'
import Chip from '@/components/Common/Chip'
import Image from 'next/image'
import Link from 'next/link'
import { Mail } from '@/components/Icons'
import Circle from '@/components/Icons/Circle'

export default function Profile({ data }) {
  return (
    <Card id="profile" data-name="Profile">
      {data.image && (
        <Link href="#">
          <Chip className={'mb-5 inline-block'}>
            <div className="relative h-[4.9rem] w-[4.9rem]">
              <Image
                fill
                src={data.image}
                className="rounded-full object-cover"
                alt=""
              />
            </div>
          </Chip>
        </Link>
      )}

      <h1 className="text-lg font-semibold dark:text-darkmode-title">
        {data.fullName}
      </h1>
      <span className="mt-1 inline-block text-sm font-normal text-primary-6 dark:text-darkmode-text">
        {data.description}
      </span>
      <p className="mt-4 text-xs font-normal text-primary-6 dark:text-darkmode-text">
        {data.job}
      </p>

      <div className="mt-10 flex  items-start justify-between gap-2.5 max-sm:flex-col">
        <div className="flex gap-2.5">
          <Chip
            as="a"
            href={data.connectLink}
            className={'flex items-center gap-2 px-4 text-xs text-primary-6'}
          >
            <Image
              src="/img/icons/arrow-up.svg"
              width={10}
              height={10}
              alt="Picture of the author"
            />
            View Demo
          </Chip>
        </div>

        <Chip
          as="a"
          href={data.deploy}
          className="inline-flex items-center gap-2 px-5 text-xs text-primary-6"
        >
          <Image
            src="/img/icons/deploy.svg"
            width={13.64}
            height={15}
            alt="Picture of the author"
          />
          {/*<div className="text-2xl leading-3">+</div>*/}
          Deploy
        </Chip>
      </div>
    </Card>
  )
}
