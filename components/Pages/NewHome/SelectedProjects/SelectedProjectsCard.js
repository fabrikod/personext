import NewChip from '@/components/Common/NewChip'
import ArrowRight from '@/components/Icons/ArrowRight'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SelectedProjectsCard({ data }) {
  return (
    <div className="button overflow-hidden rounded-xl border border-primary-1 dark:border-darkmode-border dark:bg-lineer-nav-link">
      <div className="relative h-[19rem]">
        <Image src={data.image} alt="" fill className="object-cover" />
      </div>

      <div className="flex items-center gap-7 px-9 py-8 max-xs:flex-col">
        <div>
          <Link
            href="#"
            className="font-medium capitalize dark:text-darkmode-title"
          >
            {data.title}
          </Link>
          <p className="mt-1 text-xs text-primary-6 dark:text-darkmode-text">
            Resolve issues instantly, increase team efficiency, and make
            customers happier with AI-powered chatbots and automations.
          </p>
        </div>

        <Link href="#">
          <NewChip className="flex items-center px-2">
            <ArrowRight />
          </NewChip>
        </Link>
      </div>
    </div>
  )
}
