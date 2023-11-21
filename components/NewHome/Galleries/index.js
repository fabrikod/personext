import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import PhotoGallery from './PhotoGallery'

export default function Galleries() {
  return (
    <NewCard className="overflow-hidden px-0 pb-0">
      <div className="flex items-center justify-between px-9">
        <div className="">
          <h2 className="text-lg font-semibold ">Gallery</h2>
          <p className="mt-2 text-sm font-normal text-primary-6">
            Software and resources I use on a regular basis.
          </p>
        </div>
        <NewChip as="button" className="px-4 py-1 text-sm text-primary-6">
          View All Photos
        </NewChip>
      </div>

      <div className="mt-9">
        <PhotoGallery />
      </div>
    </NewCard>
  )
}
