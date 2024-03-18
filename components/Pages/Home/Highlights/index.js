import React from 'react'
import HighlightsCard from './HighlightsCard'
import ComponentHeader from '../ComponentHeader'
import Card from '@/components/Card/Card'

export default function Highlights() {
  return (
    <Card id="highlights">
      <ComponentHeader
        title="Highlights"
        description="Software and resources I use on a regular basis."
      />

      <div className="mt-10 flex flex-col gap-9">
        <HighlightsCard />
        <HighlightsCard />
      </div>
    </Card>
  )
}
