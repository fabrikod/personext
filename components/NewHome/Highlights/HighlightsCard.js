import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import ArrowRight from '@/components/Icons/ArrowRight'
import Image from 'next/image'
import React from 'react'

export default function HighlightsCard() {
  return (
    <NewCard className="flex min-h-[124px] overflow-hidden !p-0 max-sm:flex-col">
      <div className="relative w-[74px] max-sm:mb-4 max-sm:h-32 max-sm:w-full">
        <Image
          fill
          src="/img/highlights-card-1.png"
          className="rounded-l-xl max-sm:rounded-l-none max-sm:rounded-t-xl"
          alt=""
        />
      </div>
      <div className="flex items-center gap-5 px-6 max-sm:flex-col max-sm:pb-5">
        <div>
          <h3 className="dark:text-darkmode-title text-base font-semibold">
            Highlights
          </h3>
          <p className="dark:text-darkmode-text mt-2 text-sm font-normal text-primary-6">
            Software and resources I use on a regular basis.
          </p>
        </div>
        <div className="flex gap-1.5">
          <NewChip className="px-4 py-1">FREE</NewChip>
          <NewChip className="flex items-center px-4">
            <ArrowRight />
          </NewChip>
        </div>
      </div>
    </NewCard>
  )
}
