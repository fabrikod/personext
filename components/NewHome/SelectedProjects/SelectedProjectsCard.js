import NewChip from '@/components/Common/NewChip'
import ArrowRight from '@/components/Icons/ArrowRight'
import Image from 'next/image'
import React from 'react'

export default function SelectedProjectsCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-primary-1">
      <div className="relative h-44">
        <Image
          src="/img/selected-project-1.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-xs:flex-col flex items-center gap-7 px-9 py-8">
        <div>
          <h3>Better AI chatbot</h3>
          <p className="mt-1">
            Resolve issues instantly, increase team efficiency, and make
            customers happier with AI-powered chatbots and automations.
          </p>
        </div>

        <NewChip as="button" className="flex items-center px-2">
          <ArrowRight />
        </NewChip>
      </div>
    </div>
  )
}
