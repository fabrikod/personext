import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import PhotoGallery from './PhotoGallery'

export default function Galleries() {
  return (
    <NewCard className="overflow-hidden px-0 pb-0">
      <div className="flex items-start justify-between gap-3 px-9 max-sm:flex-col sm:items-center">
        <div className="">
          <h2 className="text-lg font-semibold ">Gallery</h2>
          <p className="mt-2 text-sm font-normal text-primary-6">
            Software and resources I use on a regular basis.
          </p>
        </div>
        <div className="flex justify-center max-sm:w-full">
          <NewChip as="button" className="px-4 py-1 text-sm text-primary-6">
            View All Photos
          </NewChip>
        </div>
      </div>

      <div className="mt-9">
        <PhotoGallery />
      </div>
    </NewCard>
  )
}
