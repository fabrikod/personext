import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import PhotoGallery from './PhotoGallery'
import ComponentHeader from '../ComponentHeader'

export default function Galleries() {
  return (
    <NewCard className="overflow-hidden px-0 pb-0" id="gallery">
      <div className="flex items-start justify-between gap-3 px-9 max-sm:flex-col sm:items-center">
        <div>
          <ComponentHeader
            title="Gallery"
            description="Software and resources I use on a regular basis."
          />
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
