import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import ArrowRight from '@/components/Icons/ArrowRight'
import Image from 'next/image'
import React from 'react'

export default function HighlightsCard() {
  return (
    <NewCard className="flex min-h-[124px] overflow-hidden p-0">
      <div className="relative w-[74px]">
        <Image fill src="/img/highlights-card-1.png" />
      </div>
      <div className="flex items-center gap-5 px-6">
        <div>
          <h3 className="text-base font-semibold ">Highlights</h3>
          <p className="mt-2 text-sm font-normal text-primary-6">
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
