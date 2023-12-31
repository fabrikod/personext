import React from 'react'
import HighlightsCard from './HighlightsCard'
import ComponentHeader from '../ComponentHeader'
import NewCard from '@/components/Card/NewCard'

export default function Highlights() {
  return (
    <NewCard id="highlights">
      <ComponentHeader
        title="Highlights"
        description="Software and resources I use on a regular basis."
      />

      <div className="mt-10 flex flex-col gap-9">
        <HighlightsCard />
        <HighlightsCard />
      </div>
    </NewCard>
  )
}
